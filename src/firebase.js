// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqTT5J98GTJPkIcz22MkPaFOH1CdK1qxs",
  authDomain: "crud-web2-7dea6.firebaseapp.com",
  projectId: "crud-web2-7dea6",
  storageBucket: "crud-web2-7dea6.appspot.com",
  messagingSenderId: "519425490355",
  appId: "1:519425490355:web:5ce9da752cbf44d31adfc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}