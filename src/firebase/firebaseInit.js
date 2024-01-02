// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLSVjYglNwnQZnvbDzeWFDflVlLqCSa2w",
  authDomain: "keihi-54bdb.firebaseapp.com",
  projectId: "keihi-54bdb",
  storageBucket: "keihi-54bdb.appspot.com",
  messagingSenderId: "407545855215",
  appId: "1:407545855215:web:3b04e00fd6e185dbadaf1a",
  measurementId: "G-80LYPQ6C1E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { db, auth };
