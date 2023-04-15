import React from "react";
import Image from "../../images/main-background.jpg";
import { ButtonS } from "../ButtonElement";

import {
  HeroContainer,
  HeroBg,
  HeroContent,
  ImageBg,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = React.useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg src={Image} />
      </HeroBg>
      <HeroContent>
        <HeroH1>Predictive Intelligence for Healthcare</HeroH1>
        <HeroP>
          We optimize efficiency and accuracy in medical imaging using deep
          learning techniques.
        </HeroP>
        <HeroBtnWrapper>
          <ButtonS
            to="anomaly-detection"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonS>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
