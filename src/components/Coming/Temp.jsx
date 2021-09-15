import React from 'react'
import { auth,signOutGoogle } from '../../services/firebase'
import "./temp.scss"
import Timer from '../Timer/Timer';
import puicon from '../../assets/logo/PUicon.svg';
import puiconname from '../../assets/logo/pu-logo.png';
import backgr from '../../assets/images/background.jpg'

export default function temp() {

  
  return (
    <>
    <div class="object">
      <div class="object-rope">
       </div>
      <div class="object-shape">
    	   Coming <span class="soon">Soon</span>
      </div>
    </div>
   
    
  <div className="box">
    <div style={{backgroundImage: `url(${backgr})`}} className="welcome">
      <div className="logo">
        <img src={puicon} alt=""></img> 
        <img className="" src={puiconname} alt=""></img>
      </div>
      <div className="timer">
        <Timer/>
     </div>
      <h1> 
      {auth.currentUser.displayName}<br/> Welcome to Poornima University</h1>
      <div class="login-box">
    <button onClick={()=>signOutGoogle()}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      LogOut
    </button>
   </div>
      </div>
    </div>
    </>
  )
}
