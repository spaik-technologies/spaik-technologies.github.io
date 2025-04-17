import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { IMAGE_FORMATS } from '../constants';
// Import UTIF for TIFF handling
import * as UTIF from 'utif';

/**
 * Load TIFF images asynchronously from File objects
 * @param {Array<File>} files - Array of File objects to process
 * @returns {Promise<Array>} - Array of processed image data objects
 */
export const loadTiffImages = async (files) => {
  if (!files || files.length === 0) {
    return [];
  }

  // Filter for supported image formats
  const imageFiles = Array.from(files).filter(file => {
    const extension = file.name.split('.').pop().toLowerCase();
    return IMAGE_FORMATS.map(format => format.toLowerCase()).includes(extension);
  });

  if (imageFiles.length === 0) {
    throw new Error('No supported image files found. Please upload TIF/TIFF files.');
  }

  try {
    // Process each file using UTIF.js
    const results = await Promise.all(imageFiles.map(async file => {
      console.log(`Processing file: ${file.name}`);
      
      // Read the file as ArrayBuffer
      const arrayBuffer = await file.arrayBuffer();
      
      // Decode TIFF using UTIF
      const ifds = UTIF.decode(arrayBuffer);
      if (!ifds || ifds.length === 0) {
        throw new Error(`Failed to decode TIFF file: ${file.name}`);
      }
      
      console.log(`File decoded: ${file.name}, IFDs found: ${ifds.length}`);
      
      const firstPage = ifds[0]; // Get the first page/image
      console.log(`First page metadata:`, {
        width: firstPage.width,
        height: firstPage.height,
        bps: firstPage.bps,
        t256: firstPage.t256, // Width tag
        t257: firstPage.t257, // Height tag
        t258: firstPage.t258  // BitsPerSample tag
      });
      
      try {
        // Decode the image data
        UTIF.decodeImage(arrayBuffer, firstPage);
      } catch (decodeErr) {
        console.error(`Error decoding image data for ${file.name}:`, decodeErr);
        throw new Error(`Failed to decode image data in ${file.name}: ${decodeErr.message}`);
      }
      
      if (!firstPage.data) {
        throw new Error(`No image data found in TIFF file: ${file.name}`);
      }
      
      // Get image dimensions
      const width = firstPage.width;
      const height = firstPage.height;
      
      if (!width || !height || width <= 0 || height <= 0) {
        throw new Error(`Invalid image dimensions in ${file.name}: ${width}x${height}`);
      }
      
      // Create a typed array to hold the normalized image data
      const data = new Float32Array(width * height);
      
      // Get the bits per sample - try different tags
      let bps = firstPage.bps;
      if (!bps && firstPage.t258) {
        bps = Array.isArray(firstPage.t258) ? firstPage.t258[0] : firstPage.t258;
      }
      
      // Default to 8-bit if not specified, most common for TIFF
      bps = bps || 8;
      
      console.log(`Processing ${file.name} with ${bps} bits per sample`);
      
      const maxVal = Math.pow(2, bps) - 1;
      
      // Copy and normalize the data to [0,1] range
      for (let i = 0; i < width * height && i < firstPage.data.length; i++) {
        data[i] = firstPage.data[i] / maxVal;
      }
      
      console.log(`Successfully processed ${file.name}, data length: ${data.length}`);
      
      return {
        fileName: file.name,
        data,
        width,
        height,
        file
      };
    }));
    
    return results;
  } catch (error) {
    console.error('Error processing TIFF files:', error);
    throw new Error('Failed to process TIFF files: ' + error.message);
  }
};

// Export functions remain unchanged
export const exportToExcel = (resultsData, filename = 'western_blot_results.xlsx') => {
  if (!resultsData || Object.keys(resultsData).length === 0) {
    throw new Error('No data to export');
  }
  
  // Convert results to array format for worksheet
  const dataArray = Object.entries(resultsData).map(([key, value]) => {
    const [membrane, lane, protein] = key.split(',');
    return { Membrane: membrane, Lane: lane, Protein: protein, Value: value };
  });
  
  // Create worksheet
  const ws = XLSX.utils.json_to_sheet(dataArray);
  
  // Create workbook and add worksheet
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Results');
  
  // Generate Excel file
  const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  
  // Save file
  const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
  saveAs(blob, filename);
};

export const exportToCSV = (resultsData, filename = 'western_blot_results.csv') => {
  if (!resultsData || Object.keys(resultsData).length === 0) {
    throw new Error('No data to export');
  }
  
  // Convert results to array format for worksheet
  const dataArray = Object.entries(resultsData).map(([key, value]) => {
    const [membrane, lane, protein] = key.split(',');
    return { Membrane: membrane, Lane: lane, Protein: protein, Value: value };
  });
  
  // Create worksheet with CSV format
  const ws = XLSX.utils.json_to_sheet(dataArray);
  
  // Generate CSV content
  const csvContent = XLSX.utils.sheet_to_csv(ws);
  
  // Save file
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  saveAs(blob, filename);
};