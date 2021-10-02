import { React, useState } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { Container } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles';
import './teachers.scss';

const useStyles = makeStyles({
  root:{
    background:  '#fefkdf'
  }
})

export default function Teachers() {
  const classes = useStyles();
  const [users] = useState([
    { name: "ddfhjadhf", message: "ddfhjadhf" },
    { name: "ddfhjadhf", message: "ddfhjadhf" },
    { name: "ddfhjadhf", message: "ddfhjadhf" },
    { name: "ddfhjadhf", message: "ddfhjadhf" },
    { name: "ddfhjadhf", message: "ddfhjadhf" },
    { name: "ddfhjadhf", message: "ddfhjadhf" },
    { name: "ddfhjadhf", message: "ddfhjadhf" },
    { name: "ddfhjadhf", message: "ddfhjadhf" },
    { name: "ddfhjadhf", message: "ddfhjadhf" },
    { name: "ddfhjadhf", message: "ddfhjadhf" },
    { name: "ddfhjadhf", message: "ddfhjadhf" },
    { name: "ddfhjadhf", message: "ddfhjadhf" },
    { name: "ddfhjadhf", message: "ddfhjadhf" },
    { name: "ddfhjadhf", message: "ddfhjadhf" },
    { name: "ddfhjadhf", message: "ddfhjadhf" },
    { name: "ddfhjadhf", message: "ddfhjadhf" },
    { name: "ddfhjadhf", message: "ddfhjadhf" },
    { name: "ddfhjadhf", message: "ddfhjadhf" },
    { name: "ddfhjadhf", message: "ddfhjadhf" },
    { name: "ddfhjadhf", message: "ddfhjadhf" },
    { name: "ddfhjadhf", message: "ddfhjadhf" },
    { name: "ddfhjadhf", message: "ddfhjadhf" },
  ]);

  function getTeachers(){
    
  }
  
  

  return (
    <>
      <Container className={classes.root} sx={{padding:"",textAlign:'center'}}>
      <Typography variant="h4"> Teachers </Typography>
      <div className="row">
        {users.map(user => (
          <Card sx={{ maxWidth: 415, margin: 1, justifyContent: 'center', alignItems: 'center' }}>
              <CardHeader
                avatar={
                  <Avatar variant="rounded"  sx={{borderRadius:4,display: 'flex', alignItems: 'center', bgcolor: red[800], width: 90, height: 90 }}>
                    A
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
              />
              <CardContent sx={{ display: 'block' }}>
                <Typography gutterBottom variant="h5" component="div">
                  Kavita Lal
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Matemathics
                </Typography>
                </CardContent>

              <CardActions sx={{display: 'inline-block'}}>
                  <Box sx={{display:'flex'}}>
                    <IconButton sx={{ background: red[50], borderRadius: 6}}>
                      <CallIcon sx={{ color: red[500]}} />
                    </IconButton>
                    <Typography variant="h6">
                      +91 7405273736
                    </Typography>
                        
                  </Box>
                  <Box sx={{display:'flex'}}>
                    <IconButton sx={{ background: red[50], borderRadius: 6}}>
                      <EmailIcon sx={{ color:red[500]}}/>
                    </IconButton>
                  <Typography variant="h6">
                    123@example.com
                  </Typography>
                  </Box>
                </CardActions>
          
          </Card>
        ))}
      </div>
      </Container>
    </>

  )
}

