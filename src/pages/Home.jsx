import React from 'react';
import './style.scss';
import { MainBlock } from '../components/Main/Main';
import { Header } from '../components/Header/Header';
import { Group } from '../components/Group/Group';
import { PageCard } from '../components/PageCard/PageCard';
import redBrain from '../images/red-brain.png';
import blueBrain from '../images/blue-brain.png';
import greenBrain from '../images/green-brain.png';
import { FutureBlock } from '../components/Future/Future';
import { Footer } from '../components/Footer/Footer';

export function Home() {
  return (
    <>
      <Header />
      <MainBlock />
      <Group oriented='horizontal' className='pages-list'>
        <PageCard backgroundColor='var(--color-red)' title='Anomaly detection' subtitle='Understanding \n the Brain' src={redBrain} linkLabel='' linkTo='/' />
        <PageCard backgroundColor='var(--color-blue)' title='Clinical analysis' subtitle='Interfacing \n with the Brain' src={blueBrain} linkLabel='' linkTo='/' />
        <PageCard backgroundColor='var(--color-green)' title='Spiking Neural Graph' subtitle='Engineering \n with the Brain' src={greenBrain} linkLabel='' linkTo='/' />
      </Group>
      <FutureBlock />
      <Footer />
    </>
  );
}

export default Home;
