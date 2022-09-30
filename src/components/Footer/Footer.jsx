import React from 'react';
import './style.scss';
import { Logo } from '../Logo/Logo';
import { PageNavigation } from '../PageNavigation/PageNavigation';
import { Contacts } from '../Contacts/Contacts';
import { Input } from '../Input/Input';
import { Group } from '../Group/Group';
import iconLogo from '../../images/logo/icon.png';

export function Footer() {
  return (
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
}

export default Footer;
