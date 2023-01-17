import React, { useEffect } from 'react';
// imports
// components
import './style.scss';
import MainBlock from '../../components/Main';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import IndexSection from '../../components/IndexSection';
import ContentSectionBlock from '../../components/ContentSection';

const Home = () => {
  useEffect(() => {
    const id: string = 'header_main';
    const access = document.getElementById(id);
    if (access) access.scrollIntoView();
  }, []);

  return (
    <>
      <Header />
      <MainBlock />
      <IndexSection />
      <ContentSectionBlock />
      <Footer />
    </>
  );
};

export default Home;
