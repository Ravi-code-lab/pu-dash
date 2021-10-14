// import userEvent from '@testing-library/user-event';
import { Button ,Container,Box ,Paper} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { React } from 'react'
import { signInGoogle } from '../../../services/firebase';
import {puicon,puiconname} from '../../Import';


const useStyle = makeStyles((theme) => ({

  Container:{
    height:'100vh',
    display:"flex",
    
  },
  
  Box:{
    textAlign: 'center',
     margin:"auto",
     height:"100%",
     width:"100%", 
   
  },
  BoxLeft:{
     height:"100%",
     width:"100%" 
  },
  BoxRight:{
     height:"100%",
     width:"100%" 
  },
  Papper:{
    borderRadius:"20px",
    margin:"50px",
    display:"flex",
    alignItems:"center",
    '@media only screen and (max-width: 600px)': {
      display:""
    },
  }

}));

export default function Login() {
  const classes = useStyle();
  //for signIn or login
  // async function logIn() {
  //   await signInGoogle();
  // }
  return (
  <>
    <Container className={classes.Container}>
      <Box className={classes.Box} >
        <Paper elevation={8} className={classes.Papper} >
          <Box className={classes.BoxLeft}>
            <div className=" a6">
              <img src={puicon} alt="logo"></img>
              <img src={puiconname} alt="logo"></img>
            </div>
            <Button variant="contained" color="primary"sx={{margin: 2,fontSize: 20}} onClick={() => signInGoogle()}>
                Login
            </Button>
         </Box>
         <Box className={classes.BoxRight}>
          <Box>
            hgtddtd
          </Box>
         </Box>
          
        </Paper>
      </Box>
      <Box >

      </Box>
    </Container>
    </>
  )
}
