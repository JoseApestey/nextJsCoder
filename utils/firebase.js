import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByXNJMKZHnfao-do9tyLkiuHGHgxp_y98",
  authDomain: "ecommerce-coderhouse-next.firebaseapp.com",
  projectId: "ecommerce-coderhouse-next",
  storageBucket: "ecommerce-coderhouse-next.appspot.com",
  messagingSenderId: "723685673349",
  appId: "1:723685673349:web:80147544a8e474ef631cec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();