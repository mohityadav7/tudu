import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    // Initialize Firebase
    apiKey: "AIzaSyA85LDlrSLQMifGz5PtFNmRXDjcD7mT9iQ",
    authDomain: "tudu1-db361.firebaseapp.com",
    databaseURL: "https://tudu1-db361.firebaseio.com",
    projectId: "tudu1-db361",
    storageBucket: "",
    messagingSenderId: "309952128205"
};

firebase.initializeApp(config);

export default firebase;