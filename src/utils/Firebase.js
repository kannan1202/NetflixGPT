// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQXTtkvu56ez4Ucdd1ac4GYTHw9EQ_als",
  authDomain: "netflixgpt-ec5df.firebaseapp.com",
  projectId: "netflixgpt-ec5df",
  storageBucket: "netflixgpt-ec5df.appspot.com",
  messagingSenderId: "360745084404",
  appId: "1:360745084404:web:26109406758800135085a1",
  measurementId: "G-894Z2J5K01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();