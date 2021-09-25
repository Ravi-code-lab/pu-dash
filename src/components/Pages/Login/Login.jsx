// import userEvent from '@testing-library/user-event';
import {React, useState} from 'react'
import { Redirect } from 'react-router-dom';
import {signInGoogle } from '../../../services/firebase';
import { puicon, puiconname } from '../../Import';
import './Login.scss'
export default function Login() {
  const [loggedIn, setloggedIn] = useState(false)
  console.log('test');
  //for signIn or login
  async function logIn(){
    await signInGoogle().then((result)=>{setloggedIn(true)});
  }

  if(loggedIn){
    return <Redirect to="/Dashboard"/>
  }
  return (
  <div className="login-box login-style">
    <div className="logo">
        <img src={puicon} alt=""></img> 
        <img className="" src={puiconname} alt=""></img>
    </div>
    <button onClick={()=>logIn()}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Login
    </button>
  </div>
  )
}
