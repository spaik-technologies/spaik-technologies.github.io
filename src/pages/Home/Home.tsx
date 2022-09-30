import React from 'react';
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

const Home = () => (
  <>
    <Header />
    <MainBlock />
    <Group oriented='horizontal' className='pages-list'>
      <PageCard backgroundColor='#48939e' title='Anomaly Detection' src={anomalyDetectionLogo} linkLabel='' linkTo='/' />
      <PageCard backgroundColor='#74bfc8' title='Clinical Analysis' src={clinicalAnalysis} linkLabel='' linkTo='/' />
      <PageCard backgroundColor='#d290a4' title='Spiking Neural Networks' src={spaikingNeuralNetworksLogo} linkLabel='' linkTo='/' />
    </Group>
    <FutureBlock />
    <Footer />
  </>
);

export default Home;
