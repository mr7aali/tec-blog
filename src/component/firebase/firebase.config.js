// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhExgCaaRAVYSVjFhXuDLumcnuQGPL4mg",
  authDomain: "clint-auth-system.firebaseapp.com",
  projectId: "clint-auth-system",
  storageBucket: "clint-auth-system.appspot.com",
  messagingSenderId: "700807259562",
  appId: "1:700807259562:web:47429bc98d61ec313b37d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;