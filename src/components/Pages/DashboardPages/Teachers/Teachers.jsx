import { React, useState } from "react";
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
import {  Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import { userData } from "../../Registration/RegisterationForm";


export default function Teachers() {

  const [teachersData, setteachersData] = useState(null)
  
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

  function getTeacherData(){
  }


  getTeacherData();
  return (
    <>
      <Grid container spacing={2}>
        {users.map((user, index) => (
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
              <CardContent sx={{ display: "block", textAlign:'center' }}>
                <Typography gutterBottom variant="h6" component="div">
                  {user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.message}
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
                    <Typography variant="body2">{user.mobile}</Typography>
                  </IconButton>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <IconButton sx={{ background: red[50], borderRadius: 6 }}>
                    <EmailIcon sx={{ color: red[500] }} />
                    <Typography variant="body2">{user.email}</Typography>
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
