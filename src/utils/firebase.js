import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8IrLo63wgJVYhKJMlf0t175Qnh_gSFTg",
  authDomain: "interview-question-70a76.firebaseapp.com",
  projectId: "interview-question-70a76",
  storageBucket: "interview-question-70a76.appspot.com",
  messagingSenderId: "653929477715",
  appId: "1:653929477715:web:5af4d79a23ffb74b7a78a6",
  measurementId: "G-6PTMM7ZV27",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
