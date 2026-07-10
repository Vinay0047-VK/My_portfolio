import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGNvc_-rJHDzFAgc__jIdU4eMUup_DrfU",
  authDomain: "vin-portfolio-f13b8.firebaseapp.com",
  projectId: "vin-portfolio-f13b8",
  storageBucket: "vin-portfolio-f13b8.firebasestorage.app",
  messagingSenderId: "456534315273",
  appId: "1:456534315273:web:fe080b5a4ed8e2090243d8",
  measurementId: "G-WDMW2XM6WG"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
