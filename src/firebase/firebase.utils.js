import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBSUVvX3lNKBoWosNcquKxf79kBvDGsbCM",

  authDomain: "crwn-db-72b10.firebaseapp.com",

  projectId: "crwn-db-72b10",

  storageBucket: "crwn-db-72b10.appspot.com",

  messagingSenderId: "782658402916",

  appId: "1:782658402916:web:239fef95fd03c973787d71",

  measurementId: "G-YY0R033TRB",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
