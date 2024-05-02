// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ04RUhx5RfhEcSrl85OizB5-_1gzqiEg",
  authDomain: "netflixgpt-d3139.firebaseapp.com",
  projectId: "netflixgpt-d3139",
  storageBucket: "netflixgpt-d3139.appspot.com",
  messagingSenderId: "427197158851",
  appId: "1:427197158851:web:90d17a3775d48af5679976",
  measurementId: "G-74NXJYFJ3H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
