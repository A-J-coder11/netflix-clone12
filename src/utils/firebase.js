// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJgPv7NvrPM-3V6SbzI9SQFnPrRBtb1x8",
  authDomain: "netflix-clone12-e9c2f.firebaseapp.com",
  projectId: "netflix-clone12-e9c2f",
  storageBucket: "netflix-clone12-e9c2f.appspot.com",
  messagingSenderId: "183855360726",
  appId: "1:183855360726:web:e067e8a393b83796177777",
  measurementId: "G-KRP1FGYMGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();