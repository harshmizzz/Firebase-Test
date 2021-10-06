import React from "react";
import firebase from "firebase";
import { auth } from "./firebase";
function Google() {
  const signInWithGoogle = async () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    await auth
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
      })
      .catch((error) => {
        console.log(error.message);
      });
    auth.onAuthStateChanged((user) => {
      window.alert("User signed in via google");
    });
  };
  return (
    <div>
      <button onClick={signInWithGoogle}>Google</button>
    </div>
  );
}

export default Google;
