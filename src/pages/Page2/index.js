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

const Page2 = () => {
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
          <PageHeading>Page 2</PageHeading>
          <PageContent>
            <p>
              This is Page 2 content. You can add any information or components here.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
              quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt 
              explicabo.
            </p>
          </PageContent>
          <BackButton to="/">Back to Home</BackButton>
        </PageWrapper>
      </PageContainer>
      <Footer />
    </>
  );
};

export default Page2;