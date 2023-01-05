import React from 'react';
// imports
// components
import './style.scss';
import MainBlock from '../../components/Main';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import IndexSection from '../../components/IndexSection';
import ContentSectionBlock from '../../components/ContentSection';

const Home = () => (
  <>
    <Header />
    <MainBlock />
    <IndexSection />
    <ContentSectionBlock />
    <Footer />
  </>
);

export default Home;
