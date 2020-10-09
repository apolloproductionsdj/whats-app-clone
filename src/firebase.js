import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAut6YcJ72vpdSs9umLunykkRd4UdGBw1E",
    authDomain: "whatsapp-cl-ad119.firebaseapp.com",
    databaseURL: "https://whatsapp-cl-ad119.firebaseio.com",
    projectId: "whatsapp-cl-ad119",
    storageBucket: "whatsapp-cl-ad119.appspot.com",
    messagingSenderId: "163992476142",
    appId: "1:163992476142:web:1e6e991a367393ae57d6ff",
    measurementId: "G-3RFJ2N0LP3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

