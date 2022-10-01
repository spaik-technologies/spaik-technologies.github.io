import React from 'react';
import './style.scss';
import { animated } from 'react-spring';

interface TitleProps {
  type: 'h1' | 'h2'| 'h3'| 'h4'| 'h5'| 'h6';
  text: string;
  titleStyle?: any;
}

const Title = ({ type, text, titleStyle = null }: TitleProps) => (
  React.createElement(animated[type], { className: 'title', ...titleStyle }, text)
);

export default Title;
