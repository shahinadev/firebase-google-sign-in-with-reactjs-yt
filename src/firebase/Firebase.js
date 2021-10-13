// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy6iZYJGNoP1eO41B4Gp6UC1iA4O9NB1w",
  authDomain: "react-firebase-53643.firebaseapp.com",
  projectId: "react-firebase-53643",
  storageBucket: "react-firebase-53643.appspot.com",
  messagingSenderId: "836688096171",
  appId: "1:836688096171:web:09fa530f4896d7befd80ee",
};

// Initialize Firebase
const FirebaseApp = () => initializeApp(firebaseConfig);

export default FirebaseApp;
