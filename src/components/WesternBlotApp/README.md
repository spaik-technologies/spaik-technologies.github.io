# Western Blot Analysis Tool

A React-based application for analyzing Western Blot images using background correction and neural network-based band detection.

## Features

- Upload multiple TIF/TIFF images with different exposure times
- Process images with background noise correction
- Neural network model for band detection
- Save and export results to Excel/CSV format
- Interactive image viewer with exposure time selection

## Directory Structure

```
WesternBlotApp/
├── components/         # UI components
│   ├── FileUpload.js   # File upload component
│   ├── ImageViewer.js  # Image viewer with exposure time selection
│   ├── AnalysisControls.js # Controls for background threshold
│   └── ResultsPanel.js # Results display and export panel
├── services/           # Service modules
│   ├── fileService.js  # TIFF file handling and export services
│   └── modelService.js # Neural network model integration
├── utils/              # Utility functions
│   └── imageProcessing.js # Image processing algorithms
├── hooks/              # Custom React hooks
│   └── useWesternBlot.js # State management hook
├── constants/          # Application constants
│   └── index.js        # Threshold values, dropdown options, etc.
└── index.js            # Main component entry point
```

## Technical Implementation

### Image Processing

The application processes Western Blot images in several steps:

1. **Image Loading**: Multiple TIFF images with different exposure times are loaded using the `utif` library.
2. **Background Correction**: A threshold-based approach identifies background regions and calculates mean noise.
3. **Intensity Calculation**: Linear regression on pixel values across different exposure times calculates corrected intensities.

### Neural Network Model

The application uses a converted PyTorch model (in ONNX format) to detect and segment protein bands:

1. The PyTorch model is converted to ONNX format using the `convert_model_to_onnx.py` script.
2. The ONNX model is loaded in the browser using the `onnxjs` library.
3. When a user selects a region, a 64×64 crop is processed by the model to detect the band.

## Usage Instructions

1. **Upload Images**: Click "Select Files" to upload multiple TIF images with different exposure times.
2. **Adjust Background**: Use the threshold slider to refine background detection.
3. **Select Bands**: Click on the image to select a band region for analysis.
4. **Save Results**: Choose the membrane, lane, and protein, then click "Save Current Result".
5. **Export Data**: Enter a filename and export the results to Excel or CSV format.

## Dependencies

- `utif`: For parsing TIFF image files
- `onnxjs`: For running the neural network model in the browser
- `file-saver`: For saving exported files
- `xlsx`: For creating Excel and CSV files

## Model Conversion

To convert the PyTorch model to ONNX format, run:

```bash
python convert_model_to_onnx.py --input ./models/model_wb_separator_64_8.pth --output ./public/models/model_wb_separator_64_8.onnx
```

This script requires PyTorch and defines the model architecture to match the original model.