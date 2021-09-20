import React from 'react'
import {signInGoogle } from '../../../services/firebase';
import { puicon, puiconname } from '../../Import';
import './Login.scss'
export default function Login() {
  return (
  <div class="login-box login-style">
    <div className="logo">
        <img src={puicon} alt=""></img> 
        <img className="" src={puiconname} alt=""></img>
    </div>
    <button onClick={()=>signInGoogle()}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Login
    </button>
</div>
  )
}
