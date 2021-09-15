import { useState, useEffect } from "react";
<<<<<<< HEAD
import Layout from "./Layout";
import {auth, signInGoogle } from "./services/firebase";
=======
// import Layout from "./Layout";
import Login from "./Login";
//import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {auth} from "./services/firebase";
import Temp from "./Temp";
//import signIn from "./services/auth";
>>>>>>> 6251541c8ba6d1309774bdefefb71800b9853216


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
<<<<<<< HEAD
  const  handleSClick = async () =>{
    await signInGoogle();
    console.log("Sign In");
  }

  // //Handle Sign Out
=======
  // const  handleSClick = async () =>{
  //   await signInGoogle();
  //   console.log("Sign In");
  // }

  //Handle Sign Out
>>>>>>> 6251541c8ba6d1309774bdefefb71800b9853216
  // const handleOClick = async () =>{
  //   await signOutGoogle();
  //   console.log("Sign Out");
  // }

  return (
      //this is B
      <div>
        {user===null?
<<<<<<< HEAD
        <input type="button" onClick={()=>handleSClick()}value="Sign In"/>:
        <Layout />
=======
        <Login/>: <Temp/>
>>>>>>> 6251541c8ba6d1309774bdefefb71800b9853216
        }
      </div>
    
  );
}

export default App;
