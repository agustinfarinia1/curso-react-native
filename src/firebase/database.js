import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAFX_D1Dw1IaP_prm5WqzY5bc7JbSP52N8",
    authDomain: "coderhouse-reactnative.firebaseapp.com",
    databaseURL: "https://coderhouse-reactnative-default-rtdb.firebaseio.com",
    projectId: "coderhouse-reactnative",
    storageBucket: "coderhouse-reactnative.appspot.com",
    messagingSenderId: "1056690007578",
    appId: "1:1056690007578:web:371b77b6182522e8e26ba3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
