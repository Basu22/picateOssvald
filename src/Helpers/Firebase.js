// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATiVVLHoE8ZEMVuh-sZ899A7gyVqjToFM",
  authDomain: "picate-esta.firebaseapp.com",
  projectId: "picate-esta",
  storageBucket: "picate-esta.appspot.com",
  messagingSenderId: "680100822041",
  appId: "1:680100822041:web:181ad576287211439c3e88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)