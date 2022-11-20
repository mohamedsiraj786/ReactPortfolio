
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
 
    apiKey: "AIzaSyC7hT9GLTy6isqDwgpMcAgBZIysUqL3Jg8",
    authDomain: "react-portfolio-dashboar-3e4ca.firebaseapp.com",
    projectId: "react-portfolio-dashboar-3e4ca",
    storageBucket: "react-portfolio-dashboar-3e4ca.appspot.com",
    messagingSenderId: "449430075978",
    appId: "1:449430075978:web:f9cfd7ed8050a961ff44b3",
    measurementId: "G-RFSZ1729KH"
  };



const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);