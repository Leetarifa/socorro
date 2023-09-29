// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPhwB9S5rxN6mbD1vvdpIxgWR7Rm0p38Y",
    authDomain: "projeto-aula-7ee8c.firebaseapp.com",
    projectId: "projeto-aula-7ee8c",
    storageBucket: "projeto-aula-7ee8c.appspot.com",
    messagingSenderId: "375097475424",
    appId: "1:375097475424:web:7974324246942fb52ede05",
    measurementId: "G-RJQ8GW7L88"
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);

db.collection()

