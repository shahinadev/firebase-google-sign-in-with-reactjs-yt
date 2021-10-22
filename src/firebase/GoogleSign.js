import React, { useState } from "react";
import FirebaseApp from "./Firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
FirebaseApp();
const GoogleSign = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleGoogleSign = () => {
    signInWithPopup(auth, provider).then((res) => {
      setUser(res.user);
    });
  };
  return (
    <div>
      <button onClick={handleGoogleSign}>Google Sign In</button>
      <img src={user.photoURL} alt="" />
      <h1>{user.displayName}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default GoogleSign;
