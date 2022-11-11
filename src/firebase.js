import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-guX1rJVEfwbXxb7JteeLqnLwFvN_KgQ",
  authDomain: "react-authentication-7bd3e.firebaseapp.com",
  projectId: "react-authentication-7bd3e",
  storageBucket: "react-authentication-7bd3e.appspot.com",
  messagingSenderId: "186151858368",
  appId: "1:186151858368:web:790de5f9215a4e7c1afd25",
  measurementId: "G-K6MW3JT1WB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
