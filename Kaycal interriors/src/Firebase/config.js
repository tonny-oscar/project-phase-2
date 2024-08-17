// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIykwUe6QQecGGDY4rVLTxC_TH9MQv4do",
  authDomain: "kaycalinteriors.firebaseapp.com",
  projectId: "kaycalinteriors",
  storageBucket: "kaycalinteriors.appspot.com",
  messagingSenderId: "908507081648",
  appId: "1:908507081648:web:3b7f591505fbf2df2b0475",
  measurementId: "G-91CGXFEK0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth};