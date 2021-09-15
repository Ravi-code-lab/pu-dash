import { initializeApp } from 'firebase/app';
import { getAuth ,GoogleAuthProvider, signInWithPopup, setPersistence,browserLocalPersistence} from 'firebase/auth';
import firebaseConfig from '../config/firebase-config';

const app = initializeApp(firebaseConfig);
<<<<<<< HEAD
const auth = getAuth(app); //Authantication variable contain Authantication related details
=======
const auth = getAuth(); //Authantication variable contain Authantication related details
>>>>>>> 6251541c8ba6d1309774bdefefb71800b9853216
const googleProvider = new GoogleAuthProvider();//provider for google signin


//Function for signin
const signInGoogle = async ()=>{
<<<<<<< HEAD
   
=======
    try{
>>>>>>> 6251541c8ba6d1309774bdefefb71800b9853216
    setPersistence(auth, browserLocalPersistence);
    googleProvider.setCustomParameters({
        'hd': 'poornima.edu.in'
    });
    await signInWithPopup(auth,googleProvider).catch((error)=> alert(error.message));
<<<<<<< HEAD
=======
    }catch(error)
    {
        const mes= error.message;
    }
>>>>>>> 6251541c8ba6d1309774bdefefb71800b9853216
};

//Functior used To sign Out
const signOutGoogle = async ()=>{
    await auth.signOut().catch((error)=>alert(error));
}
<<<<<<< HEAD

export { auth,signInGoogle,signOutGoogle};
=======
export { auth,signInGoogle,signOutGoogle};
export default app;
>>>>>>> 6251541c8ba6d1309774bdefefb71800b9853216
