// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFHPK_N8MPoiUqKWzHems5Fu2GLI8yqiw",
  authDomain: "clone-b16fc.firebaseapp.com",
  projectId: "clone-b16fc",
  storageBucket: "clone-b16fc.firebasestorage.app",
  messagingSenderId: "771957076970",
  appId: "1:771957076970:web:9bf9125014c48814bc7893"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const db = getFirestore(app);
export { db };
