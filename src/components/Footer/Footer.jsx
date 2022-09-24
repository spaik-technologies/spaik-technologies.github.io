import React from 'react';
import './style.scss';
import { Logo } from '../Logo/Logo';
import { PageNavigation } from '../PageNavigation/PageNavigation';
import { Contacts } from '../Contacts/Contacts';
import { Input } from '../Input/Input';
import { Group } from '../Group/Group';

export function Footer() {
  return (
    <footer className='footer'>
      <Logo color='var(--color-grey)' />
      <p className='copyright'>
        © SPAIK 2022
        <br />
        Bringing predictive intelligence to healthcare
        <br />
        ALL RIGHTS RESERVED.
      </p>
      <PageNavigation />
      <Group className='contact' oriented='vertical'>
        <Contacts />
        <Input type='text' />
      </Group>
    </footer>
  );
};

export default Footer;
