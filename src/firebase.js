import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBXRYCoVwPsFXz7TcDZqcvMrdDL2E4-p8I",
    authDomain: "whatsapp-clone-e350d.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-e350d.firebaseio.com",
    projectId: "whatsapp-clone-e350d",
    storageBucket: "whatsapp-clone-e350d.appspot.com",
    messagingSenderId: "678489425327",
    appId: "1:678489425327:web:1d625d65266b089d821b5a",
    measurementId: "G-V8QDSLEYY2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;