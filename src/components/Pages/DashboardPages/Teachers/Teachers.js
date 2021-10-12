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
   card:{
    margin:'19px'
  },
  },
  
  cardBody:{
    width:'270px',
    margin:'10px',
    borderRadius:'13px'
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
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
        />
      <Avatar className={classes.avatar}
      ></Avatar>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h6" component="div">{currentTechData.name.lenght<= 15?(currentTechData.name):(currentTechData.name.substring(0,14)+'..')}</Typography>
          <Typography variant="body2" color="text.secondary">
            {'teacher'}
            </Typography>
          </CardContent>
        <CardActions className={classes.font}>
          <IconButton className={classes.iconButton} href={('tel:'+currentTechData.mobile.toString())}>
          <CallIcon className={classes.iconColor} />
          </IconButton>
        {currentTechData.mobile}
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
      {/* <Grid container spacing={2}>
        {staffData.map((user, index) => {
          currentTechData = user.data();
          return (currentTechData
            <Grid item xs key={index} >
              <Card
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
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: red[800],
                        width: 90,
                        height: 90,
                      }}
                    >
                      A
                    </Avatar>
                  }
                />
                <CardContent sx={{ display: "block", textAlign: 'center' }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {currentTechData.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {'teacher'}
                  </Typography>
                </CardContent>

                <CardActions
                  sx={{ display: "inline-block", alignItems: "center" }}
                >
                  <Box sx={{ display: "flex" }}>
                    <IconButton
                      sx={{ margin: 1, background: red[50], borderRadius: 6 }}
                    >
                      <CallIcon sx={{ color: red[500] }} />
                      <Typography variant="body2">{currentTechData.mobile}</Typography>
                    </IconButton>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <IconButton sx={{ background: red[50], borderRadius: 6 }}>
                      <EmailIcon sx={{ color: red[500] }} />
                      <Typography variant="body2">{user.id}</Typography>
                    </IconButton>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid> */}
    </>
  );
}
