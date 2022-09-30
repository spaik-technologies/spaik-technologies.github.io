import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

interface LogoProps {
  src: string;
  height?: string;
  width?: string;
}

const Logo = ({ src = '', height = '120px', width = '240px' }: LogoProps) => (
  <Link className='logo' to='/'>
    <div className='logo__png'>
      <img src={src} alt='React Logo' height={height} width={width} />
    </div>
  </Link>
);

export default Logo;
