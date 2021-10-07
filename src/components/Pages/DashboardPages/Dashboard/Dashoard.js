import React from 'react'
import { Grid, Card, CardContent, Typography, CardHeader, IconButton } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Task from './Tasks/Task';
import News from '../Dashboard/News/News';



// Use For Styles 

import { makeStyles } from '@mui/styles';


// const todo = [
//   { task: 'Create a todo app', createdBy: 'UserName', dueDate: '12/12/2021 12:50AM', des: 'create the following things in the project', attachment: ['files'], submit: false },
// ]

const useStyles = makeStyles((theme) => ({
 
  Attandance:{
    width:'500px',
    height:'300px'
  },
  Task:{
    width:'500px',
    height:'300px'
  },
  News:{
    width: '500px',
    height:'300px',
  }

}));


export default function Dashoard() {
  // const [value, setValue] = React.useState('1');
  const classes = useStyles();

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  return (
    <>
      <Grid container spacing={3}>
        <Grid item>
          <Card className={classes.Attandance}>
            <CardHeader
              action={<IconButton aria-label="settings">
                <MoreHorizIcon />
              </IconButton>}
              title={<Typography varient="h6">Attandance</Typography>}
            />
            <CardContent>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.Task}> 
           <Task />
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.News}>
            <News />
          </Card>
        </Grid>
      </Grid>
    </>
  )
}
