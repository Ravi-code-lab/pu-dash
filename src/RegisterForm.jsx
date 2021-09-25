import {React, useState} from 'react'
import { Redirect } from 'react-router';
import  { auth, insertFirebaseDocument } from "./services/firebase";
export default function RegisterForm({urlhistory}) {
    const [formFilled, setformFilled] = useState(false)
    //for the submition of the form
    async function submitForm(e){
        //const regform= document.querySelector("#reg-form");
        e.preventDefault();
        let docId=auth.currentUser.email.split('@');
        docId.pop();
        docId = docId.join();
        console.log(docId);
        const receivedData= insertFirebaseDocument("students",docId,{name:"kuldeep"});
        console.log(receivedData);
        receivedData.then((result)=>{ setformFilled(true)});
    }
    if(formFilled)
    {
        return <Redirect to="/Dashboard"/>
    }
    return (
        <div>
            <form action="POST" id="reg-form" onSubmit={(e)=>submitForm(e)}>
                <label htmlFor="name"></label>
                <input type="text" name="name" id="name" placeholder="Enter your name" />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}