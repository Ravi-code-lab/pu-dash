import React from 'react'
import {signInGoogle } from './services/firebase';
import puicon from './assets/logo/PUicon.svg';
import puiconname from './assets/logo/pu-logo.png';
import './Login.scss'


export default function Login() {
  
  return (
  <div class="login-box">
    <div className="logo">
        <img src={puicon} alt=""></img> 
        <img className="" src={puiconname} alt=""></img>
    </div>
  <form>
    <a href="#!" onClick={()=>signInGoogle()}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Login
    </a>
  </form>
</div>
  )
}
