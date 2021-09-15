import React from 'react'
import { signInGoogle } from './services/firebase'

export default function Login() {

  const  handleSClick = async () =>{
    await signInGoogle();
    console.log("Sign In");
  }
  return (
    <div>
      <input type="button" onClick={()=>handleSClick()}value="Sign In"/>
    </div>
  )
}
