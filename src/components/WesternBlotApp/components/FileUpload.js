import React, { useRef } from 'react';
import styled from 'styled-components';
import { IMAGE_FORMATS } from '../constants';

const UploadContainer = styled.div`
  border: 2px dashed #ddd;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  background-color: #f9f9f9;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #1976d2;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const UploadButton = styled.button`
  background-color: #1976d2;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #1565c0;
  }
  
  &:disabled {
    background-color: #bbdefb;
    cursor: not-allowed;
  }
`;

const FileList = styled.ul`
  list-style: none;
  margin-top: 1rem;
  padding: 0;
`;

const FileItem = styled.li`
  padding: 0.5rem;
  margin: 0.25rem 0;
  background: #e3f2fd;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #f44336;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
  
  &:hover {
    color: #d32f2f;
  }
`;

const Instructions = styled.p`
  margin: 1rem 0;
  color: #666;
`;

const FileUpload = ({ onFileChange, loading, files = [] }) => {
  const fileInputRef = useRef(null);
  
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      onFileChange(e.target.files);
    }
  };
  
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFileChange(e.dataTransfer.files);
    }
  };
  
  const removeFile = (index) => {
    // Create a new DataTransfer object
    const dt = new DataTransfer();
    
    // Add all files except the one to remove
    Array.from(files).forEach((file, i) => {
      if (i !== index) {
        dt.items.add(file);
      }
    });
    
    // Update the file input and trigger change
    if (fileInputRef.current) {
      fileInputRef.current.files = dt.files;
      const event = new Event('change', { bubbles: true });
      fileInputRef.current.dispatchEvent(event);
    }
    
    onFileChange(dt.files);
  };
  
  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' bytes';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };
  
  return (
    <UploadContainer 
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h3>Upload TIFF Images</h3>
      <Instructions>
        Select multiple TIFF files with different exposure times.
        <br />
        Supported formats: {IMAGE_FORMATS.join(', ')}
      </Instructions>
      
      <FileInput 
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".tif,.tiff,.TIF,.TIFF"
        multiple
      />
      
      <UploadButton 
        onClick={handleButtonClick}
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Select Files'}
      </UploadButton>
      
      {files.length > 0 && (
        <>
          <h4>Selected Files: {files.length}</h4>
          <FileList>
            {Array.from(files).map((file, index) => (
              <FileItem key={index}>
                <span>{file.name} ({formatFileSize(file.size)})</span>
                <RemoveButton 
                  onClick={() => removeFile(index)}
                  disabled={loading}
                >
                  ✕
                </RemoveButton>
              </FileItem>
            ))}
          </FileList>
        </>
      )}
    </UploadContainer>
  );
};

export default FileUpload;