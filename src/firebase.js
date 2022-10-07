// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD02nK9L_DlVoDV6DOJLuswYyn4j7jre-s",
  authDomain: "upload-image-930f8.firebaseapp.com",
  projectId: "upload-image-930f8",
  storageBucket: "upload-image-930f8.appspot.com",
  messagingSenderId: "40664294255",
  appId: "1:40664294255:web:eeace293fa580f4c79be9a",
  measurementId: "G-LMZX151H6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)
