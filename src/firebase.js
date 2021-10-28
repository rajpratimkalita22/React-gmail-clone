// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3JlrhFQHoxPsmnxENPwhz5n4Dk47E8sI",
  authDomain: "clone-17fa2.firebaseapp.com",
  projectId: "clone-17fa2",
  storageBucket: "clone-17fa2.appspot.com",
  messagingSenderId: "300048689073",
  appId: "1:300048689073:web:f0c596939313c2399e7f90",
  measurementId: "G-916FJ65F21"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();


export { db, auth, provider };