import { React, useState,useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch,Link} from "react-router-dom";

import { styled,alpha} from '@mui/material/styles';

   
// components
import {Box,Toolbar,List,CssBaseline,Typography,Divider,IconButton,ListItem,ListItemIcon,LinearProgress,ListItemAvatar,Avatar,ListItemText,Stack,Badge,Menu,MenuItem,Tooltip,InputBase} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';


// icons

import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon  from '@mui/icons-material/School';
import ClassIcon from '@mui/icons-material/Class';
import EventIcon from '@mui/icons-material/Event';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import GroupIcon from '@mui/icons-material/Group';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
//import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Logo
import { pulogo } from '../Import';

// Pages
import Dashoard from '../Pages/DashboardPages/Dashboard/Dashoard';
import Chats from '../Pages/DashboardPages/Chats/Chats';
import Event from '../Pages/DashboardPages/Event/Event';
import MyClass from '../Pages/DashboardPages/MyClass/MyClass';
import Student from '../Pages/DashboardPages/Student/Student';
import Teachers from '../Pages/DashboardPages/Teachers/Teachers';
//import TodoPage from '../Pages/DashboardPages/TaskPage/TaskPage'



// Firebase
import { auth,signOutGoogle } from '../../services/firebase';
import { LockOpen, Mail, Task } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';


// Styles

//const bottomborder="1px solid rgb(229, 232, 236)";
const drawerWidth = 200;
const smallDrawer = 56;
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
  width: `calc(${theme.spacing(9)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
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
      width: `calc(100% - ${smallDrawer}px)`,

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
    textDecoration:'none',
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

/// styles & Define Search

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

// Styles
const useStyle = makeStyles((theme) => ({
  Hover:{
    "&:hover":{
      border: "solid #fff 2px",
      backgroundColor: "#fff",
      boxShadow:"0 20px 20px rgba(0, 0, 0, 0.2)",
    }
  }
}));



export default function Layout() {
  //const theme = useTheme();
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const routeName = ['Dashboard', 'My Class', 'Student', 'Teachers', 'Events', 'Chats' ];
  const routeLinks = ['/', '/MyClass', '/Student', '/Teachers', '/Events', '/Chats' ]
  const [activePage, setActivePage] = useState(0)
  const handleDrawerOpen = () => {
    setOpen(!open);
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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const opan = Boolean(anchorEl);
  const profileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const profileClose = () => {
    setAnchorEl(null);
  };

  const [anchorE, setAnchorE] = useState(null);
  const mOpen = Boolean(anchorE);

  const messageClick = (event) => {
    setAnchorE(event.currentTarget);
  };
  const messageClose = () => {
    setAnchorE(null);
  };
 
  
  return (    
    <>
    <Router>
    {loading === false ? (
    <Box sx={{ display: 'flex' }}>

      <CssBaseline />

       {/* App Bar Stat */}

      <AppBar  sx={{background:"white",boxShadow:'0 0 2px 0 rgb(145 158 171 / 24%), 0 16px 32px -4px rgb(145 158 171 / 24%)',color:"black",border:"1px solid rgb(229, 232, 236)"}} position="fixed"   open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              border:'1px solid rgb(229, 232, 236)', borderRadius:'10px'
            }}
            className={classes.Hover}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ flex:1, fontWeight:"bold"}} variant="h6" noWrap component="div">
            {routeName[activePage]}
          </Typography>
          
          <Search className={classes.Hover} sx={{ border:'1px solid rgb(229, 232, 236)',borderRadius:'10px'}}>
            <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Tooltip className={classes.Hover} onClick={messageClick} title="Message">
           <Stack spacing={2} direction="row"sx={{margin:'0px 10px',border:'1px solid rgb(229, 232, 236)', borderRadius:'10px'}}>
              <IconButton >
              <Badge badgeContent={3} color="error">
                <NotificationsIcon  />
                
              </Badge>
              </IconButton>
          </Stack>
          </Tooltip>
           <Tooltip className={classes.Hover}  onClick={profileClick}  title="Account settings">
          <Box  sx={{borderRadius:'10px', border:'1px solid rgb(229, 232, 236)'}}>
          <IconButton size='small'>
            <Avatar sx={{width:'30px',height:'30px'}}   src={auth.currentUser.photoURL} ></Avatar>
          </IconButton>
          </Box>
        
        </Tooltip>

        <Menu
        anchorEl={anchorE}
        open={mOpen}
        onClose={messageClose}
        onClick={messageClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            width:330,
            borderRadius:1,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
       <List sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body3"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your nis…"}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body6"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wuld com"}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body6"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wuld com"}
            </>
          }
        />
      </ListItem>
    </List>
      </Menu>

      {/* //Profile menu */}
        <Menu
        anchorEl={anchorEl}
        open={opan}
        onClose={profileClose}
        onClick={profileClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            width:200,
            borderRadius:2,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
            My Profile
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Mail></Mail>
          </ListItemIcon>
           My Messages
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
          <Task/>
          </ListItemIcon>
          My Tasks
        </MenuItem>
        <Divider/>
        <MenuItem>
          <ListItemIcon>
            <Settings  />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            
            <LockOpen/>
          </ListItemIcon>
          Lock Screen
        </MenuItem>
        <Divider/>
        <MenuItem onClick={()=>{signOutGoogle()}}>
          <ListItemIcon>
            <Logout  />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer  sx={{borderRight:'none',boxShadow:'0 0 2px 0 rgb(145 158 171 / 24%), 0 16px 32px -4px rgb(145 158 171 / 24%)'}} variant="permanent" open={open}>
        <DrawerHeader sx={{justifyContent:'flex-start',padding:0}}>
          <img  alt="logo"src={pulogo}/>
        </DrawerHeader>
        <Divider />
        
        <List>
          {routeName.map((text, index) => (
            <Link style={{textDecoration:'none'}} key={index} to={routeLinks[index]}>
            <ListItem className={classes.Hover}  sx={{height:'46px',color:'#637381',fontSize:'0.975rem',lineHeight:'1.6px'}} button onClick={()=>{setActivePage(index)}}>
              <ListItemIcon>
                {getIconTag(index,activePage)}
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ style:{ fontWeight:'400' } }} primary={text}  />
            </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{  flexGrow: 1, p: 3 }}>
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
    </Box>) : (
      <LinearProgress/>
   )}
    </Router>
    </>
  );
}