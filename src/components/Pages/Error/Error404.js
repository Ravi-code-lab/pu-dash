import React from 'react'

import { Button, Typography,Box,Container } from '@mui/material';

import { styled } from '@mui/system';



const RootStyle = styled(Box)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

export default function Error404() {

  return (
    <>
    <RootStyle>
      <Container>
        <Typography variant="h1">
          404
        </Typography >
        <Typography>
          OPPS! Service Unavailabe
        </Typography>
        <Typography>
          
        </Typography>
      <Button>Back</Button>
      </Container>
      </RootStyle>  
    </>
  )
}
