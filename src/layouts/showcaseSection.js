import React from 'react'
import { Box } from '@mui/material'
import CommonCard from '../components/commonCard'

const ShowcaseSection = () => {
  return (
    <div>
        <Box pb={3} display={'flex'} flexDirection={'row'}> 
            <CommonCard/>
            <CommonCard/>
            <CommonCard/>
            <CommonCard/>
            <CommonCard/>
        </Box>
      
    </div>
  )
}

export default ShowcaseSection
