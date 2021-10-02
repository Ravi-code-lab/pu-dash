import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon  from '@mui/icons-material/School';
import ClassIcon from '@mui/icons-material/Class';
import EventIcon from '@mui/icons-material/Event';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import GroupIcon from '@mui/icons-material/Group';

import { React, useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch,Link
} from "react-router-dom";
import Dashoard from '../Pages/DashboardPages/Dashboard/Dashoard';
import Chats from '../Pages/DashboardPages/Chats/Chats';
import Event from '../Pages/DashboardPages/Event/Event';
import MyClass from '../Pages/DashboardPages/MyClass/MyClass';
import Student from '../Pages/DashboardPages/Student/Student';
import Teachers from '../Pages/DashboardPages/Teachers/Teachers';
import { Avatar } from '@mui/material';
import { auth,signOutGoogle } from '../../services/firebase';
import {Button,ListItemText} from '@mui/material'


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Layout() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const routeName = ['Dashboard', 'My Class', 'Student', 'Teachers', 'Events', 'Chats'];
  const routeLinks = ['/', '/MyClass', '/Student', '/Teachers', '/Events', '/Chats']
  const [activePage, setActivePage] = useState(0)
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function getIconTag(index,active){
    switch(index){
      case 0: return <DashboardIcon/>;
      case 1: return <ClassIcon/>;
      case 2: return <SchoolIcon/>;
      case 3: return <GroupIcon/>;
      case 4: return <EventIcon/>;
      case 5: return <ForumRoundedIcon/>;
      default: return <DashboardIcon/>;
    }
  }


  return (
    <Router>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
       {/* App Bar Stat */}
      <AppBar sx={{background:"white",color:"black"}} position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ flex:1, fontWeight:"bold"}} variant="h6" noWrap component="div">
            {routeName[activePage]}
          </Typography>
          <Avatar src={auth.currentUser.photoURL}/>
          <Button  onClick={()=>{signOutGoogle()}}> Logout</Button>
        </Toolbar>
      </AppBar>
      {/* Sidebar */}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {routeName.map((text, index) => (
            <Link key={index} to={routeLinks[index]}>
            <ListItem button onClick={()=>{setActivePage(index)}}>
              <ListItemIcon>
                {getIconTag(index,activePage)}
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ style:{color:'#000' } }} primary={text}  />
            </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
            <Switch>
              {/* On Clike content Change  */}
              <Route exact path="/">
                <Dashoard />
              </Route>
              {/* On Clike content Change  */}
              <Route exact path="/MyClass">
                <MyClass />
              </Route>
              {/* On Clike content Change  */}
              <Route exact path="/Student">
                <Student />
              </Route>
              {/* On Clike content Change  */}
              <Route exact path="/Teachers">
                <Teachers />
              </Route>
              {/* On Clike content Change  */}
              <Route exact path="/Event">
                <Event />
              </Route>
              {/* On Clike content Change  */}
              <Route exact path="/Chats">
                <Chats />
              </Route>
            </Switch>
      </Box>
    </Box>
    </Router>
  );
}