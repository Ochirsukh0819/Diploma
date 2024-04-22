// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs7Cx0O00IqIKDMbPO7BcEs5kwA9MwqUU",
  authDomain: "diplomaadmin-a41c3.firebaseapp.com",
  databaseURL:
    "https://diplomaadmin-a41c3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "diplomaadmin-a41c3",
  storageBucket: "diplomaadmin-a41c3.appspot.com",
  messagingSenderId: "152589528239",
  appId: "1:152589528239:web:e55a5e1ee7c6ebbaa1f85a",
  measurementId: "G-5WPMX9HW2W",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//export const analytics = getAnalytics(app);
