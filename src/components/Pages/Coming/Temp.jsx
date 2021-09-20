import React from 'react'
import { auth,signOutGoogle } from '../../services/firebase'
import "./temp.scss"
import {puicon,puiconname,backgr,Timer} from '../Import'
import "../../global.scss"

export default function temp() {
  return (
    <>
    <div class="object">
      <div class="object-rope">
       </div>
      <div class="object-shape ">
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
      <h1 className="f-size-73"> {auth.currentUser.displayName}<br/> Welcome to Poornima University</h1>
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