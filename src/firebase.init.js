// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlu7Eyk58fPCYLYqx1fTfIwqZmQhs2A44",
  authDomain: "dashboard-e9f22.firebaseapp.com",
  projectId: "dashboard-e9f22",
  storageBucket: "dashboard-e9f22.appspot.com",
  messagingSenderId: "42426634655",
  appId: "1:42426634655:web:7e37b30602d0c20e08edaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;