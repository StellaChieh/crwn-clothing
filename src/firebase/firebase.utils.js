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

export const creteUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // return a reference to the doc (not the doc itself)
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // return the doc object
  const snapShot = await userRef.get();

  if (!snapShot.exists) { // the user is not in the DB
    const { displayName, email } = userAuth; // the google API gives us diplayName and eamil key
    const createdAt = new Date();
    try {
      // create a doc and save in DB
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (err) {
      console.error("error creating user ", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
