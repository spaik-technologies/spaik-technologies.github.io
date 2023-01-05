import React from 'react';
// imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button, { ButtonProps } from '@mui/material/Button';
// components
import './style.scss';
import Logo from '../Logo';
import PageNavigation from '../PageNavigation';
import logo from '../../images/logo/logo_02.svg';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: 'white',
  backgroundColor: '#74BFC8',
}));

const Header = () => (
  <div id='header_main' className='header_main'>
    <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2}>
        <Grid item xs={4} md={4} lg={4}>
          <div className='header_elems'>
            <Logo src={logo} width='452px' />
          </div>
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
          <div className='header_elems_navigation'>
            <PageNavigation />
          </div>
        </Grid>
        <Grid item xs={2} md={2} lg={2}>
          <div className='header_elems_navigation'>
            <ColorButton  variant="contained"> Contact us </ColorButton >
          </div>
        </Grid>
      </Grid>
    </Box>
  </div>
);

export default Header;
