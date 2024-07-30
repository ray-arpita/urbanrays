import React from 'react'
import { Grid } from '@mui/material'
import banner_image from '../../assets/other_images/urbanrays.jpg'

const Banner = () => {
  return (
    <>
    {/*Banner Section*/}
    <section style={{  width : '100%' , height : '430px'}}>
    <img src={banner_image} alt='banner' style={{width : '100%' ,height : '100%' , objectFit : 'cover' , objectPosition : 'center'}}/>
    </section>
    {/*Banner Section End*/}
    </>
  )
}
export default Banner
