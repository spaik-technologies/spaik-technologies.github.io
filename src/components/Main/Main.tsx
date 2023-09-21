import './style.scss';

import { useSpring } from 'react-spring';


import Title from '../Title';

import styled from 'styled-components';
import IndexSection from '../../components/IndexSection';
import Header from '../../components/Header';


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`



const MainBlock = () => {
  const titleAnim = useSpring({
    opacity: 1,
    transform: 'translateX(0px)',
    from: { opacity: 0, transform: 'translateX(-40px)' },
  });

  return (
    <Section className='main'>
      <Header />
      <Title titleStyle={titleAnim} type='h3' text='Predictive Intelligence for Healthcare' />
      <Title titleStyle={titleAnim} type='h2' text='We optimize efficiency and accuracy in medical imaging using deep learning techniques' />
      <IndexSection />
    </Section>
  );
};

export default MainBlock;
