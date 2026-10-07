// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLevkSauGZExvbpUBRjvfO9nFXh6-CFgM",
  authDomain: "personnelops-e15d9.firebaseapp.com",
  databaseURL: "https://personnelops-e15d9-default-rtdb.firebaseio.com",
  projectId: "personnelops-e15d9",
  storageBucket: "personnelops-e15d9.firebasestorage.app",
  messagingSenderId: "177573704903",
  appId: "1:177573704903:web:cc6f1ddbb5cecbd4f53ae2",
  measurementId: "G-XPC5DM721Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
