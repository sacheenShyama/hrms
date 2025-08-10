// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFireStore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCxgQU3n3tWB3j3U1Rpqp4QngGjv7FA2RQ",
//   authDomain: "hrms-cb82b.firebaseapp.com",
//   projectId: "hrms-cb82b",
//   storageBucket: "hrms-cb82b.firebasestorage.app",
//   messagingSenderId: "18501886771",
//   appId: "1:18501886771:web:a591e0a5bb381225bc1446"
// };

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app)
// export const db = getFireStore(app);
