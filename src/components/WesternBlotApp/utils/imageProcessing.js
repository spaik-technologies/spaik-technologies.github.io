import { MAX_TIF_VALUE, SATURATION_THRESHOLD } from '../constants';

/**
 * Extract exposure time from a file name using regex
 * @param {string} fileName - Name of the file
 * @returns {number} - Extracted exposure time
 */
export const extractExposureTime = (fileName) => {
  const match = fileName.match(/(\d+)/);
  if (match) {
    return parseFloat(match[1]);
  } else {
    throw new Error(`No exposure time found in ${fileName}`);
  }
};

/**
 * Process an array of image data
 * @param {Array} imageDataArray - Array of raw image data
 * @returns {Object} - Processed stack of images and exposure times
 */
export const processImages = (imageDataArray) => {
  if (!imageDataArray || imageDataArray.length === 0) {
    return { imageStack: null, exposureTimes: null };
  }

  try {
    // Sort images by their total intensity
    const sortedImages = [...imageDataArray].sort(
      (a, b) => {
        const sumA = Array.from(a.data).reduce((sum, val) => sum + val, 0);
        const sumB = Array.from(b.data).reduce((sum, val) => sum + val, 0);
        return sumA - sumB;
      }
    );

    // Create a zero image as the first channel
    const { width, height } = sortedImages[0];
    const zeroImage = {
      data: new Float32Array(width * height).fill(0),
      width,
      height
    };
    
    // Process and invert images (1 - pixel) because dark bands are the signal
    const processedImages = sortedImages.map(img => {
      const processedData = new Float32Array(img.data.length);
      for (let i = 0; i < img.data.length; i++) {
        processedData[i] = 1 - img.data[i]; // Invert the image values
      }
      return {
        data: processedData,
        width: img.width,
        height: img.height
      };
    });

    // Stack images with zero image first
    const imageStack = [zeroImage, ...processedImages];

    // Extract and sort exposure times
    const exposureTimes = [0, ...sortedImages.map(img => extractExposureTime(img.fileName))];

    return { 
      imageStack, 
      exposureTimes,
      width,
      height
    };
  } catch (error) {
    console.error('Error processing images:', error);
    throw new Error('Failed to process images: ' + error.message);
  }
};

/**
 * Calculate background mean noise
 * @param {Array} imageStack - Stack of processed images
 * @param {number} threshold - Threshold value for background detection
 * @returns {Object} - Background mask and mean noise
 */
export const getBackgroundMeanNoise = (imageStack, threshold) => {
  if (!imageStack || imageStack.length === 0) {
    return { backgroundMask: null, meanNoise: null };
  }

  try {
    const width = imageStack[0].width;
    const height = imageStack[0].height;
    const channels = imageStack.length;
    const pixelCount = width * height;

    // Calculate mean across all images for each pixel
    const meanValues = new Float32Array(pixelCount);
    for (let i = 0; i < pixelCount; i++) {
      let sum = 0;
      for (let c = 0; c < channels; c++) {
        sum += imageStack[c].data[i];
      }
      meanValues[i] = sum / channels;
    }

    // Create background mask based on threshold
    const backgroundMask = new Array(pixelCount);
    for (let i = 0; i < pixelCount; i++) {
      backgroundMask[i] = meanValues[i] < threshold;
    }

    // Calculate mean noise for each channel using the background mask
    const meanNoise = new Array(channels).fill(0);
    const maskCount = backgroundMask.filter(Boolean).length;

    if (maskCount > 0) {
      for (let c = 0; c < channels; c++) {
        let sum = 0;
        for (let i = 0; i < pixelCount; i++) {
          if (backgroundMask[i]) {
            sum += imageStack[c].data[i];
          }
        }
        meanNoise[c] = sum / maskCount;
      }
    }

    return { backgroundMask, meanNoise };
  } catch (error) {
    console.error('Error analyzing background:', error);
    throw new Error('Failed to analyze background: ' + error.message);
  }
};

/**
 * Extract intensity values from image stack
 * @param {Array} imageStack - Stack of processed images
 * @param {Array} exposureTimes - Array of exposure times
 * @param {Array} meanNoise - Background noise for each exposure
 * @returns {Object} - Calculated intensity values
 */
export const extractIntensities = (imageStack, exposureTimes, meanNoise) => {
  if (!imageStack || !exposureTimes || !meanNoise) {
    return null;
  }

  try {
    const width = imageStack[0].width;
    const height = imageStack[0].height;
    const channels = imageStack.length;
    const pixelCount = width * height;
    
    // Create arrays for intensity calculation
    const intensities = new Float32Array(pixelCount).fill(0);
    const validCounts = new Uint8Array(pixelCount).fill(0);

    // For each pixel position
    for (let i = 0; i < pixelCount; i++) {
      let numerator = 0;
      let denominator = 0;

      // For each exposure channel
      for (let c = 0; c < channels; c++) {
        // Check if pixel is below saturation threshold
        if (imageStack[c].data[i] < SATURATION_THRESHOLD) {
          // Apply noise correction and calculate linear regression components
          const correctedValue = Math.max(0, imageStack[c].data[i] - meanNoise[c]);
          const time = exposureTimes[c];
          
          numerator += time * correctedValue;
          denominator += time * time;
          validCounts[i]++;
        }
      }

      // Calculate intensity as slope of linear regression
      intensities[i] = denominator > 0 ? numerator / denominator : 0;
    }

    // Find maximum intensity for normalization
    let maxIntensity = 0;
    for (let i = 0; i < pixelCount; i++) {
      maxIntensity = Math.max(maxIntensity, intensities[i]);
    }
    
    // Normalize intensities to [0, 1] range
    if (maxIntensity > 0) {
      for (let i = 0; i < pixelCount; i++) {
        intensities[i] = Math.max(0, Math.min(1, intensities[i] / maxIntensity));
      }
    }

    return {
      intensities,
      width,
      height
    };
  } catch (error) {
    console.error('Error extracting intensities:', error);
    throw new Error('Failed to extract intensities: ' + error.message);
  }
};