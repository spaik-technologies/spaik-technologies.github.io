import React from 'react';
// components
import './style.scss';
import MainBlock from '../../components/Main';
import Header from '../../components/Header';
import Group from '../../components/Group';
import PageCard from '../../components/PageCard';
import anomalyDetectionLogo from '../../images/main/1.png';
import clinicalAnalysis from '../../images/main/2.png';
import spaikingNeuralNetworksLogo from '../../images/main/3.png';
import FutureBlock from '../../components/Future';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import { useSpring } from 'react-spring';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { ReactComponent as MainTubeSVG } from '../../icons/main_tube.svg';
import { ReactComponent as MainAnalysisSVG } from '../../icons/main_analysis.svg';
import { ReactComponent as MainWheelSVG } from '../../icons/main_wheel.svg';

const Home = () => {
  const titleAnim = useSpring({
    opacity: 1,
    transform: 'translateX(0px)',
    from: { opacity: 0, transform: 'translateX(-40px)' },
  });
  const ColorDetectionButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: 'white',
    backgroundColor: '#48939E',
    textTransform: 'none',
  }));
  const ColorAnalysisButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: 'white',
    backgroundColor: '#74BFC8',
    textTransform: 'none',
  }));
  const ColorSpikingButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: 'white',
    backgroundColor: '#D290A4',
    textTransform: 'none',
  }));
  
  return (
  <>
    <Header />
    <MainBlock />
    {/* <Group oriented='horizontal' className='pages-list'>
      <PageCard backgroundColor='#48939e' title='Anomaly Detection' src={anomalyDetectionLogo} linkLabel='' linkTo='/' />
      <PageCard backgroundColor='#74bfc8' title='Clinical Analysis' src={clinicalAnalysis} linkLabel='' linkTo='/' />
      <PageCard backgroundColor='#d290a4' title='Spiking Neural Networks' src={spaikingNeuralNetworksLogo} linkLabel='' linkTo='/' />
    </Group> */}
    <div className='spaik-info'>
      <div className='info-we-are'>
        <div className='info-header'>
          Who are we?
        </div>
        <div className='info-content'>
          <p>Section Content</p>
        </div>
      </div>
      
      <div className='info-we-do'>
        <div className='info-header'>
          What do we do?
        </div>
        <div className='info-we-do-content'>
          <Box sx={{ flexGrow: 1, padding: '8px' }} >
            <Grid container spacing={2}>
              <Grid item xs={4} md={4} lg={4}>
                <div>
                  <div>
                    <MainAnalysisSVG />
                  </div>
                  <div>
                    Anomaly Detection
                  </div>
                </div>

                <div>
                  <div>
                  Anomaly Detection Section
                  </div>
                  <div>
                    <ColorDetectionButton  variant="contained"> Learn More </ColorDetectionButton >
                  </div>
                </div>
              </Grid>
              <Grid item xs={4} md={4} lg={4}>
                <div>
                  <div>
                    <MainTubeSVG />
                  </div>
                  <div>
                    Clinical Analysis
                  </div>
                </div>

                <div>
                  <div>
                  Clinical Analysis Section
                  </div>
                  <div>
                    <ColorAnalysisButton  variant="contained"> Learn More </ColorAnalysisButton >
                  </div>
                </div>
              </Grid>
              <Grid item xs={4} md={4} lg={4}>
                <div>
                  <div>
                    <MainWheelSVG />
                  </div>
                  <div>
                    Spiking Neural Network
                  </div>
                </div>

                <div>
                  <div>
                  Spiking Neural Network Section
                  </div>
                  <div>
                    <ColorSpikingButton  variant="contained"> Learn More </ColorSpikingButton >
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>

      <div className='info-why'>
        <div className='info-header'>
          Why Spaik?
        </div>
        <div className='info-why-content'>
          <div>
          We have the key elements to fill a huge gap in the healthcare sector
          </div>
          <div>

          </div>
        </div>
      </div>

      <div className='info-how'>
        <div className='info-header'>
          How does it work?
        </div>
      </div>
      
    </div>
    
    <Footer />
  </>
  );

};

export default Home;
