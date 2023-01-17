import React from 'react';
import './style.scss';
// imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// SVG
import { ReactComponent as MainDetectionSVG } from '../../icons/main_detection.svg';
import { ReactComponent as MainAnalysisSVG } from '../../icons/main_analysis.svg';
import { ReactComponent as MainSpikingSVG } from '../../icons/main_spiking.svg';

const IndexSection = () => {
  const onClickIcon = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const id: string = `${e.currentTarget.value}`;
    const access = document.getElementById(id);
    if (access) access.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='index-page'>
      <Box sx={{ flexGrow: 1, padding: '8px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3} lg={3}>
            <div className='index-page-section'>
              <Button variant='text' value='anomaly-detection-element' onClick={onClickIcon}>
                <div className='index-page-section-elements'>
                  <div className='index-page-section-svg'>
                    <MainDetectionSVG className='index-page-icon-detection' />
                  </div>
                  <div className='index-page-section-title'>
                    <p>Anomaly Detection</p>
                  </div>
                </div>
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <div className='index-page-section'>
              <Button variant='text' value='clinical-analysis-element' onClick={onClickIcon}>
                <div className='index-page-section-elements'>
                  <div className='index-page-section-svg'>
                    <MainAnalysisSVG className='index-page-icon-analysis' />
                  </div>
                  <div className='index-page-section-title'>
                    <p>Clinical Analysis</p>
                  </div>
                </div>
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <div className='index-page-section'>
              <Button variant='text' value='synthetic-data-creation-element' onClick={onClickIcon}>
                <div className='index-page-section-elements'>
                  <div className='index-page-section-svg'>
                    <MainAnalysisSVG className='index-page-icon-analysis' />
                  </div>
                  <div className='index-page-section-title'>
                    <p>Synthetic Data Creation</p>
                  </div>
                </div>
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <div className='index-page-section'>
              <Button variant='text' value='spiking-neural-networks-element' onClick={onClickIcon}>
                <div className='index-page-section-elements'>
                  <div className='index-page-section-svg'>
                    <MainSpikingSVG className='index-page-icon-spiking' />
                  </div>
                  <div className='index-page-section-title'>
                    <p>Spiking Neural Networks</p>
                  </div>
                </div>
              </Button>
            </div>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default IndexSection;
