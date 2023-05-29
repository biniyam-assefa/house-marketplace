// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn2vy4p_jBAxKb5xzR6CTiZvAqZoPRLbY",
  authDomain: "house-marketplace-app-fb254.firebaseapp.com",
  projectId: "house-marketplace-app-fb254",
  storageBucket: "house-marketplace-app-fb254.appspot.com",
  messagingSenderId: "991311094278",
  appId: "1:991311094278:web:c4cf829c8623e64ddf1987",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
