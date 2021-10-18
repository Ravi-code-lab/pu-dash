import {React, useState,useEffect} from 'react';


// Use For Styles 

import { makeStyles } from '@mui/styles';
// import {createTheme} from '@mui/material/styles'

// components
import {IconButton,CardHeader,Card,Typography,Avatar,CardActions,CardContent,Box, Pagination} from '@mui/material';


// mui Color
import { red } from '@mui/material/colors';
// Icons
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CallIcon from '@mui/icons-material/Call';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';


import { userData } from "../../Registration/RegisterationForm";
import { db } from '../../../../services/firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
// Use For Styles 


// Search 
import {Search,SearchIconWrapper,StyledInputBase} from '../../../../theme/Styles/Search'



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
   // pages
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };


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
    width:'250px',
    height:'329px',
    margin:'5px',
    borderRadius:'16px',
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
    margin: '-40px auto auto auto',
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

  // styles
  const classes = useStyles();

  return (
    <>
    {/* hader */}

    <Box sx={{display:'flex',width:"100%",borderRadius:'10px',marginBottom:"13px",}} >
      <Search sx={{ border:'1px solid rgb(229, 232, 236)',borderRadius:'16px'}}>
      <SearchIconWrapper>
         <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
          />
      </Search><Typography sx={{flex:'1'}}></Typography>
      <Box sx={{ display:'flex', border:'1px solid rgb(229, 232, 236)',borderRadius:'16px' ,padding:'10px',margin:'auto'}}>
      <FilterAltOutlinedIcon/>
      <Typography variant='body2' sx={{margin:'0px 10px'}}>Filter</Typography>
      <ArrowDropDownOutlinedIcon/>
      </Box>
    </Box>
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
          <Typography gutterBottom variant="h6"  component="div">{currentTechData.name.length<= 15?(currentTechData.name):(currentTechData.name.substring(0,14)+'..')}</Typography>
          <Typography variant="body2" color="text.secondary">
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
          <EmailIcon  className={classes.iconColor} /> 
          </IconButton>
          {user.id}
        </CardActions>
      </Card>
      )
      })}
      </Box>
       {/* footer */}
      <Box sx={{display:"flex", marginTop:"20px"}}>
        <Typography  sx={{flex:1,margin:'auto'}}> Page: {page} </Typography>
        <Pagination size='medium'  count={2}  variant='outlined' shape='rounded'></Pagination>
        
      </Box>

    </>
  );
}
