// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5R9Zl2m2prZ2CsfoSoaGo4yYmir6TBCo",
    authDomain: "rj-ecommerce-1.firebaseapp.com",
    projectId: "rj-ecommerce-1",
    storageBucket: "rj-ecommerce-1.appspot.com",
    messagingSenderId: "705898350103",
    appId: "1:705898350103:web:d609b9f97c8012a186fe52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore ( app )