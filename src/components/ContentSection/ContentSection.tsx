import React from 'react';
import './style.scss';
// imports
import ContentElementBlock from '../ContentElement';
// images
import anomalyDetectionImage from '../../images/medical_images/grad_cam_3d.png';
import clinicalAnalysisImage from '../../images/medical_images/grad_cam.png';
import syntheticDataImage from '../../images/medical_images/synthethic_data.jpg';
import spikingNetworksImage from '../../images/medical_images/attention_unet.png';

const ContentSectionBlock = () => (
  <div>
    <ContentElementBlock id='anomaly-detection-element' header='Anomaly Detection' section='Anomaly Detection section' src={anomalyDetectionImage} />
    <ContentElementBlock id='clinical-analysis-element' header='Clinical Analysis' section='Clinical Analysis section' src={clinicalAnalysisImage} />
    <ContentElementBlock id='synthetic-data-creation-element' header='Synthetic Data Creation' section='Synthetic Data Creation section' src={syntheticDataImage} />
    <ContentElementBlock id='spiking-neural-networks-element' header='Spiking Neural Networks' section='Spiking Neural Networks section' src={spikingNetworksImage} />
  </div>
);

export default ContentSectionBlock;
