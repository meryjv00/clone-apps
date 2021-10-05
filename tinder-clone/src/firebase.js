import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAo57wKS8Yfg1VOdWta7zDATVBtVJ5smgc",
    authDomain: "tinder-clone-a7904.firebaseapp.com",
    projectId: "tinder-clone-a7904",
    storageBucket: "tinder-clone-a7904.appspot.com",
    messagingSenderId: "1028384877377",
    appId: "1:1028384877377:web:5c3b5e8e714b704ce08fc0",
    measurementId: "G-3GZPFFG6V4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
export default database;