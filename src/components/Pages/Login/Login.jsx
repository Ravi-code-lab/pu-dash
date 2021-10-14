// import userEvent from '@testing-library/user-event';
import { Button ,Container,Box ,Paper, Typography} from '@mui/material';
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
    margin:"auto",
    width:"100%", 
    justifyContent:"center",
  },
  Boxlogo:{
    display:'flex',
    justifyContent:'center',
    height:"40px",
    margin:'20px'
    
  },
  BoxLeft:{
    textAlign:"-webkit-center",
    height:"100%",
    width:"100%",
    padding:"20px"
  },
  BoxRight:{
    textAlign:"-webkit-center",
    padding:"20px",
   
    width:"100%",
    backgroundImage:"url(https://firebasestorage.googleapis.com/v0/b/poornima-dashboord.appspot.com/o/bg.jpg?alt=media&token=03bf512a-e176-420a-9968-8ec68c170ccf)",
    
    borderRadius:"0 20px 20px 0",
    backgroundSize:"100%",
    '@media only screen and (max-width: 600px)': {
      borderRadius:"0 0 20px 20px"
    },
  },
  Papper:{
    borderRadius:"20px",
    display:"flex",
    '@media only screen and (max-width: 600px)': {
      display:"block"
    },
  },

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
        <Paper elevation={16} className={classes.Papper} >
          <Box className={classes.BoxLeft}>
            <Box className={classes.Boxlogo}>
              <img src={puicon} alt="logo"></img>
              <img src={puiconname} alt="logo"></img>
            </Box>
            <Typography>
           Testing Poornima University, established in 2012, is a private university in Jaipur, Rajasthan. The university was established by Rajasthan State Legislature vide Act No. 16/2012 and is recognized under section 22 of University
            </Typography>
            <Button variant="contained" color="primary" sx={{margin: 1}} onClick={() => signInGoogle()}>
                Login
            </Button>
         </Box>
         <Box className={classes.BoxRight}>
          
            <Box className={classes.Boxlogo}>
              <img  src={avlogo} alt="logo"></img>
              <Typography color="blue" fontSize={20} fontWeight={300}>Avination</Typography>
            </Box>
              <Typography >
             Testing Creatuve Digital Design & Development
We leverage the latest Web and mobile technologies to build,grow and support your business
            </Typography>
            
            <Button target="_blank" href='http://avination.in' variant="contained" color="primary"  sx={{ margin: 2}}>
                More
            </Button>
           
         </Box>
        </Paper>
      </Box>
      <Box >
      </Box>
    </Container>
    </>
  )
}
