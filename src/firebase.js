// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuvojfRNrSdFr7Mi2c6rQFmstMnnU5SJw",
  authDomain: "test-002-2e56a.firebaseapp.com",
  projectId: "test-002-2e56a",
  storageBucket: "test-002-2e56a.appspot.com",
  messagingSenderId: "482610463130",
  appId: "1:482610463130:web:0feec292193f5bf28eba23",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
