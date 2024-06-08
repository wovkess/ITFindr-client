// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBg2iWal4tK3Y9PmhJGTfEAllvpdzwSRlE",
  authDomain: "forestemedia-90a84.firebaseapp.com",
  projectId: "forestemedia-90a84",
  storageBucket: "forestemedia-90a84.appspot.com",
  messagingSenderId: "46425312899",
  appId: "1:46425312899:web:150663a899e4814e9e55b6",
  measurementId: "G-MMFV8THE3H"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp)
export { firebaseApp, storage };

