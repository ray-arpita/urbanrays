import React from "react";
import { Grid, Typography } from '@mui/material'
import CustomButton from "../../components/button/button";

const Newsletter = () => {
  return (
    <Grid container sx={{ backgroundColor: "black" }}>
      <Grid item p={10} md={5.5} sm={12} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Grid container spacing={3} display={'flex'} flexDirection={'column'} >
          <Grid item >
            <Typography variant="h4" color="white">
              SIGNUP TO OUR NEWSLETTER!
            </Typography>
          </Grid>
          <Grid item>
            <Typography color="white">$10 off on your first order</Typography>
          </Grid>
          <Grid item>
            <CustomButton label={'Subscribe'} backgroundColor={'black'} color={'white'} borderColor={'#FFFF'} />
          </Grid>
        </Grid>
      </Grid>
      <div style={{ borderLeft: '1px solid white', height: '100%', margin: '0 auto' }} />
      <Grid item p={10} md={5.5} sm={12} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Grid container spacing={2} display={'flex'} flexDirection={'column'} >
          <Grid item>
            <Typography variant="h3" color="white">
              NEWS
            </Typography>
          </Grid>
          <Grid item>
            <Typography color="white">Discover All our news</Typography>
          </Grid>
          <Grid item>
            <CustomButton label={'Subscribe'} backgroundColor={'#FFFF'} color={'black'} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Newsletter;
