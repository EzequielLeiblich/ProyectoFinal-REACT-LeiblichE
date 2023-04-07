import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDFvVORD8mAu5t5h6p_tvna5lPuCpeo1xc",
    authDomain: "proyecto-final-react-8e62c.firebaseapp.com",
    projectId: "proyecto-final-react-8e62c",
    storageBucket: "proyecto-final-react-8e62c.appspot.com",
    messagingSenderId: "13977865093",
    appId: "1:13977865093:web:476464b155b632fba212ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firestore
export const db = getFirestore(app)