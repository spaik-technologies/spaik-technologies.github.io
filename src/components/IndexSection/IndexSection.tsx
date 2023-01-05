import React from 'react';
import './style.scss';
// imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button, { ButtonProps } from '@mui/material/Button';
// SVG
import { ReactComponent as MainDetectionSVG } from '../../icons/main_detection.svg';
import { ReactComponent as MainAnalysisSVG } from '../../icons/main_analysis.svg';
import { ReactComponent as MainSpikingSVG } from '../../icons/main_spiking.svg';

import { styled } from '@mui/material/styles';

const TextButton = styled(Button)<ButtonProps>(({ theme }) => ({
  textTransform: 'none',
  color: 'black',
  fontWeight: 'bold',
}));

const IndexSection = () => {

  const onClickIcon = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e.currentTarget.value);
    const id: string = `${e.currentTarget.value}`;
    var access = document.getElementById(id);
    if (access) access.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <section className='index-page'>
      <Box sx={{ flexGrow: 1, padding: '8px' }} >
        <Grid container spacing={2}>
          <Grid item xs={12} md={3} lg={3}>
            <div className='index-page-section'>
                <Button variant="text" value="anomaly-detection-element" onClick={onClickIcon}> 
                  <MainDetectionSVG className='index-page-icon-detection' />
                </Button >
                <TextButton variant="text" value="anomaly-detection-element" onClick={onClickIcon}> 
                  <p>Anomaly Detection</p>
                </TextButton >
            </div>           
          </Grid>
          <Grid item xs={12} md={3} lg={3}>            
            <div className='index-page-section'>
              <Button variant="text" value="clinical-analysis-element" onClick={onClickIcon}>
                <MainAnalysisSVG className='index-page-icon-analysis' />
              </Button >
              <TextButton variant="text" value="clinical-analysis-element" onClick={onClickIcon}> 
                <p>Clinical Analysis</p>
              </TextButton >
            </div>  
          </Grid>
          <Grid item xs={12} md={3} lg={3}>            
            <div className='index-page-section'>
              <Button variant="text" value="synthetic-data-creation-element" onClick={onClickIcon}>
                <MainAnalysisSVG className='index-page-icon-analysis' />
              </Button >
              <TextButton variant="text" value="synthetic-data-creation-element" onClick={onClickIcon}> 
                <p>Synthetic Data Creation</p>
              </TextButton >
            </div> 
          </Grid>
          <Grid item xs={12} md={3} lg={3}>            
            <div className='index-page-section'>
              <Button variant="text" value="spiking-neural-networks-element" onClick={onClickIcon}>
                <MainSpikingSVG className='index-page-icon-spiking' />
              </Button >
              <TextButton variant="text" value="spiking-neural-networks-element" onClick={onClickIcon}> 
                <p>Spiking Neural Networks</p>
              </TextButton >
            </div> 
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default IndexSection;
