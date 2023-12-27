// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZQk-gq942p9k8wn-rOFXOZ3xCd6qBDG0",
  authDomain: "mesmerizer-2k24.firebaseapp.com",
  projectId: "mesmerizer-2k24",
  storageBucket: "mesmerizer-2k24.appspot.com",
  messagingSenderId: "425397270003",
  appId: "1:425397270003:web:5b5cd43d244a68464b8e86",
  measurementId: "G-ZN43TYKLGZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)