// import firebase from 'firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyBBQE1NfONX02B4GQkCSsovlN34zGMrGgg",
  authDomain: "netflix-clone-5db37.firebaseapp.com",
  projectId: "netflix-clone-5db37",
  storageBucket: "netflix-clone-5db37.appspot.com",
  messagingSenderId: "553026239043",
  appId: "1:553026239043:web:908c2cb5fbf3eb8ce6b2f6"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export {auth};
export default db;