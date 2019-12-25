import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAo0XD37skFSEWaUCLPrWdZA-Z16CTF9Z0",
    authDomain: "crown-db-53a4d.firebaseapp.com",
    databaseURL: "https://crown-db-53a4d.firebaseio.com",
    projectId: "crown-db-53a4d",
    storageBucket: "crown-db-53a4d.appspot.com",
    messagingSenderId: "458137066536",
    appId: "1:458137066536:web:c73dc943be23dfa240a91d",
    measurementId: "G-R5FHXFGQ9N"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;