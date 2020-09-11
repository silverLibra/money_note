import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLwOpH5VcTHxMvViFpd3Jdukx9FJCoqrE",
  authDomain: "silvermoney-c0a9b.firebaseapp.com",
  databaseURL: "https://silvermoney-c0a9b.firebaseio.com",
  projectId: "silvermoney-c0a9b",
  storageBucket: "silvermoney-c0a9b.appspot.com",
  messagingSenderId: "893386586316",
  appId: "1:893386586316:web:5dd91e591a6cf426fc2a69",
  measurementId: "G-VCXVRB3QEL"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase