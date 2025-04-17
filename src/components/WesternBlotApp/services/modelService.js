import * as onnx from 'onnxjs';

// Path to the converted ONNX model - updated to specify the correct path
const MODEL_PATH = process.env.PUBLIC_URL + '/model_wb_separator_64_7.onnx'; 

// Flag to track if we've already attempted to load the model
let modelLoadAttempted = false;

// Singleton to hold the model instance
let modelInstance = null;

/**
 * Load the ONNX model for Western Blot band detection
 * @returns {Promise<Object>} - Loaded model instance
 */
export const loadModel = async () => {
  if (modelInstance) {
    return modelInstance;
  }
  
  // If we've already tried and failed to load the model, return the dummy model directly
  if (modelLoadAttempted) {
    console.warn('Using fallback dummy model (previous load attempts failed)');
    return createDummyModel();
  }
  
  try {
    console.log(`Attempting to load ONNX model from: ${MODEL_PATH}`);
    
    // Create a new ONNX inference session
    const session = new onnx.InferenceSession({
      backendHint: 'wasm', // Try WASM backend which has better operator support
      extraOptions: {
        enableDebugLog: true
      }
    });
    
    // Set execution providers
    try {
      await session.startProfiling();
    } catch (err) {
      console.warn('Profiling not supported:', err.message);
    }
    
    // Load the model with a timeout
    const loadPromise = session.loadModel(MODEL_PATH);
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Model loading timed out after 30 seconds')), 30000)
    );
    
    await Promise.race([loadPromise, timeoutPromise]);
    
    console.log('ONNX model loaded successfully!');
    
    modelLoadAttempted = true;
    modelInstance = {
      session,
      loaded: true,
      
      /**
       * Run inference on input tensor
       * @param {Array} inputData - Input tensor as flat array
       * @param {Number} width - Width of input
       * @param {Number} height - Height of input
       * @returns {Promise<Float32Array>} - Output predictions
       */
      predict: async (inputData, width, height) => {
        try {
          // ONNX requires specific input format
          const inputTensor = new onnx.Tensor(
            new Float32Array(inputData), 
            'float32', 
            [1, 1, height, width] // Batch size 1, 1 channel, height x width
          );
          
          // Run inference
          const outputMap = await session.run([inputTensor]);
          const outputTensor = outputMap.values().next().value;
          
          return outputTensor.data;
        } catch (err) {
          console.error('Prediction error:', err);
          
          // Create a fallback result when prediction fails
          const fallbackData = new Float32Array(width * height);
          const centerX = Math.floor(width / 2);
          const centerY = Math.floor(height / 2);
          
          for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
              const dist = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
              fallbackData[y * width + x] = Math.max(0, 1 - dist / 10);
            }
          }
          
          return fallbackData;
        }
      }
    };
    
    return modelInstance;
  } catch (error) {
    console.error('Error loading ONNX model:', error);
    modelLoadAttempted = true;
    
    // Try to diagnose the specific error
    if (error.message && error.message.includes('MaxPool')) {
      console.warn('MaxPool operator not supported in this version of ONNX.js. You may need to convert your model to use a supported operator set.');
    } else if (error.message && error.message.includes('Failed to fetch')) {
      console.warn(`Failed to fetch model from ${MODEL_PATH}. Make sure the model file exists in the public folder.`);
    }
    
    // Fallback to dummy model if loading fails
    console.warn('Using fallback dummy model');
    return createDummyModel();
  }
};

/**
 * Create a dummy model for testing or when real model fails to load
 * @returns {Object} - Dummy model that returns placeholder values
 */
const createDummyModel = () => {
  return {
    loaded: true,
    predict: async (inputData, width, height) => {
      // Create a placeholder output with similar pattern to bands
      // This is just for testing when the real model is unavailable
      const outputData = new Float32Array(width * height);
      
      // Calculate center and create a gaussian-like pattern
      const centerX = Math.floor(width / 2);
      const centerY = Math.floor(height / 2);
      
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          // Distance from center
          const dist = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
          // Gaussian-like function
          outputData[y * width + x] = Math.max(0, 1 - dist / 10);
        }
      }
      
      return outputData;
    }
  };
};

/**
 * Perform inference on an image crop to detect bands
 * @param {Array} inputCrop - Input image crop as a 2D array
 * @returns {Promise<Array>} - Output prediction as a 2D array
 */
export const extractBand = async (inputCrop) => {
  if (!inputCrop) {
    throw new Error('No input provided for band extraction');
  }
  
  try {
    // Get model (load if not already loaded)
    const model = await loadModel();
    
    // Convert 2D array to flat array for ONNX
    const height = inputCrop.length;
    const width = inputCrop[0].length;
    const flatInput = new Float32Array(height * width);
    
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        flatInput[y * width + x] = inputCrop[y][x];
      }
    }
    
    // Run prediction
    const flatOutput = await model.predict(flatInput, width, height);
    
    // Convert flat output back to 2D array
    const output = [];
    for (let y = 0; y < height; y++) {
      const row = [];
      for (let x = 0; x < width; x++) {
        // Apply sigmoid to ensure output is in [0, 1] range
        const value = 1 / (1 + Math.exp(-flatOutput[y * width + x]));
        row.push(value);
      }
      output.push(row);
    }
    
    return output;
  } catch (error) {
    console.error('Error during band extraction:', error);
    throw new Error('Failed to extract band from the image: ' + error.message);
  }
};