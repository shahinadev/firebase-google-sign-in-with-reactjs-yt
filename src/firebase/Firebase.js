import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "Your API KEY",
  authDomain: "Your Doamin",
  projectId: "Your Project ID",
  storageBucket: "Your Info",
  messagingSenderId: "Your ID",
  appId: "Your info"
};

const FirebaseApp = () => {
  initializeApp(firebaseConfig);
};

export default FirebaseApp;
