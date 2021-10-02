// import userEvent from '@testing-library/user-event';
import { Button ,Container,Box ,Paper} from '@mui/material';
import { React } from 'react'
import { signInGoogle } from '../../../services/firebase';
import {puicon,puiconname} from '../../Import';
export default function Login() {
  //for signIn or login
  // async function logIn() {
  //   await signInGoogle();
  // }
  return (
    <Container component='main' maxWidth="xs" sx={{ minHeight:'100vh',display:"flex"}}>
    <Box sx={{ textAlign: 'center', margin:"auto"}}>
        <Paper elevation={5} sx={{padding:3}}>
          <div>
            <img src={puicon} alt="logo"></img>
            <img src={puiconname} alt="logo"></img>
          </div>
          <Button variant="contained" color="primary"sx={{margin: 2,fontSize: 20}} onClick={() => signInGoogle()}>
            Login
          </Button>
        </Paper>
      </Box>
    </Container>
  )
}
