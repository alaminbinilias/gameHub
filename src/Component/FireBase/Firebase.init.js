// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByX1l-M3xXjTZtRnHdMk47_YTetqBFN2c",
  authDomain: "gamehub-347c5.firebaseapp.com",
  projectId: "gamehub-347c5",
  storageBucket: "gamehub-347c5.firebasestorage.app",
  messagingSenderId: "583152764687",
  appId: "1:583152764687:web:20c6bcc1b1d64c66b1e07a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const auth=getAuth(app);


export default auth;