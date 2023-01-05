import React from 'react';
import './style.scss';
// imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// SVG
import { ReactComponent as MainDetectionSVG } from '../../icons/main_detection.svg';
import { ReactComponent as MainAnalysisSVG } from '../../icons/main_analysis.svg';
import { ReactComponent as MainSpikingSVG } from '../../icons/main_spiking.svg';

const IndexSection = () => {

  return (
    <section className='index-page'>
      <Box sx={{ flexGrow: 1, padding: '8px' }} >
        <Grid container spacing={2}>
          <Grid item xs={12} md={3} lg={3}>
            <div className='index-page-section'>
                <MainDetectionSVG className='index-page-icon-detection' />
                <p>Anomaly Detection</p>
            </div>           
          </Grid>
          <Grid item xs={12} md={3} lg={3}>            
            <div className='index-page-section'>
                <MainAnalysisSVG className='index-page-icon-analysis' />
                <p>Clinical Analysis</p>
            </div>  
          </Grid>
          <Grid item xs={12} md={3} lg={3}>            
            <div className='index-page-section'>
                <MainAnalysisSVG className='index-page-icon-analysis' />
                <p>Synthetic Data Creation</p>
            </div> 
          </Grid>
          <Grid item xs={12} md={3} lg={3}>            
            <div className='index-page-section'>
                <MainSpikingSVG className='index-page-icon-spiking' />
                <p>Spiking Neural Networks</p>
            </div> 
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default IndexSection;
