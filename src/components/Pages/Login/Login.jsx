// import userEvent from '@testing-library/user-event';
import { Button ,Container,Box ,Paper} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { React } from 'react'
import { signInGoogle } from '../../../services/firebase';
import {puicon,puiconname,avlogo} from '../../Import';
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
    textAlign:"-webkit-center",
     height:"100%",
     width:"100%" 
  },
  BoxRight:{
    textAlign:"-webkit-center",
    height:"100%",
    width:"100%",
    backgroundImage:"url(https://firebasestorage.googleapis.com/v0/b/poornima-dashboord.appspot.com/o/bg.jpg?alt=media&token=03bf512a-e176-420a-9968-8ec68c170ccf)",
    
    borderRadius:"0 20px 20px 0",
    backgroundSize:"100%",
    '@media only screen and (max-width: 600px)': {
      borderRadius:"0 0 20px 20px"
    },
    
  },
  BoxRightMain:{
    backgroundColor:"#007FFF",
    borderRadius:"0 20px 20px 0",
    '@media only screen and (max-width: 600px)': {
      borderRadius:"0 0 20px 20px"
    },
  },
  Papper:{
    borderRadius:"20px",
    margin:"50px",
    display:"flex",
    alignItems:"center",
    '@media only screen and (max-width: 600px)': {
      display:"block"
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
            <Button variant="contained" color="primary"sx={{margin: 2}} onClick={() => signInGoogle()}>
                Login
            </Button>
         </Box>
         <Box className={classes.BoxRight}>
           <Box className={classes.BoxRightMain} >
            <div className=" a6">
              <img src={avlogo} alt="logo"></img>
              <img src={puiconname} alt="logo"></img>
            </div>
            <Button variant="contained" color="primary"sx={{margin: 2}} onClick={() => signInGoogle()}>
                Login
            </Button>
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
