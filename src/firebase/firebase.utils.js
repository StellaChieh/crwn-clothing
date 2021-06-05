import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCQWzym3yEF-lJGKZysEFYrRTFkV5hTI-k",
  authDomain: "crwn-db-53dda.firebaseapp.com",
  projectId: "crwn-db-53dda",
  storageBucket: "crwn-db-53dda.appspot.com",
  messagingSenderId: "298857821450",
  appId: "1:298857821450:web:309b73c80bb588051136f3",
  measurementId: "G-RX56J9LGPB",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;