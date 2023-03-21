// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3iiQH7B93UeI-QaIxUZHPK9lto4lg8YA",
  authDomain: "calculadorapromedios.firebaseapp.com",
  projectId: "calculadorapromedios",
  storageBucket: "calculadorapromedios.appspot.com",
  messagingSenderId: "317075659482",
  appId: "1:317075659482:web:780438fe90588dc4e9e3e3"
};


const app=initializeApp(firebaseConfig);

const db=getFirestore(app)
export default db
