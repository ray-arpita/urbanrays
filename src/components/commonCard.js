import * as React from 'react';
import { Grid,Card,Typography , CardContent } from '@mui/material';
import './commonCard.css';
import image from '../assets/bags/bag17.jpg'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const CommonCard = () => {
  return (
  <>
  <Card sx={{backgroundColor : 'white' , marginInline : '10px' }}>
  <CardContent>
    <Grid container direction={'column'}>
        <Grid item md={12} xs={12}>
            <Grid container position={'relative'}> 
                <Grid item>
          <img src={image} className='cardImage' />
                </Grid>
                <Grid item>
            <ShoppingBagOutlinedIcon className='addToCartIcon'/>
                </Grid>
            </Grid>
        </Grid>
        <Grid item py={1}>
            <Grid container direction={'row'} justifyContent={'space-between'}>
                <Grid item>
            <Typography className='cardText'>
            Urban Sling Backpack
            </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className='cardText'>
                            $45.99
                        </Typography>
                        
                        </Grid> 
            </Grid>
        </Grid>
    </Grid>
  </CardContent>

  </Card>
  
  </>
  );
}
export default CommonCard