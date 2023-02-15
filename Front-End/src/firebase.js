// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhTKOaZAcs-gY_bdJQ2PYYZJkZqrsskoM",
  authDomain: "ecommerce-bf89e.firebaseapp.com",
  projectId: "ecommerce-bf89e",
  storageBucket: "ecommerce-bf89e.appspot.com",
  messagingSenderId: "625808399258",
  appId: "1:625808399258:web:3de79bfd857ad95e187823",
  measurementId: "G-YXQL7K0RN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;