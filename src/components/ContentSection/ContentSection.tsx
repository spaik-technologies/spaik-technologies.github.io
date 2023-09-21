import './style.scss';
// imports
import ContentElementBlock from '../ContentElement';
// images
import anomalyDetectionImage from '../../images/medical_images/grad_cam_3d.png';
import clinicalAnalysisImage from '../../images/medical_images/grad_cam.png';
import syntheticDataImage from '../../images/medical_images/synthethic_data.jpg';
import spikingNetworksImage from '../../images/medical_images/attention_unet.png';
import styled from 'styled-components';


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  
`



const ContentSectionBlock = () => (
  <div>
    <Section>
      <ContentElementBlock id='anomaly-detection-element' header='Anomaly Detection' section='Anomaly Detection section' src={anomalyDetectionImage} />
    </Section>
    <Section>
      <ContentElementBlock id='clinical-analysis-element' header='Clinical Analysis' section='Clinical Analysis section' src={clinicalAnalysisImage} />
    </Section>
    <Section>
      <ContentElementBlock id='synthetic-data-creation-element' header='Synthetic Data Creation' section='Synthetic Data Creation section' src={syntheticDataImage} />
    </Section>
    <Section>
      <ContentElementBlock id='spiking-neural-networks-element' header='Spiking Neural Networks' section='Spiking Neural Networks section' src={spikingNetworksImage} />
    </Section>
  </div>
);

export default ContentSectionBlock;
