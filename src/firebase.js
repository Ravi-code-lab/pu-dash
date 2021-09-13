import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyCtJBhLGTS6h34qFDH0sSBayBmgRPsMb6I",
    authDomain: "pu-das-12a99.firebaseapp.com",
    projectId: "pu-das-12a99",
    storageBucket: "pu-das-12a99.appspot.com",
    messagingSenderId: "203752543125",
    appId: "1:203752543125:web:294e6222e7c99cdf9a9c9c",
    measurementId: "G-0RRS58GP0Y"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;