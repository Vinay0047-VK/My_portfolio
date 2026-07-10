// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

// // TODO: Replace this entire object with your actual Firebase config
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "your-app.firebaseapp.com",
//   projectId: "your-project-id",
//   storageBucket: "your-app.appspot.com",
//   messagingSenderId: "123456789",
//   appId: "1:123456789:web:abcdef123456"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Cloud Firestore and get a reference to the service
// export const db = getFirestore(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGNvc_-rJHDzFAgc__jIdU4eMUup_DrfU",
  authDomain: "vin-portfolio-f13b8.firebaseapp.com",
  projectId: "vin-portfolio-f13b8",
  storageBucket: "vin-portfolio-f13b8.firebasestorage.app",
  messagingSenderId: "456534315273",
  appId: "1:456534315273:web:fe080b5a4ed8e2090243d8",
  measurementId: "G-WDMW2XM6WG"
};

import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);