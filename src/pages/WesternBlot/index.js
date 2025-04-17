import React from 'react';
import WesternBlotApp from '../../components/WesternBlotApp';
import { Helmet } from 'react-helmet';

const WesternBlotPage = () => {
  return (
    <>
      <Helmet>
        <title>Western Blot Analysis - SPAIK Technologies</title>
        <meta name="description" content="Advanced Western Blot analysis tool for quantifying band intensities using background correction and AI-based band detection." />
      </Helmet>
      <WesternBlotApp />
    </>
  );
};

export default WesternBlotPage;