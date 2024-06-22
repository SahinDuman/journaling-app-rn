// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCbEbEaCwZ_SyhmAqtLwkm4S5yTR1dZzcg",
	authDomain: "journalingapp---react-native.firebaseapp.com",
	projectId: "journalingapp---react-native",
	storageBucket: "journalingapp---react-native.appspot.com",
	messagingSenderId: "199611758653",
	appId: "1:199611758653:web:74222f9befccadec859254",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { app, db, auth };
