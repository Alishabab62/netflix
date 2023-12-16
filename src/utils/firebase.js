// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAl-n6SBfUqKfw-tjsW0tfzeaMUJ4YBwuU",
  authDomain: "netflix-43224.firebaseapp.com",
  projectId: "netflix-43224",
  storageBucket: "netflix-43224.appspot.com",
  messagingSenderId: "1021235095339",
  appId: "1:1021235095339:web:9f9126c76dd6d03e7ac76e",
  measurementId: "G-KP8VJ7PXS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);


export const auth = getAuth();