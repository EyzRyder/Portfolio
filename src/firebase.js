
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyA0MB1u5yZgP0poxlBFmzX-tA53JHZ12mQ",
  authDomain: "portfolio-dashbord.firebaseapp.com",
  projectId: "portfolio-dashbord",
  storageBucket: "portfolio-dashbord.appspot.com",
  messagingSenderId: "324589921124",
  appId: "1:324589921124:web:addaa4fe0b423924785071"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);