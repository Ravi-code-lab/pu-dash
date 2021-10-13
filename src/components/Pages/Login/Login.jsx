// import userEvent from '@testing-library/user-event';
import { Button ,Container,Box ,Paper, Grid} from '@mui/material';
import { React } from 'react'
import { signInGoogle } from '../../../services/firebase';
import {puicon,puiconname} from '../../Import';
import './Login.scss'
export default function Login() {
  //for signIn or login
  // async function logIn() {
  //   await signInGoogle();
  // }
  return (<>
    {/* <Container component='main'  sx={{ height:'100vh',display:"flex"}}>
    <Box sx={{ textAlign: 'center', margin:"auto",height:"100%",width:"100%" }}>
      <Grid sx={7}>
        <Grid item sx={3} >
        <Paper elevation={8} sx={{margin:"10px"}}>
          
        </Paper>
        </Grid>
        </Grid>
      </Box>
    </Container> */}
    <>
    <div class="container">
    <div className="left">
      <div className="animation a6">
        <img src={puicon} alt="logo"></img>
        <img src={puiconname} alt="logo"></img>
      </div>
      <Button variant="contained" color="primary"sx={{margin: 2,fontSize: 20}} onClick={() => signInGoogle()}>
            Login
      </Button>
      <div class="header">
        <h2 class="animation a1">Form Login with random background</h2>
        <p class="animation a2"> raj</p>
      </div>
    </div>
    <div id="right">
      
    </div>
    </div>
    </>

    </>
  )
}
