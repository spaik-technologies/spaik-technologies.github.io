import React, { useEffect } from 'react';
// imports
// components
import './style.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import IndexSection from '../../components/IndexSection';
import MainBlock from '../../components/Main';
import ContentSectionBlock from '../../components/ContentSection';
import styled from 'styled-components';



const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
`;

const Home = () => {
  useEffect(() => {
    const id: string = 'header_main';
    const access = document.getElementById(id);
    if (access) access.scrollIntoView();
  }, []);

  return (
    <Container>
      {/* <Header /> */}
      <MainBlock />
      <ContentSectionBlock />
      <Footer />
    </Container>
  );
};

export default Home;
