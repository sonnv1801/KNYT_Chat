import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD64Y5iYSU9YdkkEw6Sja3WhxEgnDeZkpk",
  authDomain: "chatbox-810de.firebaseapp.com",
  projectId: "chatbox-810de",
  storageBucket: "chatbox-810de.appspot.com",
  messagingSenderId: "168274297840",
  appId: "1:168274297840:web:cd9f3f6027bd20930f5335",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
