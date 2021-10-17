import {React, useState,useEffect} from 'react';
import { styled,alpha } from '@mui/system';

// Use For Styles 

import { makeStyles } from '@mui/styles';
// import {createTheme} from '@mui/material/styles'

// components
import {IconButton,CardHeader,Card,Typography,Avatar,CardActions,CardContent,Box,InputBase, Pagination} from '@mui/material';




// mui Color
import { red } from '@mui/material/colors';
// Icons
import SearchIcon from '@mui/icons-material/Search';
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
    // '@media (min-height:360px)':{
    //   width:'130px'
    // },
    "&:hover":{
      border: "solid #fff 2px",
      backgroundColor: "#fff",
      boxShadow:"0 20px 20px rgba(0, 0, 0, 0.2)",
    },
    '@media only screen and (max-width: 600px)': {
      width: '223px'
    },
    '@media only screen and (max-width: 1370px)': {
      width: '230px'
    },
    
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
  },
 
}));


//search
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
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
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


export default function Student() {

  const [studentData, setstudentData] = useState([]);

  let currentStudentData;


  //for getting teacher data currently
  useEffect(() => {
    const fetchData = async () => {
      const studentCollection = collection(db, "students");
      let data = [];
      await getDocs(query(studentCollection, where('course','==', userData.course),)).then(
        (result) => {
          result.forEach(doc => {
            data.push(doc);
          })
        }
      )
      setstudentData(data);
    }
    fetchData();
    return;
  }, []);

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };


  const classes = useStyles();
  
  return (
    <>
    <Box sx={{display:'flex',width:"100%",borderRadius:'10px',padding:"13px",}} >
    <Typography sx={{flex:'1'}}></Typography>
      <Typography> hello</Typography>
      <Search sx={{ border:'1px solid rgb(229, 232, 236)',borderRadius:'10px'}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
      </Search>
    </Box>
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
     src={currentStudentData.profileImage}
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
   <Box sx={{display:"flex",border:'1px solid rgb(229, 232, 236)',borderRadius:'10px', padding:"10px"}}>
    <Typography sx={{flex:1}}> Page: {page} </Typography>
   </Box>
    </>
  );
}