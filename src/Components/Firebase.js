// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFq5wG_6tlCfIBE-iKhwqHmQ9jdu6TlIE",
  authDomain: "react-assignment-df071.firebaseapp.com",
  projectId: "react-assignment-df071",
  storageBucket: "react-assignment-df071.appspot.com", 
  messagingSenderId: "572917535649",
  appId: "1:572917535649:web:9b59a7d12ecf7f01ccb1e0",
  measurementId: "G-1QCEX9QVNH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
