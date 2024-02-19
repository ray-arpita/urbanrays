import React from 'react';
import { Grid, Typography } from '@mui/material';
import './navbar.css';

const Navbar = () => {
  return (
    <Grid container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' , paddingBlock :  '20px'}}>
      <Grid item>
        <Grid container sx={{ display: 'flex', justifyContent: 'space-around' ,gap : '38px' }}>
          <Grid item sx={{marginLeft : '8px'}}>
            <Typography fontWeight={'bold'} className='menuItem'>
              Shop
            </Typography>
          </Grid>
          <Grid item  >
            <Typography fontWeight={'bold'} className='menuItem'>
              About
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6}>
        <h2 className='logo'>URBANRAYS</h2>
      </Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'space-between' , gap : '8px'}}>
        <Typography fontWeight={'bold'} sx={{margin :'8px'}} className='menuItem'>Register</Typography>
        <Typography></Typography>
      </Grid>
    </Grid>
  );
};

export default Navbar;
