import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCF8cR-4Gl454z_qBDZueOR6tEo8G7-eb8",
    authDomain: "lamrdaf.firebaseapp.com",
    projectId: "lamrdaf",
    storageBucket: "lamrdaf.appspot.com",
    messagingSenderId: "80565002470",
    appId: "1:80565002470:web:4c869b8aa02e4492cf9b27"
  });

  const storage = firebase.storage();

  export {storage, app as default};