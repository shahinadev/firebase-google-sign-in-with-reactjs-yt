import React, { useState } from "react";
import "./GoogleSigin.css";
import FirebaseApp from "./../firebase/Firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
FirebaseApp();
const GoogleSigin = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const provder = new GoogleAuthProvider();
  const GoogleSignIn = () => {
    signInWithPopup(auth, provder)
      .then((res) => {
        setUser(res.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <h1>{user.displayName}</h1>
      <p>{user.email}</p>
      <img src={user.photoURL} alt="" />
      <br />
      <button onClick={GoogleSignIn}>Google Sigin</button>
      <h1>&copy; Codenarration. </h1>
      <p>Please Subscribe our Channel to get Latest videos.</p>
    </div>
  );
};

export default GoogleSigin;
