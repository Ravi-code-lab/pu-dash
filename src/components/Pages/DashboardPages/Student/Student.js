import {React, useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import EmailIcon from '@mui/icons-material/Email';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import CallIcon from '@mui/icons-material/Call';
import { Box, LinearProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';


// Student Styles  
const useStyles = makeStyles(theme => ({
  
  container: {
    display:'flex',
    flexWrap:'wrap',
  },
  card:{
    margin:'19px'

  },
  avatar:{
    borderRadius: '16px',
    margin: '-50px auto auto auto',
    bgcolor: red[800],
    width: 90,
    height: 90,
  },
  cardContent:{
    textAlign:'center'
  },
  iconButton:{
    background: red[50], 
    borderRadius: '20px' ,
    marginRight:'6px'
  },
  iconColor:{
    color: red[500]
  },
  font:{
    fontSize: '16px'
  }

}));


export default function Student() {


  const classes = useStyles();
    const [users] = useState([
      { name: "Ravi Raj Yadav", message: "Student" ,mobile:" +91 705604005", email: "2020bcaravi832@poornima.edu.in" },
      { name: "Ravi Raj Yadav", message: "Student" ,mobile:" +91 705604005", email: "2020bcaravi832@poornima.edu.in" },
      { name: "Ravi Raj Yadav", message: "Student" ,mobile:" +91 705604005", email: "2020bcaravi832@poornima.edu.in" },

      ]);


  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])
  return (
    <>
    {loading === false ? (
    <Box container className={classes.container}>
    {users.map((user, index) => (
    <Card key={index}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
     <Avatar className={classes.avatar}
     ></Avatar>
      <CardContent className={classes.cardContent}>
         <Typography gutterBottom variant="h6" component="div">{user.name}</Typography>
         <Typography variant="body2" color="text.secondary">
           {user.message}
          </Typography>
         </CardContent>
      <CardActions className={classes.font}>
        <IconButton className={classes.iconButton}>
        <CallIcon className={classes.iconc} />
        </IconButton>
       {user.mobile}
      </CardActions>
      <CardActions >
        <IconButton className={classes.iconButton} aria-label="Email">
        <EmailIcon className={classes.iconColor} /> 
        </IconButton>
        {user.email}
      </CardActions>
    </Card>
        ))}
   </Box>
   ) : (
     <LinearProgress/>
  )}
  </>
  );
}