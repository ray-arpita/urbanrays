import React from 'react'
import { Grid, Typography, Button } from '@mui/material'
import DiscoverImage from '../../assets/shoes/shoe15.jpg'
import CustomButton from '../../components/button/button'
import './discoverSection.css';


const DiscoverSection = () => {
  return (
    <Grid container  my={6} display={'flex'} flexDirection={'row'} sx={{backgroundColor : '#FFFF '}}>
<Grid item md={6} sm={12}>  
<div>
    <img src={DiscoverImage} alt='discover' height={'277px'} width={'100%'} style={{objectFit : 'cover' , objectPosition : 'center'}} />
</div>
    </Grid> 
    <Grid item md={6} sm={12} display={'flex'} justifyContent={'center'} alignItems={'center'} >  
<Grid container spacing={2} display={'flex'} flexDirection={'column'} >
    <Grid item>
   <Typography variant="h3" color="black" className='header'>Discover Our New Arrivals</Typography>
    </Grid>
    <Grid item>
   <Typography sx={{fontSize : '18px' , fontWeight : 'bold' , color : 'grey'}}>
     Discover the perfect pieces to redefine your wardrobe and make a statement wherever you go.
   </Typography>
    </Grid>
    <Grid item>
 
   <CustomButton label='Shop Now'/>
    </Grid>
</Grid>
</Grid>
    </Grid>
  )
}

export default DiscoverSection
