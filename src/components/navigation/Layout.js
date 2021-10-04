import { React, useState,useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch,Link} from "react-router-dom";

import { styled,alpha,
   useTheme } from '@mui/material/styles';

   
// components
import {Box,Toolbar,List,CssBaseline,Typography,Divider,IconButton,ListItem,ListItemIcon,LinearProgress,Avatar,ListItemText,Stack,Badge,Menu,MenuItem,Tooltip,InputBase, Card } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';


// icons

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon  from '@mui/icons-material/School';
import ClassIcon from '@mui/icons-material/Class';
import EventIcon from '@mui/icons-material/Event';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import GroupIcon from '@mui/icons-material/Group';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import MailIcon from '@mui/icons-material/Mail';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



// Pages
import Dashoard from '../Pages/DashboardPages/Dashboard/Dashoard';
import Chats from '../Pages/DashboardPages/Chats/Chats';
import Event from '../Pages/DashboardPages/Event/Event';
import MyClass from '../Pages/DashboardPages/MyClass/MyClass';
import Student from '../Pages/DashboardPages/Student/Student';
import Teachers from '../Pages/DashboardPages/Teachers/Teachers';



// Firebase
import { auth,signOutGoogle } from '../../services/firebase';

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


///  Search

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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const opan = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (    
    <>
    <Router>
    {loading === false ? (
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
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />

          </Search>

           <Stack spacing={3} direction="row">

           <IconButton>
              <Badge badgeContent={4}  color="secondary">
                <NotificationImportantIcon color="action"/>
              </Badge>
              </IconButton>
              <IconButton>
              <Badge badgeContent={4} color="success">
                <MailIcon color="action" />
              </Badge>
              </IconButton>
          </Stack>
           <Tooltip  title="Account settings">
          <Card sx={{display:'flex', borderRadius:'10px'}}>
          <IconButton  size="small">
            <Avatar src={auth.currentUser.photoURL} ></Avatar>
          </IconButton>
          <Typography  sx={{m:'auto',}}>{
           auth.currentUser.displayName.length<=4?
           (auth.currentUser.displayName):(
            auth.currentUser.displayName.substring(0,4)+'..')
         } </Typography>
          <IconButton><ArrowDropDownIcon onClick={handleClick} /></IconButton>
          
          </Card>
        </Tooltip>

        <Menu
        anchorEl={anchorEl}
        open={opan}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
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
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={()=>{signOutGoogle()}}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

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
    </Box>) : (
      <LinearProgress/>
   )}
    </Router>
    </>
  );
}