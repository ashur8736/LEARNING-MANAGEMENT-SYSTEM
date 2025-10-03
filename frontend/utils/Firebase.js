import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "loginvirtualcourses-a435e.firebaseapp.com",
  projectId: "loginvirtualcourses-a435e",
  storageBucket: "loginvirtualcourses-a435e.firebasestorage.app",
  messagingSenderId: "477960572061",
  appId: "1:477960572061:web:9f6ce7078a0762ce619874"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}