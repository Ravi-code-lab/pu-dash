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
import { Container, Grid, Icon } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root:{
    background:  '#fefkdf'
  },
  boxSize:{

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
        <Grid container sx={{}} columnGap={2} rowGap={2}>
          {users.map((user,index) => (
            <Grid item xs={12} sm={3}key={index} ><Card
              sx={{
                margin: 1,
                
              }}
            >
                <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  avatar={
                    <Avatar
                      variant="rounded"
                      sx={{
                        borderRadius: 4,
                        display:'flex',
                        alignItems: 'center',
                        justifyContent:'center',
                        bgcolor: red[800],
                        width: 90,
                        height: 90,
                      }}
                    >
                      A
                </Avatar>

                  }
                />
                
                <CardContent sx={{ display: "block" }}>
                  <Typography gutterBottom variant="h6" component="div">Kavita Lal</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Matemathics
                  </Typography>
                </CardContent>

                <CardActions sx={{ display: "inline-block" , alignItems:'center'}}>
                  <Box sx={{ display: "flex",}}>
                    <IconButton sx={{ background: red[50], borderRadius: 6 }}>
                      <CallIcon sx={{ color: red[500] }} /> 
                      <Typography variant="body2">+91 7405273736</Typography>
                    </IconButton>
                    
                  </Box>
                  <Box sx={{ display: "flex" ,  }}>
                    <IconButton sx={{ marginTop:1,background: red[50], borderRadius: 6 }}>
                      <Icon>
                      <EmailIcon sx={{ color: red[500] }} /> 
                      </Icon>
                      <Typography variant="body2">123@example.com</Typography>
                    </IconButton>
                    
                  </Box>
                </CardActions>
            </Card>
            </Grid>
          ))}
        </Grid>
    </>
  );
}

