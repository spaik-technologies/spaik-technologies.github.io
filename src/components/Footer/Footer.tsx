import React from 'react';
import './style.scss';
import Logo from '../Logo';
import PageNavigation from '../PageNavigation';
import Contacts from '../Contacts';
import Input from '../Input';
import Group from '../Group';
import iconLogo from '../../images/logo/icon.png';

const Footer = () => (
  <footer className='footer'>
    <Logo src={iconLogo} height='60px' width='60px' />
    <p className='copyright'>
      © SPAIK TECHNOLOGIES, S.L
      <br />
      ALL RIGHTS RESERVED
    </p>
    <PageNavigation />
    <Group className='contact' oriented='vertical'>
      <Contacts />
      <Input type='text' />
    </Group>
  </footer>
);

export default Footer;
