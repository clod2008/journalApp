// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnJJFQxB_TLJsMdxihWWBbQUEH3u9QgV8",
    authDomain: "recat-app-login.firebaseapp.com",
    projectId: "recat-app-login",
    storageBucket: "recat-app-login.appspot.com",
    messagingSenderId: "698282179900",
    appId: "1:698282179900:web:26aef25d3fa6e98aa6b239"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    
    db,
    googleAuthProvider,
    firebase,
}


