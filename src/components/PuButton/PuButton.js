import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Button } from '@mui/material';


const PuButton = styled(Button)(({ theme }) => ({
  width: 300,
  color: theme.palette.success.main,
  borderRadius:4,
  root:{
    [theme.breakpoints.down('md')]: {
      width:100,
    },
    [theme.breakpoints.up('sm')]: {
      width:20,
    },
  }
  // '& .MuiSlider-thumb': {
  //   '&:hover, &.Mui-focusVisible': {
  //     boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
  //   },
  //   '&.Mui-active': {
  //     boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
  //   },
  // },
}));
export { PuButton };
