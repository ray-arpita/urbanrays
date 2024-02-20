import { Grid } from '@mui/material'
import React from 'react'
import Navbar from './navbar/navbar'
import Banner from './banner/banner'
import FashionSection from './second-section/fashionsection'
import SliderSection from './slider/slider'

const Main = () => {
  return (
   <Grid container sx={{maxWidth: '96vw', marginLeft: '20px', marginRight : '2opx'  , overflow : 'hidden'}}>
  <Navbar/>
  <Banner/>
  <FashionSection/>
  <SliderSection/>

   </Grid>
  )
}

export default Main
