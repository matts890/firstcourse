import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyASf1K9tWFaEZTXl6eTbKBCmdrSO903jUk",
  authDomain: "fir-91985.firebaseapp.com",
  projectId: "fir-91985",
  storageBucket: "fir-91985.appspot.com",
  messagingSenderId: "108405503842",
  appId: "1:108405503842:web:34e90a52fa2dea31379e3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const googleprovider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);