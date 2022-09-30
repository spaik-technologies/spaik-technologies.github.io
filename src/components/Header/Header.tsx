import React from 'react';
import './style.scss';
import Logo from '../Logo';
import PageNavigation from '../PageNavigation';
import logo from '../../images/logo/logo.png';

const Header = () => (
  <header className='header'>
    <Logo src={logo} width='452px' />
    <PageNavigation />
  </header>
);

export default Header;
