import React from 'react'
import { auth,signOutGoogle } from './services/firebase'

import "./temp.scss"
import Timer from './components/Timer/Timer';
import puicon from './assets/logo/PUicon.svg';
import puiconname from './assets/logo/pu-logo.png';

export default function temp() {

  
  return (
   
    <div className="welcome">
      <div className="">
        <img src={puicon} alt=""></img>
        <img className="logo" src={puiconname} alt=""></img>
      </div>
      <div className="timer">
        <Timer/>
     </div>
      <h1> 
      <img src={auth.currentUser.photoURL} alt="img"/><br/>
      {auth.currentUser.displayName}<br/> Welcome to Poornim Uinversty</h1>
      
      <button onClick={()=>signOutGoogle()}>Sign Out</button>
    </div>
   
  )
}
