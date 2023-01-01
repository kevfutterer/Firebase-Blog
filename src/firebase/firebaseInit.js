import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyALZBhtbgAXWQArCZywP1dpKGLYasTPEdM",
    authDomain: "fireblogs-f9c59.firebaseapp.com",
    projectId: "fireblogs-f9c59",
    storageBucket: "fireblogs-f9c59.appspot.com",
    messagingSenderId: "1072097784120",
    appId: "1:1072097784120:web:02b863f00ad3f7165351cd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
