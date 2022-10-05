import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAppxTgiWfdHvJvggsrnRY8O1gk7FKX3XA",
  authDomain: "bug-tracker-72316.firebaseapp.com",
  projectId: "bug-tracker-72316",
  storageBucket: "bug-tracker-72316.appspot.com",
  messagingSenderId: "133301778967",
  appId: "1:133301778967:web:af9a40a812201f453cfa52",
  measurementId: "G-QJGG4BYN1Z",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };