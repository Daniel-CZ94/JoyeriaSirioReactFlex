// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKxVdF6DaTvG3g9YslqZ13fYo8HqWfnck",
  authDomain: "joyassiriocoderhousereact.firebaseapp.com",
  projectId: "joyassiriocoderhousereact",
  storageBucket: "joyassiriocoderhousereact.firebasestorage.app",
  messagingSenderId: "284397499991",
  appId: "1:284397499991:web:ed340a4a7fc681aa399512"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)