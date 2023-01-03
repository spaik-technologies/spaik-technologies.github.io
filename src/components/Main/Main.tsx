import React from 'react';
import './style.scss';
// imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSpring } from 'react-spring';

import Title from '../Title';
import { ReactComponent as MainTubeSVG } from '../../icons/main_tube.svg';
import { ReactComponent as MainAnalysisSVG } from '../../icons/main_analysis.svg';
import { ReactComponent as MainWheelSVG } from '../../icons/main_wheel.svg';
const MainBlock = () => {
  const titleAnim = useSpring({
    opacity: 1,
    transform: 'translateX(0px)',
    from: { opacity: 0, transform: 'translateX(-40px)' },
  });

  return (
    <section className='main'>
      <Title titleStyle={titleAnim} type='h3' text={'Predictive Intelligence for Healthcare'} />
      <Title titleStyle={titleAnim} type='h2' text={'We optimize efficiency and \n accuracy in medical imaging \n using deep learning techniques'} />
      <Box sx={{ flexGrow: 1, padding: '8px' }} >
        <Grid container spacing={2}>
          <Grid item xs={1} md={1} lg={1}>
            <MainAnalysisSVG />
          </Grid>
          <Grid item xs={1} md={1} lg={1}>
            <MainTubeSVG />
          </Grid>
          <Grid item xs={1} md={1} lg={1}>
            <MainWheelSVG />
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default MainBlock;
