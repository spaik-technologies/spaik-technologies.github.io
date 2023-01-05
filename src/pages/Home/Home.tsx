import React from 'react';
// imports
// components
import './style.scss';
import MainBlock from '../../components/Main';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import IndexSection from '../../components/IndexSection';
import ContentSectionBlock from '../../components/ContentSection';

const Home = () => {  

  return (
  <>
    <Header />
    <MainBlock />
    <IndexSection />
    <ContentSectionBlock />
    {/* <Group oriented='horizontal' className='pages-list'>
      <PageCard backgroundColor='#48939e' title='Anomaly Detection' src={anomalyDetectionLogo} linkLabel='' linkTo='/' />
      <PageCard backgroundColor='#74bfc8' title='Clinical Analysis' src={clinicalAnalysis} linkLabel='' linkTo='/' />
      <PageCard backgroundColor='#d290a4' title='Spiking Neural Networks' src={spaikingNeuralNetworksLogo} linkLabel='' linkTo='/' />
    </Group> */}   
    <Footer />
  </>
  );

};

export default Home;
