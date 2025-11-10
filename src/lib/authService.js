import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "./firebase";

// Sign Up
export const signUp = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

// Login
export const login = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

// Google Login
export const googleLogin = async () => {
  await signInWithPopup(auth, googleProvider);
};

// Logout
export const logout = async () => {
  await signOut(auth);
};
