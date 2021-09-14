import { useState, useEffect } from "react";
import Layout from "./Layout";
//import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {auth, signInGoogle, signOutGoogle} from "./services/firebase";
//import signIn from "./services/auth";


function App() {
  const [user, setUser] = useState(null);//for verifying if user is signeIn or signedOut

  //for making the user sign in and sign out effect an change the page from signIn or Layout according to authantication
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      }
      if (userAuth) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return unsubscribe
  }, [])


  //Handle Sign In
  const  handleSClick = async () =>{
    await signInGoogle();
    console.log("Sign In");
  }

  //Handle Sign Out
  const handleOClick = async () =>{
    await signOutGoogle();
    console.log("Sign Out");
  }

  return (
      //this is B
      <div>
        {user===null?
        <input type="button" onClick={()=>handleSClick()}value="Sign In"/>:
        <Layout />
        }
      </div>
    
  );
}

export default App;
