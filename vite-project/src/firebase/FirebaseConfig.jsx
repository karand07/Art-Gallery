// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKib2MHSFDa4JXzuH25TA1Eem5xpOevq4",
  authDomain: "myfirstapp-892ee.firebaseapp.com",
  projectId: "myfirstapp-892ee",
  storageBucket: "myfirstapp-892ee.firebasestorage.app",
  messagingSenderId: "175948881433",
  appId: "1:175948881433:web:dfcb5f42bbe6e5d9831488"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}