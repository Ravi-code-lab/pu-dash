import React from 'react'

import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';


export default function Error404() {

  return (
      <Box bgcolor="ButtonFace" sx={{ height:"100vh",display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center'}}>
        <Typography variant="h1">
          404
        </Typography >
        <Typography>
          OPPS! Service Unavailabe
        </Typography>
        <Typography>
          
        </Typography>
      <Button>Back</Button>
      </Box>     
    
  )
}
