import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { MEMBRANE_OPTIONS, LANE_OPTIONS, PROTEIN_OPTIONS } from '../constants';

const PanelContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  background-color: #f9f9f9;
`;

const SectionTitle = styled.h3`
  margin-bottom: 1rem;
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`;

const CanvasContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  background-color: white;
`;

const ResultControls = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectGroup = styled.div`
  margin-bottom: 1rem;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.25rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.25rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  gap: 0.5rem;
`;

const Button = styled.button`
  background-color: ${props => props.primary ? '#1976d2' : '#6c757d'};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
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

const ResultsTable = styled.div`
  margin-top: 1.5rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 0.5rem;
    border: 1px solid #ddd;
    text-align: left;
  }
  
  thead {
    background-color: #f2f2f2;
  }
  
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const ResultsPanel = ({
  inputCrop,
  outputCrop,
  selectedMembrane,
  selectedLane,
  selectedProtein,
  filename,
  results,
  onMembraneChange,
  onLaneChange,
  onProteinChange,
  onFilenameChange,
  onSaveResult,
  onExportResults
}) => {
  const inputCanvasRef = useRef(null);
  const outputCanvasRef = useRef(null);
  
  // Draw crops on canvases when they change
  useEffect(() => {
    const drawCrop = (canvas, cropData, invert = false) => {
      if (!canvas || !cropData) return;
      
      const ctx = canvas.getContext('2d');
      const width = cropData.length;
      const height = cropData[0].length;
      
      canvas.width = width;
      canvas.height = height;
      
      const imageData = ctx.createImageData(width, height);
      
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const value = invert 
            ? Math.floor((1 - cropData[y][x]) * 255)
            : Math.floor(cropData[y][x] * 255);
          
          const index = (y * width + x) * 4;
          imageData.data[index] = value;     // R
          imageData.data[index + 1] = value; // G
          imageData.data[index + 2] = value; // B
          imageData.data[index + 3] = 255;   // Alpha
        }
      }
      
      ctx.putImageData(imageData, 0, 0);
    };
    
    if (inputCanvasRef.current && inputCrop) {
      drawCrop(inputCanvasRef.current, inputCrop, true);
    }
    
    if (outputCanvasRef.current && outputCrop) {
      drawCrop(outputCanvasRef.current, outputCrop);
    }
  }, [inputCrop, outputCrop]);
  
  // Format result values for display
  const formatResult = (value) => {
    return value !== undefined ? value.toFixed(4) : '-';
  };
  
  // Calculate total for output crop
  const calculateTotal = () => {
    if (!outputCrop) return 0;
    
    let sum = 0;
    for (let y = 0; y < outputCrop.length; y++) {
      for (let x = 0; x < outputCrop[y].length; x++) {
        sum += outputCrop[y][x];
      }
    }
    return sum;
  };
  
  const total = calculateTotal();
  
  // Group results by membrane and protein
  const groupedResults = {};
  Object.entries(results).forEach(([key, value]) => {
    const [membrane, lane, protein] = key.split(',');
    
    if (!groupedResults[membrane]) {
      groupedResults[membrane] = {};
    }
    
    if (!groupedResults[membrane][protein]) {
      groupedResults[membrane][protein] = {};
    }
    
    groupedResults[membrane][protein][lane] = value;
  });
  
  return (
    <PanelContainer>
      <SectionTitle>Band Detection and Results</SectionTitle>
      
      <ResultsGrid>
        <div>
          <h4>Selected Region</h4>
          <CanvasContainer>
            <canvas ref={inputCanvasRef} style={{ width: '100%', height: 'auto' }} />
          </CanvasContainer>
          <h4>Detected Band</h4>
          <CanvasContainer>
            <canvas ref={outputCanvasRef} style={{ width: '100%', height: 'auto' }} />
          </CanvasContainer>
          <p>Total intensity: {formatResult(total)}</p>
        </div>
        
        <ResultControls>
          <h4>Save Results</h4>
          
          <SelectGroup>
            <label>Membrane:</label>
            <StyledSelect 
              value={selectedMembrane}
              onChange={(e) => onMembraneChange(e.target.value)}
            >
              {MEMBRANE_OPTIONS.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </StyledSelect>
          </SelectGroup>
          
          <SelectGroup>
            <label>Lane:</label>
            <StyledSelect 
              value={selectedLane}
              onChange={(e) => onLaneChange(e.target.value)}
            >
              {LANE_OPTIONS.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </StyledSelect>
          </SelectGroup>
          
          <SelectGroup>
            <label>Protein:</label>
            <StyledSelect 
              value={selectedProtein}
              onChange={(e) => onProteinChange(e.target.value)}
            >
              {PROTEIN_OPTIONS.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </StyledSelect>
          </SelectGroup>
          
          <ButtonGroup>
            <Button 
              primary
              onClick={onSaveResult}
              disabled={!outputCrop}
            >
              Save Current Result
            </Button>
          </ButtonGroup>
          
          <h4>Export Data</h4>
          <SelectGroup>
            <label>File Name:</label>
            <StyledInput 
              type="text"
              value={filename}
              onChange={(e) => onFilenameChange(e.target.value)}
            />
          </SelectGroup>
          
          <ButtonGroup>
            <Button 
              onClick={() => onExportResults('xlsx')}
              disabled={Object.keys(results).length === 0}
            >
              Export to Excel
            </Button>
            <Button 
              onClick={() => onExportResults('csv')}
              disabled={Object.keys(results).length === 0}
            >
              Export to CSV
            </Button>
          </ButtonGroup>
        </ResultControls>
      </ResultsGrid>
      
      {Object.keys(results).length > 0 && (
        <ResultsTable>
          <h4>Saved Results</h4>
          <Table>
            <thead>
              <tr>
                <th>Membrane</th>
                <th>Protein</th>
                {LANE_OPTIONS.map(lane => (
                  <th key={lane}>{lane}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(groupedResults).map(([membrane, proteins]) => (
                Object.entries(proteins).map(([protein, lanes]) => (
                  <tr key={`${membrane}-${protein}`}>
                    <td>{membrane}</td>
                    <td>{protein}</td>
                    {LANE_OPTIONS.map(lane => (
                      <td key={`${membrane}-${protein}-${lane}`}>
                        {formatResult(lanes[lane])}
                      </td>
                    ))}
                  </tr>
                ))
              ))}
            </tbody>
          </Table>
        </ResultsTable>
      )}
    </PanelContainer>
  );
};

export default ResultsPanel;