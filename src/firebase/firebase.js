// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage"
import { getFirestore, addDoc, collection, getDoc, getDocs, query, where, setDoc, deleteDoc, updateDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbBAKhPT9sNTmZBZy6GbT3ajP2q20p5mU",
  authDomain: "elxocas03-6886c.firebaseapp.com",
  projectId: "elxocas03-6886c",
  storageBucket: "elxocas03-6886c.appspot.com",
  messagingSenderId: "434402923773",
  appId: "1:434402923773:web:bf9d6cb3ab0fbf156a1a94",
  measurementId: "G-85RR4RJGRN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth      = getAuth(app);
export const db = getFirestore(app);
const storage   = getStorage(app);