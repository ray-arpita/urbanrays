import React from 'react';
import { Grid, Typography } from '@mui/material';


const Footer = () => {
  return (
    <Grid container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' , paddingBlock :  '25px' , alignItems : 'center'}}>
      <Grid item>
        <Grid container sx={{ display: 'flex', justifyContent: 'space-around' ,gap : '38px' }}>
        <Grid item sx={{marginLeft : '8px'}}>
            <Typography fontWeight={'bold'} className='menuItem'>
            Home
            </Typography>
          </Grid>
          <Grid item sx={{marginLeft : '8px'}}>
            <Typography fontWeight={'bold'} className='menuItem'>
              Shop
            </Typography>
          </Grid>
          <Grid item  >
            <Typography fontWeight={'bold'} className='menuItem'>
              About US
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6}>
        <h2 className='logo'>URBANRAYS</h2>
      </Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'space-between' , gap : '8px'}}>
        <Typography fontWeight={'bold'} sx={{margin :'8px'}} className='menuItem'>Blog</Typography>
        <Typography fontWeight={'bold'} sx={{margin :'8px'}} className='menuItem'>Terms</Typography>
        <Typography fontWeight={'bold'} sx={{margin :'8px'}} className='menuItem'>Contact</Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
