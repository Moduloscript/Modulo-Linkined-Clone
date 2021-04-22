import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyD6HdHQd44TAkIoYy2qbJWA1n0mskrpWTA",
    authDomain: "modulo-link-clone.firebaseapp.com",
    projectId: "modulo-link-clone",
    storageBucket: "modulo-link-clone.appspot.com",
    messagingSenderId: "821145194910",
    appId: "1:821145194910:web:6bf552d0954a17a37d068f"
};
  

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };
