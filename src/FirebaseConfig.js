// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyBFgK72X3ritkburobezFLLTL3qgsaFIqo",
  authDomain: "deazy-52098.firebaseapp.com",
  projectId: "deazy-52098",
  storageBucket: "deazy-52098.appspot.com",
  messagingSenderId: "590412954729",
  appId: "1:590412954729:web:2f782c48f4a4cb1bd9b6f8",
  measurementId: "G-EX44LKBCXR",
  databaseURL: "https://deazy-52098-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//Initialize Cloud Firestore
export const db = getFirestore(app);

