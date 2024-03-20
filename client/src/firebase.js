// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-54a96.firebaseapp.com",
  projectId: "mern-blog-54a96",
  storageBucket: "mern-blog-54a96.appspot.com",
  messagingSenderId: "842276454175",
  appId: "1:842276454175:web:4b6f640dc298acbcdaba2a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
