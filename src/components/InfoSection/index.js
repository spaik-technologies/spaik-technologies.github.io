import React from "react";
import { Canvas } from "@react-three/fiber";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Column2,
  Img3DWrap,
  ImgWrap,
  Img,
} from "./InfoElements";

import { OrbitControls } from "@react-three/drei";
import MRIBrain from "../mriBrainTumor3D";
import { useMediaQuery } from "react-responsive";

function chunkTypeSelector(is3D, isMobile, img, alt) {
  if (is3D) {
    return (
      <Img3DWrap>
        <Canvas style={{ touchAction: "none", pointerEvents: "none" }}>
          {/* <Canvas style={{touchAction: isMobile ? 'none' : 'auto', pointerEvents: isMobile ? 'none' : 'auto'}}> */}

          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls
            enableRotate={!isMobile}
            enablePan={false}
            enableZoom={false}
            autoRotate
            autoRotateSpeed={4}
            // style={{pointerEvents: 'auto'}}
          />
          <MRIBrain />
        </Canvas>
      </Img3DWrap>
    );
  } else {
    return (
      <ImgWrap>
        <Img src={img} alt={alt} />
      </ImgWrap>
    );
  }
}

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  darkText,
  img,
  alt,
  is3D = false,
}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>{chunkTypeSelector(is3D, isMobile, img, alt)}</Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
