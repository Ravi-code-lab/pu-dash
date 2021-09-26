import { doc, getDoc } from '@firebase/firestore';
import {React} from 'react'
import { db, auth, insertFirebaseDocument } from '../../../services/firebase'
export const CheckRegistration = async (user)=> {
    let register = false;
    let docId = user.email.split('@');
    docId.pop();
    docId = docId.join();
    //const querySnap = getFirebaseDocument("students", docId);
    //console.log(docId);
    const ref = doc(db, "students", docId);
    await getDoc(ref).then((docSnap) => { if (docSnap.exists()) { register=true } else { register=false } }).catch((error) => alert(error))
    console.log(register);
    return register;
}

 
export default function RegisterationForm({submitCallback}) {
    function SubmitForm(e) {
        const form = document.querySelector("#reg-form");
        e.preventDefault();
        let docId=auth.currentUser.email.split('@');
        docId.pop();
        docId = docId.join();
        console.log(docId);
        const receivedData= insertFirebaseDocument("students",docId,{name:form.name.value});
        console.log(receivedData);
        receivedData.then((result)=>{ submitCallback(true)});
    }
    return (
        <div>
            <form id="reg-form" action="POST" onSubmit={(e) => SubmitForm(e)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter your Name" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
