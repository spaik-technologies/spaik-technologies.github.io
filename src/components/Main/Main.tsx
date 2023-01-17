import React from 'react';
import './style.scss';
// imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSpring } from 'react-spring';

import Title from '../Title';
import { ReactComponent as MainDetectionSVG } from '../../icons/main_detection.svg';
import { ReactComponent as MainAnalysisSVG } from '../../icons/main_analysis.svg';
import { ReactComponent as MainSpikingSVG } from '../../icons/main_spiking.svg';

const MainBlock = () => {
  const titleAnim = useSpring({
    opacity: 1,
    transform: 'translateX(0px)',
    from: { opacity: 0, transform: 'translateX(-40px)' },
  });

  return (
    <section className='main'>
      <Title titleStyle={titleAnim} type='h3' text='Predictive Intelligence for Healthcare' />
      <Title titleStyle={titleAnim} type='h2' text='We optimize efficiency and \n accuracy in medical imaging \n using deep learning techniques' />
      <Box sx={{ flexGrow: 1, padding: '8px' }}>
        <Grid container spacing={2}>
          <Grid item xs={4} md={4} lg={4}>
            <MainDetectionSVG className='main-content-icon' />
          </Grid>
          <Grid item xs={4} md={4} lg={4}>
            <MainAnalysisSVG className='main-content-icon' />
          </Grid>
          <Grid item xs={4} md={4} lg={4}>
            <MainSpikingSVG className='main-content-icon' />
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default MainBlock;
