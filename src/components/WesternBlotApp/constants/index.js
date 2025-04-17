// Constants used throughout the Western Blot App

// Image processing constants
export const MAX_TIF_VALUE = 65535;  // Max value for a 16-bit image
export const BACKGROUND_THRESHOLD = 0.01;  // Default threshold for background detection
export const SATURATION_THRESHOLD = 0.95;  // Threshold for saturation detection

// Crop size for band detection (should match neural network input size)
export const CROP_SIZE = 64;

// Dropdown options
export const MEMBRANE_OPTIONS = ['Membrane 1', 'Membrane 2', 'Membrane 3', 'Membrane 4'];
export const LANE_OPTIONS = [
  'Lane 1', 'Lane 2', 'Lane 3', 'Lane 4', 'Lane 5', 
  'Lane 6', 'Lane 7', 'Lane 8'
];
export const PROTEIN_OPTIONS = [
  'Actin', 'Tubulin', 'GAPDH', 'p53', 
  'ERK', 'p-ERK', 'AKT', 'p-AKT', 'Other'
];

// Image format constants
export const IMAGE_FORMATS = ['tif', 'Tif', 'TIF', 'tiff', 'TIFF']; // Supported image formats

// UI constants
export const DEFAULT_CANVAS_WIDTH = 800;
export const DEFAULT_CANVAS_HEIGHT = 600;