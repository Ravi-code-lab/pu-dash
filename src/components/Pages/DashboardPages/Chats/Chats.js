import React from 'react';
import { makeStyles } from '@mui/styles';

import {Grid,ListItemText,List,ListItem,Divider,Fab,Avatar,TextField,Paper,ListItemIcon,Typography} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '100%',
    height: '100%',
    border:'1px solid rgb(229, 232, 236)'
  },
  headBG: {
      backgroundColor: '#e0e0e0'
  },
  borderRight500: {
      borderRight: '1px solid #e0e0e0'
  },
  messageArea: {
    height: '70vh',
    overflowY: 'auto'
  }
});

 export default function Chats(){
  const classes = useStyles();

  return (
      <div>
        <Grid container> 
        </Grid>
        <Grid container component={Paper} className={classes.chatSection}>
            <Grid item xs={3} className={classes.borderRight500}>
                <List>
                    <ListItem button key="Kuldeep">
                        <ListItemIcon>
                        <Avatar alt="Kuldeep" src="" />
                        </ListItemIcon>
                        <ListItemText primary="Kuldeep"></ListItemText>
                    </ListItem>
                </List>
                <Divider />
                
                <List>
                    <ListItem button key="">
                        <ListItemIcon>
                            <Avatar alt="" src="" />
                        </ListItemIcon>
                        <ListItemText primary="Ravi">Remy Sharp
                        
                        </ListItemText>
                        <ListItemText secondary="online" align="right"></ListItemText>
                    </ListItem>
                    <ListItem button key="Yadav">
                        <ListItemIcon>
                            <Avatar alt="yadav" src="" />
                        </ListItemIcon>
                        <ListItemText primary="Yadav">Yadav</ListItemText>
                    </ListItem>
                    <ListItem button key="Arun">
                        <ListItemIcon>
                            <Avatar alt="" src="" />
                        </ListItemIcon>
                        <ListItemText primary="Arun">Arun</ListItemText>
                    </ListItem>
                   
                
                </List>
            </Grid>
            <Grid item xs={9}>
                <List className={classes.messageArea}>
                    <ListItem key="1">
                        <Grid container> 
                            <Grid item xs={12}>
                                <ListItemText align="right" secondary="09:30"></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="right" primary="Hey man, What's up ?"></ListItemText>
                            </Grid>
                           
                        </Grid>
                    </ListItem>
                    <ListItem key="2">
                        <Grid container>
                             <Grid item xs={12}>
                                <ListItemText align="left" secondary="09:31"></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="left" primary="Hey, Iam Good! What about you ?"></ListItemText>
                            </Grid>
                           
                        </Grid>
                    </ListItem>
                    <ListItem key="3">
                        <Grid container>
                             <Grid item xs={12}>
                                <ListItemText align="right" secondary="10:30"></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="right" primary="Cool. i am good, let's catch up!"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                </List>       
                <Grid container style={{padding: '20px'}}>
                    <Grid item xs={11}>
                        <TextField sx={{borderRadius:'16px'}} id="outlined-basic-email" label="Type Something" fullWidth />
                    </Grid>
                    <Grid xs={1} align="right">
                        <Fab color="primary" aria-label="add"><SendIcon /></Fab>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
     </div>
  );
}