// place files you want to import through the `$lib` alias in this folder.
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";




const firebaseConfig = {
  apiKey: "AIzaSyB7Uxf85kIYzh-AHAEGqsz2FC-1qTNt3-8",
  authDomain: "paramount-beta.firebaseapp.com",
  projectId: "paramount-beta",
  storageBucket: "paramount-beta.appspot.com",
  messagingSenderId: "79483818876",
  appId: "1:79483818876:web:7d317d54ef346cecfd8af9",
  measurementId: "G-66H5VYMKVG"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
