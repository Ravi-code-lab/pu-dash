import { initializeApp } from 'firebase/app';
import { getFirestore,setDoc ,getDoc ,doc} from 'firebase/firestore';
import { getAuth ,GoogleAuthProvider, signInWithPopup, setPersistence,browserLocalPersistence} from 'firebase/auth';
import firebaseConfig from '../config/firebase-config';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); //Authantication variable contain Authantication related details
const db = getFirestore(app);// database access
const googleProvider = new GoogleAuthProvider();//provider for google signin


//Function for signin
const signInGoogle = async ()=>{
    setPersistence(auth, browserLocalPersistence);
    googleProvider.setCustomParameters({
        'hd': 'poornima.edu.in'
    }); 
    await signInWithPopup(auth,googleProvider).catch((error)=> alert(error.message));
    
};

//Functior used To sign Out
const signOutGoogle = async ()=>{
    await auth.signOut().catch((error)=>alert(error));
};

//function for inserting data
const insertFirebaseDocument = async (collection,docId,data) =>
{
    const ref= doc( db, collection, docId);
    return await setDoc(ref, { name: "data"}).catch((erro)=>alert(erro));
};

//function for getting document
const getFirebaseDocument = async (collection,docId) =>{
    const ref= doc( db, collection, docId);
    let documentSnap;
    await getDoc(ref).then((docSnap)=>{documentSnap = docSnap}).catch((error)=>alert(error));
    return documentSnap;
};

export { auth,signInGoogle,signOutGoogle, db, setDoc,doc, insertFirebaseDocument, getFirebaseDocument};
//export default app;
