import { React, useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import { userData } from "../../Registration/RegisterationForm";
import { db } from '../../../../services/firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
// Use For Styles 

import { makeStyles } from '@mui/styles';


export default function Teachers() {

  const [staffData, setstaffData] = useState([]);
  // const [lastStaffDoc, setlastStaffDoc] = useState(null);

  // async function getTeacherData() {
  //   const staffCollection = collection(db, "staff");
  //   let data = [];
  //   if (lastStaffDoc === null) {
  //     const querySnap = await getDocs(query(staffCollection, where('department', 'array-contains', userData.department), limit(20))).then(
  //       (result)=>{
  //         result.forEach(doc => {
  //           console.log(doc.id, '=>', doc.data());
  //           data.push(doc);
  //         })
  //         lastStaffDoc = data[19];
  //         console.log(lastStaffDoc);
  //       }
  //     )
  //   } else {
  //     const querySnap = await getDocs(query(staffCollection, where('department', 'array-contains', userData.department), limit(20), startAfter(lastStaffDoc))).then(
  //       (result)=>{
  //         result.forEach(doc => {
  //           console.log(doc.id, '=>', doc.data());
  //           data.push(doc);
  //         })
  //         lastStaffDoc = data[19];
  //         console.log(lastStaffDoc);
  //       }
  //     )
  //   }
  //   return data;
  // }

  let currentTechData;

  //for getting teacher data currently
  useEffect(() => {
    const fetchData = async () => {
      const staffCollection = collection(db, "staff");
      let data = [];
      //  if (lastStaffDoc === null) {
      await getDocs(query(staffCollection, where('department', 'array-contains', userData.department))).then(
        (result) => {
          result.forEach(doc => {
            // console.log(doc.id, '=>', doc.data());
            data.push(doc);
          })
          // lastStaffDoc = data[19];
          // console.log(lastStaffDoc);
        }
      )
      // } 
      setstaffData(data);
      // console.log(data);
    }
    fetchData();
    return;
  }, []);
  //getTeacherData();


  // Student Styles  
const useStyles = makeStyles(theme => ({
  container: {
    display:'flex',
    flexWrap:'wrap',
    
  },
  card:{
    margin:'9px'
  },
  cardBody:{
    width:'190px',
    height:'219px',
    margin:'5px',
    borderRadius:'16px',
    "&:hover":{
      border: "solid #fff 2px",
      backgroundColor: "#fff",
      boxShadow:"0 20px 20px rgba(0, 0, 0, 0.2)",
    },
    '@media only screen and (max-width: 1370px)': {
      width: '170px',
      height:'209px',
      margin:'3px',
    },
  },
  avatar:{
    borderRadius: '16px',
    margin: '-40px auto auto auto',
    bgcolor: red[800],
    width: 70,
    height: 70,
    '@media only screen and (max-width: 1370px)': {
      width: 67,
     height: 67,
    },
    
  },
  cardContent:{
    textAlign:'center',
    padding:'6px',
    '@media only screen and (max-width: 1370px)': {
     padding:'6px 0 0 6px',
    },
    
  },
 
  iconButton:{
    background: red[50], 
    borderRadius: '20px' ,
    marginRight:'3px',
    fontSize:'12px',
    padding:'5px'
  },
  iconColor:{
    color: red[500]
  },
  font:{
    fontWeight:'400',
    fontSize: '16px',
    padding:'0 0 6px 6px',
    '@media only screen and (max-width: 1370px)': {
      fontSize: '14px',
      padding:'0 0 3px 6px',
    },
  }

}));

  // styles
  const classes = useStyles();

  return (
    <>
      <Box container className={classes.container}>
      {staffData.map((user, index) => {
            currentTechData = user.data();
            return (

      <Card  key={index} className={classes.cardBody}>
        <CardHeader
        sx={{padding:'16px 16px 0'}}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
        />
      <Avatar className={classes.avatar}
      ></Avatar>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h6" sx={{margin:"0px",fontWeight:'500',}} component="div">{currentTechData.name.lenght<= 15?(currentTechData.name):(currentTechData.name.substring(0,14)+'..')}</Typography>
          <Typography sx={{margin:"0px", padding:"2px"}} variant="body2" color="text.secondary">
            {'teacher'}
            </Typography>
          </CardContent>
        <CardActions className={classes.font}>
          <IconButton className={classes.iconButton} href={('tel:'+currentTechData.mobile.toString())}>
          <CallIcon fontSize='small'  className={classes.iconColor} />
          </IconButton>
        {currentTechData.mobile}
        </CardActions>
        <CardActions className={classes.font} >
          <IconButton className={classes.iconButton} aria-label="Email" href={('mailto:'+user.id+'@poornima.edu.in')}>
          <EmailIcon fontSize='small' className={classes.iconColor} /> 
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
