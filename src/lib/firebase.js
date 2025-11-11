// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbmmU5X3DV__f7LwGuwK0QR4agH5NOeQ4",
  authDomain: "clickora-4f3f5.firebaseapp.com",
  projectId: "clickora-4f3f5",
  storageBucket: "clickora-4f3f5.firebasestorage.app",
  messagingSenderId: "113015373289",
  appId: "1:113015373289:web:3b442d13c79302f2c55f78",
  measurementId: "G-RJ0025Z91S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };