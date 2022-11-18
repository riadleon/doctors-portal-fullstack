// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOybafeu2XGF_3s3ZpvJLgdzmIzjqMko4",
    authDomain: "doctors-portal-8295a.firebaseapp.com",
    projectId: "doctors-portal-8295a",
    storageBucket: "doctors-portal-8295a.appspot.com",
    messagingSenderId: "1031688544938",
    appId: "1:1031688544938:web:bef68e0e0ceb60072f26d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;