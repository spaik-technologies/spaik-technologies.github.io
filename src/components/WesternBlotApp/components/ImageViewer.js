import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const ViewerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const CanvasContainer = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
`;

const StyledCanvas = styled.canvas`
  width: 100%;
  height: auto;
  cursor: crosshair;
`;

const ExposureSlider = styled.input`
  width: 100%;
  margin-top: 1rem;
`;

const ExposureControl = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`;

const ExposureLabel = styled.span`
  margin: 0 1rem;
  min-width: 150px;
`;

/**
 * Component for displaying Western Blot images with exposure time slider
 */
const ImageViewer = ({ 
  imageStack,
  exposureTimes,
  currentExposureIndex,
  onExposureChange,
  onPointSelect
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  
  // Draw image on canvas when exposure changes
  useEffect(() => {
    const drawCanvas = () => {
      if (!imageStack || !canvasRef.current || imageStack.length === 0 || currentExposureIndex >= imageStack.length) {
        return;
      }
      
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      const currentImage = imageStack[currentExposureIndex];
      if (!currentImage || !currentImage.data) {
        console.error('No image data available for current exposure index');
        return;
      }
      
      const imgWidth = currentImage.width || Math.sqrt(currentImage.data.length);
      const imgHeight = currentImage.height || currentImage.data.length / imgWidth;
      
      // Set canvas dimensions
      canvas.width = imgWidth;
      canvas.height = imgHeight;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create ImageData object
      const imageData = ctx.createImageData(imgWidth, imgHeight);
      const data = imageData.data;
      
      // Debug image data
      console.log(`Drawing image: ${currentExposureIndex}, dimensions: ${imgWidth}x${imgHeight}`);
      
      // Get min/max values for better contrast
      let minVal = 1;
      let maxVal = 0;
      for (let i = 0; i < currentImage.data.length; i++) {
        minVal = Math.min(minVal, currentImage.data[i]);
        maxVal = Math.max(maxVal, currentImage.data[i]);
      }
      console.log(`Image value range: min=${minVal}, max=${maxVal}`);
      
      // If all values are the same (or very close), adjust for visibility
      const range = maxVal - minVal;
      if (range < 0.001) {
        console.warn('Image has no contrast, values are all similar');
        minVal = 0;
        maxVal = minVal + 1;
      }
      
      // Output sample values
      console.log(`Sample pixel values: ${currentImage.data[0]}, ${currentImage.data[1000]}, ${currentImage.data[10000]}`);
      
      // Fill pixel data - Convert grayscale values to RGBA with appropriate contrast
      for (let y = 0; y < imgHeight; y++) {
        for (let x = 0; x < imgWidth; x++) {
          const idx = y * imgWidth + x;
          let pixelValue = currentImage.data[idx];
          
          // Normalize to full range for better contrast if needed
          if (range < 1.0) {
            pixelValue = (pixelValue - minVal) / (maxVal - minVal);
          }
          
          // Western Blot images usually have dark bands on light background
          // We invert the value because we want dark bands to appear dark
          const colorValue = Math.max(0, Math.min(255, Math.floor((1 - pixelValue) * 255)));
          
          // RGBA values (grayscale)
          const offset = idx * 4;
          data[offset] = colorValue;     // R
          data[offset + 1] = colorValue; // G
          data[offset + 2] = colorValue; // B
          data[offset + 3] = 255;        // Alpha (fully opaque)
        }
      }
      
      // Put image data on canvas
      ctx.putImageData(imageData, 0, 0);
    };
    
    drawCanvas();
  }, [imageStack, currentExposureIndex]);
  
  // Adjust canvas size when container resizes
  useEffect(() => {
    const updateCanvasSize = () => {
      if (containerRef.current) {
        const { clientWidth } = containerRef.current;
        setCanvasSize({
          width: clientWidth,
          height: clientWidth * 0.75 // 4:3 aspect ratio
        });
      }
    };
    
    updateCanvasSize();
    
    const resizeObserver = new ResizeObserver(updateCanvasSize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    
    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  
  const handleCanvasClick = (e) => {
    if (!canvasRef.current || !imageStack || imageStack.length === 0) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    
    // Calculate click position relative to the image
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    const x = Math.floor((e.clientX - rect.left) * scaleX);
    const y = Math.floor((e.clientY - rect.top) * scaleY);
    
    // Call the handler with the selected point
    if (onPointSelect) {
      onPointSelect(x, y);
    }
  };
  
  return (
    <ViewerContainer>
      <h3>Image Viewer</h3>
      
      <CanvasContainer ref={containerRef}>
        <StyledCanvas 
          ref={canvasRef}
          width={canvasSize.width}
          height={canvasSize.height}
          onClick={handleCanvasClick}
        />
      </CanvasContainer>
      
      {exposureTimes && exposureTimes.length > 0 && (
        <div>
          <ExposureControl>
            <ExposureLabel>
              Exposure Time: {exposureTimes[currentExposureIndex]} seconds
            </ExposureLabel>
            <ExposureSlider
              type="range"
              min={0}
              max={exposureTimes.length - 1}
              value={currentExposureIndex}
              onChange={(e) => onExposureChange(parseInt(e.target.value))}
            />
          </ExposureControl>
        </div>
      )}
      
      <p>Click on the image to select a region for analysis</p>
    </ViewerContainer>
  );
};

export default ImageViewer;