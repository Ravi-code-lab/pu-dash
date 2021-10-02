// import Layout from "./Layout";
import Layout from "./components/navigation/Layout";
//import Temp from './components/Pages/Coming/Temp';
import Login from "./components/Pages/Login/Login";
import RegisterationForm, { CheckRegistration } from "./components/Pages/Registration/RegisterationForm";
import {useState, useEffect} from 'react'
import {auth} from './services/firebase'
// import { Skeleton } from '@mui/material';

export default function App() {
  const [user, setUser] = useState(auth.currentUser);//for verifying if user is signeIn or signedOut
  //'std' - student 'stdn' student not register 'staff' staff 'staffn' staff not registerd
  const [registered, setRegistered] = useState('stdn');//for checking if student is registerd in database or not
  //for loading delay
  //for making the user sign in and sign out effect an change the page from signIn or Layout according to authantication
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      // const userData= {email: userAuth.email, name:userAuth.displayName};
      if (userAuth === null) {
        setUser(null)
      }
      else {
        setUser(userAuth);
      }
    })
    return unsubscribe
  }, []);

  //for passing collback to registration form
  function SubmitCallback(val) {
    setRegistered(val);
    CheckRegistration(user).then((result) => setRegistered(result));
  }

  //for checking if user is registerd or not
  if (user !== null) {
    CheckRegistration(user).then((result) => setRegistered(result));
  }


  function GetPage(){
    return user === null ? <Login /> : registered === 'std' ? <Layout/> : registered === 'stdn'?<RegisterationForm submitCallback={(val) => SubmitCallback(val)} />:registered==='tch'?<Layout/>:<Layout/>;
  }
  // console.log(registered);
  return (
    //for navigating to diffrent page based on registered logged in or not logged in
    GetPage()
  );
}


