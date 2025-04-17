import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 120px 24px 60px;
  background: #f9f9f9;
`;

const PageWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const PageHeading = styled.h1`
  font-size: 48px;
  margin-bottom: 24px;
  color: #010606;
`;

const PageContent = styled.div`
  background: white;
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

const BackButton = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  background: #1976d2;
  color: white;
  padding: 10px 22px;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #74bfc8;
  }
`;

const FeatureSection = styled.div`
  margin: 24px 0;
`;

const FeatureTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 16px;
  color: #1976d2;
`;

const FeatureList = styled.ul`
  list-style-type: disc;
  margin-left: 24px;
  margin-bottom: 16px;
`;

const FeatureItem = styled.li`
  margin-bottom: 8px;
`;

const WesternBlotApp = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <PageContainer>
        <PageWrapper>
          <PageHeading>Western-Blot App</PageHeading>
          <PageContent>
            <p>
              The Western-Blot App is an advanced analysis tool designed to assist researchers and laboratory professionals
              in analyzing Western blot images with precision and efficiency.
            </p>
            
            <FeatureSection>
              <FeatureTitle>Key Features</FeatureTitle>
              <FeatureList>
                <FeatureItem>Automated band detection using AI</FeatureItem>
                <FeatureItem>Accurate quantification of protein expression levels</FeatureItem>
                <FeatureItem>Multiple normalization methods for reliable comparisons</FeatureItem>
                <FeatureItem>Intuitive interface for image manipulation and analysis</FeatureItem>
                <FeatureItem>Batch processing capabilities for high-throughput analysis</FeatureItem>
                <FeatureItem>Exportable results in multiple formats (CSV, Excel, PDF)</FeatureItem>
              </FeatureList>
            </FeatureSection>
            
            <FeatureSection>
              <FeatureTitle>How It Works</FeatureTitle>
              <p>
                Our Western-Blot App uses state-of-the-art computer vision algorithms to detect bands in your 
                Western blot images. The application then quantifies the intensity of each band, allowing for 
                precise measurement of protein expression levels across different samples.
              </p>
              <p>
                Advanced normalization techniques are applied to ensure that comparisons between different 
                blots or experiments are reliable and reproducible.
              </p>
            </FeatureSection>
            
            <FeatureSection>
              <FeatureTitle>Benefits</FeatureTitle>
              <FeatureList>
                <FeatureItem>Save hours of manual analysis time</FeatureItem>
                <FeatureItem>Eliminate subjective interpretation of results</FeatureItem>
                <FeatureItem>Improve reproducibility of your experiments</FeatureItem>
                <FeatureItem>Enhance the quality of your research publications</FeatureItem>
                <FeatureItem>Streamline your experimental workflow</FeatureItem>
              </FeatureList>
            </FeatureSection>
          </PageContent>
          <BackButton to="/">Back to Home</BackButton>
        </PageWrapper>
      </PageContainer>
      <Footer />
    </>
  );
};

export default WesternBlotApp;