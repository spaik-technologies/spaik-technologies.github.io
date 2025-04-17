import React from 'react';
import styled from 'styled-components';
import { BACKGROUND_THRESHOLD } from '../constants';

const ControlsContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  background-color: #f9f9f9;
`;

const ControlGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

const StyledSlider = styled.input`
  flex: 1;
`;

const SliderValue = styled.span`
  margin-left: 1rem;
  min-width: 60px;
  font-weight: 500;
`;

const Button = styled.button`
  background-color: ${props => props.primary ? '#1976d2' : '#6c757d'};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${props => props.primary ? '#1565c0' : '#5a6268'};
  }
  
  &:disabled {
    background-color: #bdbdbd;
    cursor: not-allowed;
  }
`;

const AnalysisControls = ({
  threshold,
  onThresholdChange,
  meanNoise,
  loading,
}) => {
  return (
    <ControlsContainer>
      <h3>Analysis Controls</h3>
      
      <ControlGroup>
        <h4>Background Correction</h4>
        <p>Adjust the threshold to separate background from signal</p>
        
        <SliderContainer>
          <StyledSlider 
            type="range"
            min={0.001}
            max={0.05}
            step={0.001}
            value={threshold}
            onChange={(e) => onThresholdChange(parseFloat(e.target.value))}
          />
          <SliderValue>{threshold.toFixed(3)}</SliderValue>
        </SliderContainer>
        
        <div>
          <Button 
            onClick={() => onThresholdChange(BACKGROUND_THRESHOLD)}
            disabled={loading}
          >
            Reset to Default
          </Button>
        </div>
      </ControlGroup>
      
      {meanNoise && (
        <ControlGroup>
          <h4>Mean Noise Values</h4>
          <div>
            {meanNoise.map((value, index) => (
              <div key={index}>
                Exposure {index}: {value.toFixed(4)}
              </div>
            ))}
          </div>
        </ControlGroup>
      )}
    </ControlsContainer>
  );
};

export default AnalysisControls;