import React from 'react';
// imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// components
import './style.scss';
import Logo from '../Logo';
import PageNavigation from '../PageNavigation';
import logo from '../../images/logo/logo.png';

const Header = () => (
  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={9} md={9} lg={9}>
        <div className='header_elems'>
          <Logo src={logo} width='452px' />
        </div>
      </Grid>
      <Grid item xs={3} md={3} lg={3}>
        <div className='header_elems_navigation'>
          <PageNavigation />
        </div>
      </Grid>
    </Grid>
  </Box>
);

export default Header;
