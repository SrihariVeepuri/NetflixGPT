// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJwow3GvVlPUS67Ulzdpbw7_FQFJtVRzg",
  authDomain: "netflixgpt-4574c.firebaseapp.com",
  projectId: "netflixgpt-4574c",
  storageBucket: "netflixgpt-4574c.appspot.com",
  messagingSenderId: "1011753951821",
  appId: "1:1011753951821:web:303632373047f7a3073204",
  measurementId: "G-8P2DB4RWJY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
