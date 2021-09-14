import { useState, useEffect } from "react";
import Layout from "./Layout";
//import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {auth, signInGoogle, signOutGoogle} from "./services/firebase";
//import signIn from "./services/auth";


function App() {
  const [notSignedIn, setnotSignedIn] = useState(true);
  const [user, setUser] = useState(null);

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

  //for checking and setting the notSignedIn State
  
  console.log(user);
  //Handle Sign In
  const  handleSClick = async () =>{
    await signInGoogle();
    console.log("Sign In");
    
    console.log(notSignedIn);
  }

  //Handle Sign Out
  const handleOClick = async () =>{
    await signOutGoogle();
    console.log("Sign Out");
  }

  //checkSigned();
  return (
      <div>
        {user===null?
        <input type="button" onClick={()=>handleSClick()}value="Sign In"/>:
        <Layout />
        }
      </div>
    
  );
}

export default App;
