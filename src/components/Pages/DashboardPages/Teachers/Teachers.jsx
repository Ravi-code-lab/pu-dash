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
import { Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import { userData } from "../../Registration/RegisterationForm";
import { db } from '../../../../services/firebase';
import { collection, query, where, getDocs } from "firebase/firestore";


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
            //console.log(doc.id, '=>', doc.data());
            data.push(doc);
          })
          // lastStaffDoc = data[19];
          // console.log(lastStaffDoc);
        }
      )
      // } 
      setstaffData(data);
      console.log(data);
    }
    fetchData();
    return;
  }, []);
  //getTeacherData();
  return (
    <>
      <Grid container spacing={2}>
        {staffData.map((user, index) => {
          currentTechData = user.data();
          return (
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
      </Grid>
    </>
  );
}
