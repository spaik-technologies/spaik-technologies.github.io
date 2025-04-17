import React from 'react';
import styled from 'styled-components';
import FileUpload from './components/FileUpload';
import ImageViewer from './components/ImageViewer';
import AnalysisControls from './components/AnalysisControls';
import ResultsPanel from './components/ResultsPanel';
import { useWesternBlot } from './hooks/useWesternBlot';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #1976d2;
`;

const Description = styled.p`
  text-align: center;
  margin-bottom: 3rem;
  color: #666;
  font-size: 1.1rem;
`;

const ErrorMessage = styled.div`
  background-color: #ffebee;
  color: #c62828;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const LoadingIndicator = styled.div`
  text-align: center;
  padding: 2rem;
`;

const WesternBlotApp = () => {
  const {
    // State
    files,
    loading,
    error,
    imageStack,
    exposureTimes,
    currentExposureIndex,
    threshold,
    meanNoise,
    intensities,
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
    setSelectedMembrane,
    setSelectedLane,
    setSelectedProtein,
    setFilename,
    handleFileChange,
    handlePointSelection,
    saveResult,
    exportResults,
    setError
  } = useWesternBlot();
  
  return (
    <AppContainer>
      <Title>Western Blot Analysis Tool</Title>
      <Description>
        Upload multiple Western blot images with different exposure times to analyze band intensities
        using background correction and neural network-based band detection.
      </Description>
      
      {error && (
        <ErrorMessage>
          <strong>Error:</strong> {error}
          <button 
            style={{ float: 'right', background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setError(null)}
          >
            &times;
          </button>
        </ErrorMessage>
      )}
      
      <FileUpload 
        onFileChange={handleFileChange}
        loading={loading}
        files={files}
      />
      
      {loading && (
        <LoadingIndicator>
          Processing images... Please wait.
        </LoadingIndicator>
      )}
      
      {imageStack && !loading && (
        <>
          <ImageViewer 
            imageStack={imageStack}
            exposureTimes={exposureTimes}
            currentExposureIndex={currentExposureIndex}
            onExposureChange={setCurrentExposureIndex}
            onPointSelect={handlePointSelection}
          />
          
          <AnalysisControls 
            threshold={threshold}
            onThresholdChange={setThreshold}
            meanNoise={meanNoise}
            loading={loading}
          />
          
          <ResultsPanel 
            inputCrop={inputCrop}
            outputCrop={outputCrop}
            selectedMembrane={selectedMembrane}
            selectedLane={selectedLane}
            selectedProtein={selectedProtein}
            filename={filename}
            results={results}
            onMembraneChange={setSelectedMembrane}
            onLaneChange={setSelectedLane}
            onProteinChange={setSelectedProtein}
            onFilenameChange={setFilename}
            onSaveResult={saveResult}
            onExportResults={exportResults}
          />
        </>
      )}
    </AppContainer>
  );
};

export default WesternBlotApp;