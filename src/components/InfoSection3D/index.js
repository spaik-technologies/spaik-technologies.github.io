import React from 'react'
import { Canvas } from '@react-three/fiber'

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
    Img3DWrap
} from './InfoElements3D'
import { OrbitControls } from '@react-three/drei'
import MRIBrain from '../Mri_brain_tumor'
import { useMediaQuery } from 'react-responsive';




const InfoSection3D = ({ lightBg, id, imgStart, topLine, lightText, headline, description, buttonLabel, img, alt, primary, dark, darkText }) => {

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
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
                        <Column2>
                            <Img3DWrap>
                                <Canvas style={{touchAction: 'none', pointerEvents: 'none'}}>
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
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>

        </>
    )
}

export default InfoSection3D