import {React, useState,useEffect} from 'react';

// Use For Styles 

import { makeStyles } from '@mui/styles';
// import {createTheme} from '@mui/material/styles'

// components
import {IconButton,CardHeader,Card,Typography,Avatar,CardActions,CardContent,Box} from '@mui/material';



// mui Color
import { red } from '@mui/material/colors';
// Icons
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CallIcon from '@mui/icons-material/Call';



// Data red
import { userData } from "../../Registration/RegisterationForm";
import { db } from '../../../../services/firebase';
import { collection, query, where, getDocs} from "firebase/firestore";

// Student Styles  
//const mediaqtest= useMediaQuery('');
// const theme = createTheme({});
const useStyles = makeStyles((theme) => ({
 
  container: {
    display:'flex',
    flexWrap:'wrap',
  },
  
  card:{
    margin:'19px'
  },
  cardBody:{
    width:'250px',
    margin:'5px',
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
    borderRadius: '20px',
    marginRight:'6px',
  },

  iconColor:{
    color: red[500]
  },

  font:{
    fontSize: '16px'
  }

}));


export default function Student() {
  const [studentData, setstudentData] = useState([]);

  let currentStudentData;


  //for getting teacher data currently
  useEffect(() => {
    const fetchData = async () => {
      const studentCollection = collection(db, "students");
      let data = [];
      //  if (lastStaffDoc === null) {
      await getDocs(query(studentCollection, where('course','==', userData.course))).then(
        (result) => {
          result.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
            data.push(doc);
          })
          // lastStaffDoc = data[19];
          // console.log(lastStaffDoc);
        }
      )
      // } 
      setstudentData(data);
      console.log(data);
    }
    fetchData();
    return;
  }, []);


  const classes = useStyles();
  
  return (
    <>
    <Box container className={classes.container}>


    {studentData.map((user, index) => {
          currentStudentData = user.data();
          return (
    
    <Card key={index} className={classes.cardBody}>
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
         <Typography gutterBottom variant="h6" component="div">{
           currentStudentData.name.length<=15?
           (currentStudentData.name):(
             currentStudentData.name.substring(0,14)+'...')
         }</Typography>
         <Typography variant="body2" color="text.secondary">
           {currentStudentData.course.toUpperCase()+'('+currentStudentData.specilization.toUpperCase()+') '}
          </Typography>
         </CardContent>

      <CardActions className={classes.font}>
        <IconButton className={classes.iconButton} href={('tel:'+currentStudentData.mobile.toString())}>
        <CallIcon className={classes.iconColor} />
        </IconButton>
       {currentStudentData.mobile}
      </CardActions>

      <CardActions >
        <IconButton className={classes.iconButton} aria-label="Email" href={('mailto:'+user.id+'@poornima.edu.in')}>
        <EmailIcon className={classes.iconColor} /> 
        </IconButton>
        {user.id}
      </CardActions>
    </Card>
    )
  })}


   </Box>
    </>
  );
}