// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZPqI4MmboelDSaEUVKsMVuNpSUd8JBao",
  authDomain: "reactlogin-7fce1.firebaseapp.com",
  projectId: "reactlogin-7fce1",
  storageBucket: "reactlogin-7fce1.appspot.com",
  messagingSenderId: "779391858300",
  appId: "1:779391858300:web:89a94ab6554a23241d3bf9"
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);