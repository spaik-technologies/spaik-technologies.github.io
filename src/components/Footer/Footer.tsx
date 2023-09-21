import React from 'react';
// imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// components
import './style.scss';
import Logo from '../Logo';
import Contacts from '../Contacts';
import Input from '../Input';
import Group from '../Group';
import iconLogo from '../../images/logo/icon.png';

import styled_comp from 'styled-components';


const Section = styled_comp.div`
  height: 100vh;
  scroll-snap-align: center;
`

const Footer = () => (
  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={3} md={2} lg={2}>
        <div className='footer_elems'>
          <Logo src={iconLogo} height='60px' width='60px' />
        </div>
      </Grid>
      <Grid item xs={9} md={3} lg={3}>
        <div className='footer_elems'>
          <p className='copyright'>
            © SPAIK TECHNOLOGIES, S.L
            <br />
            ALL RIGHTS RESERVED
          </p>
        </div>
      </Grid>
      <Grid item xs={12} md={3} lg={3}>
        <div className='footer_elems' id='footer_contect'>
          <Group className='contact' oriented='vertical'>
            <Contacts />
            <Input type='text' />
          </Group>
        </div>
      </Grid>
    </Grid>
  </Box>
);

export default Footer;
