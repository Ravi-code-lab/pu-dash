import {React, useState} from 'react';
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
import { Box } from '@mui/material';
export default function Student() {
    const [users] = useState([
      { name: "Ravi Raj Yadav", message: "Student" ,mobile:" +91 705604005", email: "2020bcaravi832@poornima.edu.in" },
      { name: "Ravi Raj Yadav", message: "Student" ,mobile:" +91 705604005", email: "2020bcaravi832@poornima.edu.in" },
      { name: "Ravi Raj Yadav", message: "Student" ,mobile:" +91 705604005", email: "2020bcaravi832@poornima.edu.in" },
      { name: "Ravi Raj Yadav", message: "Student" ,mobile:" +91 705604005", email: "2020bcaravi832@poornima.edu.in" },
      { name: "Ravi Raj Yadav", message: "Student" ,mobile:" +91 705604005", email: "2020bcaravi832@poornima.edu.in" },
      { name: "Ravi Raj Yadav", message: "Student" ,mobile:" +91 705604005", email: "2020bcaravi832@poornima.edu.in" },
      { name: "Ravi Raj Yadav", message: "Student" ,mobile:" +91 705604005", email: "2020bcaravi832@poornima.edu.in" },
      { name: "Ravi Raj Yadav", message: "Student" ,mobile:" +91 705604005", email: "2020bcaravi832@poornima.edu.in" },
      { name: "Ravi Raj Yadav", message: "Student" ,mobile:" +91 705604005", email: "2020bcaravi832@poornima.edu.in" },
      { name: "Ravi Raj Yadav", message: "Student" ,mobile:" +91 705604005", email: "2020bcaravi832@poornima.edu.in" },
      { name: "Ravi Raj Yadav", message: "Student" ,mobile:" +91 705604005", email: "2020bcaravi832@poornima.edu.in" },
      { name: "Ravi Raj Yadav", message: "Student" ,mobile:" +91 705604005", email: "2020bcaravi832@poornima.edu.in" },
      { name: "Ravi Raj Yadav", message: "Student" ,mobile:" +91 705604005", email: "2020bcaravi832@poornima.edu.in" },
      { name: "Ravi Raj Yadav", message: "Student" ,mobile:" +91 705604005", email: "2020bcaravi832@poornima.edu.in" },
      { name: "Ravi Raj Yadav", message: "Student" ,mobile:" +91 705604005", email: "2020bcaravi832@poornima.edu.in" },
      { name: "Ravi Raj Yadav", message: "Student" ,mobile:" +91 705604005", email: "2020bcaravi832@poornima.edu.in" },
      { name: "Ravi Raj Yadav", message: "Student" ,mobile:" +91 705604005", email: "2020bcaravi832@poornima.edu.in" },
      { name: "Ravi Raj Yadav", message: "Student" ,mobile:" +91 705604005", email: "2020bcaravi832@poornima.edu.in" },
      { name: "Ravi Raj Yadav", message: "Student" ,mobile:" +91 705604005", email: "2020bcaravi832@poornima.edu.in" },
      { name: "Ravi Raj Yadav", message: "Student" ,mobile:" +91 705604005", email: "2020bcaravi832@poornima.edu.in" },
      { name: "Ravi Raj Yadav", message: "Student" ,mobile:" +91 705604005", email: "2020bcaravi832@poornima.edu.in" },
      { name: "Ravi Raj Yadav", message: "Student" ,mobile:" +91 705604005", email: "2020bcaravi832@poornima.edu.in" },
      { name: "Ravi Raj Yadav", message: "Student" ,mobile:" +91 705604005", email: "2020bcaravi832@poornima.edu.in" },
      { name: "Ravi Raj Yadav", message: "Student" ,mobile:" +91 705604005", email: "2020bcaravi832@poornima.edu.in" },
      { name: "Ravi Raj Yadav", message: "Student" ,mobile:" +91 705604005", email: "2020bcaravi832@poornima.edu.in" },
      { name: "Ravi Raj Yadav", message: "Student" ,mobile:" +91 705604005", email: "2020bcaravi832@poornima.edu.in" },
     
      ]);
  return (
    
    <Box container  sx={{display:'flex',flexWrap:'wrap',}}>
    {users.map((user, index) => (
    <Card key={index}  sx={{ margin:'19px'}}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
     <Avatar 
     sx={{
      borderRadius: 4,
      margin: '-50px auto auto auto',
      bgcolor: red[800],
      width: 90,
      height: 90,
    }}
     ></Avatar>
      <CardContent sx={{ display: "block", textAlign:'center' }}>
         <Typography gutterBottom variant="h6" component="div">{user.name}</Typography>
         <Typography variant="body2" color="text.secondary">
           {user.message}
          </Typography>
         </CardContent>
      <CardActions sx={{fontSize:14}} >
        <IconButton sx={{background: red[50], borderRadius: 6 ,marginRight:1 }}>
        <CallIcon sx={{ color: red[500] }} />
        </IconButton>
       {user.mobile}
      </CardActions>
      <CardActions sx={{fontSize:14}}>
        <IconButton sx={{background: red[50], borderRadius: 6 ,marginRight:1 }} aria-label="Email">
        <EmailIcon sx={{ color: red[500]}} /> 
        </IconButton>
        {user.email}
      </CardActions>
    </Card>
        ))}
   </Box>
   
  );
}