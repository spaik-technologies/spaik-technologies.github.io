import { useState, useCallback, useEffect } from 'react';
import { 
  processImages, 
  getBackgroundMeanNoise, 
  extractIntensities 
} from '../utils/imageProcessing';
import { loadTiffImages, exportToExcel, exportToCSV } from '../services/fileService';
import { extractBand } from '../services/modelService';
import { BACKGROUND_THRESHOLD, MEMBRANE_OPTIONS, LANE_OPTIONS, PROTEIN_OPTIONS } from '../constants';

/**
 * Custom hook for Western Blot app state management
 */
export const useWesternBlot = () => {
  // State for file inputs
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // State for image data
  const [imageData, setImageData] = useState(null);
  const [imageStack, setImageStack] = useState(null);
  const [exposureTimes, setExposureTimes] = useState(null);
  const [currentExposureIndex, setCurrentExposureIndex] = useState(0);
  
  // State for analysis
  const [threshold, setThreshold] = useState(BACKGROUND_THRESHOLD);
  const [backgroundMask, setBackgroundMask] = useState(null);
  const [meanNoise, setMeanNoise] = useState(null);
  const [intensities, setIntensities] = useState(null);
  
  // State for selection
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [inputCrop, setInputCrop] = useState(null);
  const [outputCrop, setOutputCrop] = useState(null);
  
  // State for results
  const [results, setResults] = useState({});
  const [selectedMembrane, setSelectedMembrane] = useState(MEMBRANE_OPTIONS[0]);
  const [selectedLane, setSelectedLane] = useState(LANE_OPTIONS[0]);
  const [selectedProtein, setSelectedProtein] = useState(PROTEIN_OPTIONS[0]);
  const [filename, setFilename] = useState('western_blot_results.xlsx');
  
  /**
   * Handle file input change
   */
  const handleFileChange = useCallback(async (fileList) => {
    setLoading(true);
    setError(null);
    try {
      setFiles(Array.from(fileList));
      const loadedImages = await loadTiffImages(fileList);
      setImageData(loadedImages);
      
      // Process images
      const processed = processImages(loadedImages);
      setImageStack(processed.imageStack);
      setExposureTimes(processed.exposureTimes);
      setCurrentExposureIndex(0);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Error loading files');
    } finally {
      setLoading(false);
    }
  }, []);
  
  /**
   * Perform background analysis based on threshold
   */
  const analyzeBackground = useCallback(() => {
    if (!imageStack) return;
    
    try {
      const { backgroundMask, meanNoise } = getBackgroundMeanNoise(imageStack, threshold);
      setBackgroundMask(backgroundMask);
      setMeanNoise(meanNoise);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Error analyzing background');
    }
  }, [imageStack, threshold]);
  
  /**
   * Calculate intensity image
   */
  const calculateIntensities = useCallback(() => {
    if (!imageStack || !exposureTimes || !meanNoise) return;
    
    try {
      const result = extractIntensities(imageStack, exposureTimes, meanNoise);
      setIntensities(result.intensities);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Error calculating intensities');
    }
  }, [imageStack, exposureTimes, meanNoise]);
  
  /**
   * Handle canvas click to select a point
   */
  const handlePointSelection = useCallback(async (x, y) => {
    if (!intensities) return;
    
    setSelectedPoint({ x, y });
    
    try {
      // Extract a crop around selected point
      const crop = extractCrop(intensities, x, y, 64, 64);
      setInputCrop(crop);
      
      // Process crop through neural network model
      const bandMask = await extractBand(crop);
      setOutputCrop(bandMask);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Error processing selected region');
    }
  }, [intensities]);
  
  /**
   * Helper to extract a crop from an image
   */
  const extractCrop = (image, centerX, centerY, cropWidth, cropHeight) => {
    if (!image) return null;
    
    const width = image.width || Math.sqrt(image.length);
    const height = image.height || image.length / width;
    
    const crop = new Array(cropHeight).fill(0).map(() => new Array(cropWidth).fill(0));
    
    const halfWidth = Math.floor(cropWidth / 2);
    const halfHeight = Math.floor(cropHeight / 2);
    
    for (let i = 0; i < cropHeight; i++) {
      for (let j = 0; j < cropWidth; j++) {
        const srcY = centerY - halfHeight + i;
        const srcX = centerX - halfWidth + j;
        
        if (srcX >= 0 && srcX < width && srcY >= 0 && srcY < height) {
          crop[i][j] = image[srcY * width + srcX];
        }
      }
    }
    
    return crop;
  };
  
  /**
   * Save current result
   */
  const saveResult = useCallback(() => {
    if (!outputCrop) return;
    
    // Calculate the sum of values in output crop as the result
    const value = outputCrop.reduce((sum, row) => 
      sum + row.reduce((rowSum, cell) => rowSum + cell, 0), 0);
    
    const resultKey = `${selectedMembrane},${selectedLane},${selectedProtein}`;
    
    setResults(prev => ({
      ...prev,
      [resultKey]: value
    }));
  }, [outputCrop, selectedMembrane, selectedLane, selectedProtein]);
  
  /**
   * Export results to a file
   */
  const exportResults = useCallback((format = 'xlsx') => {
    if (Object.keys(results).length === 0) {
      setError('No results to export');
      return;
    }
    
    try {
      if (format === 'csv') {
        const csvFilename = filename.replace(/\.xlsx$/, '.csv');
        exportToCSV(results, csvFilename);
      } else {
        exportToExcel(results, filename);
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'Error exporting results');
    }
  }, [results, filename]);
  
  // Run background analysis when imageStack or threshold changes
  useEffect(() => {
    if (imageStack) {
      analyzeBackground();
    }
  }, [imageStack, threshold, analyzeBackground]);
  
  // Calculate intensities when meanNoise is updated
  useEffect(() => {
    if (meanNoise) {
      calculateIntensities();
    }
  }, [meanNoise, calculateIntensities]);
  
  return {
    // State
    files,
    loading,
    error,
    imageData,
    imageStack,
    exposureTimes,
    currentExposureIndex,
    threshold,
    backgroundMask,
    meanNoise,
    intensities,
    selectedPoint,
    inputCrop,
    outputCrop,
    results,
    selectedMembrane,
    selectedLane,
    selectedProtein,
    filename,
    
    // Actions
    setCurrentExposureIndex,
    setThreshold,
    setSelectedPoint,
    setSelectedMembrane,
    setSelectedLane,
    setSelectedProtein,
    setFilename,
    handleFileChange,
    handlePointSelection,
    saveResult,
    exportResults,
    setError
  };
};