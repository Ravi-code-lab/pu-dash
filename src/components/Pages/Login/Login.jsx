// import userEvent from '@testing-library/user-event';
import {React} from 'react'
import {signInGoogle } from '../../../services/firebase';
import { puicon, puiconname } from '../../Import';
import './Login.scss'
export default function Login() {
   //for signIn or login
  async function logIn(){
    await signInGoogle();
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
