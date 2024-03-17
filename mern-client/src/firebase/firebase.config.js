//file setup env firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAo_zkptc2a7u2pqzOIdA5ESnZMaqEAVsU",
    authDomain: "mern-book-inventory-f8c9b.firebaseapp.com",
    projectId: "mern-book-inventory-f8c9b",
    storageBucket: "mern-book-inventory-f8c9b.appspot.com",
    messagingSenderId: "420827937682",
    appId: "1:420827937682:web:fda1682632a617ca8f5f4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;