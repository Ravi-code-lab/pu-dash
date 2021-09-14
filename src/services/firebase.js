import { initializeApp } from 'firebase/app';
import { getAuth ,GoogleAuthProvider, signInWithPopup, setPersistence,browserLocalPersistence} from 'firebase/auth';
import firebaseConfig from '../config/firebase-config';

const app = initializeApp(firebaseConfig);
const auth = getAuth(); //Authantication variable contain Authantication related details
const googleProvider = new GoogleAuthProvider();//provider for google signin


//Function for signin
const signInGoogle = async ()=>{
    try{
    setPersistence(auth, browserLocalPersistence);
    googleProvider.setCustomParameters({
        'hd': 'poornima.edu.in'
    });
    await signInWithPopup(auth,googleProvider).catch((error)=> alert(error.message));
    }catch(error)
    {
        const mes= error.message;
    }
};

//Functior used To sign Out
const signOutGoogle = async ()=>{
    await auth.signOut().catch((error)=>alert(error));
}
export default app;
export { auth,signInGoogle,signOutGoogle};