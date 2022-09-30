import React from 'react';
import './style.scss';
import { Logo } from '../Logo/Logo';
import { PageNavigation } from '../PageNavigation/PageNavigation';
import logo from '../../images/logo/logo.png';

export function Header() {
  return (
    <header className='header'>
      <Logo src={logo} width='452px' />
      <PageNavigation />
    </header>
  );
}
