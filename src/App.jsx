//import Layout from "./Layout";
import Login from "./components/Pages/Login/Login";
import RegisterationForm, { CheckRegistration } from "./components/Pages/Registration/RegisterationForm";
import {useState, useEffect} from 'react'
import {auth} from './services/firebase'
import Temp from "./components/Pages/Coming/Temp";

export default function App() {
  const [user, setUser] = useState(null);//for verifying if user is signeIn or signedOut
  const [registered, setRegistered] = useState(false);//for checking if student is registerd in database or not
  // //for making the user sign in and sign out effect an change the page from signIn or Layout according to authantication
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
  function SubmitCallback(val) {
    setRegistered(val);
    CheckRegistration(user).then((result) => setRegistered(result));
  }
  if (user !== null) {
    CheckRegistration(user).then((result) => setRegistered(result));
  }

  console.log(registered);
  return (
    //for navigating to diffrent page based on registered logged in or not logged in
    user === null ? <Login /> : registered ? <Temp/> : <RegisterationForm submitCallback={(val) => SubmitCallback(val)} />
  );
}


