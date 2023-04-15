import React from "react";
import { FooterContainer, FooterWrap, FooterLinkTitle } from "./FooterElements";

const Footer = ({ id }) => {
  return (
    <FooterContainer id={id}>
      <FooterWrap>
        <FooterLinkTitle>Contact us</FooterLinkTitle>
        <b>spaik.technologies@gmail.com</b>
        <p>&nbsp;</p>
        <p>© Spaik Technologies S.L.</p>
        <p>All Rights Reserved</p>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
