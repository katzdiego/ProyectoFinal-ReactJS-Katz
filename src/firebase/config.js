import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcBJXe0ZUYd4Huc905XhTlsdTrmkIcPRE",
  authDomain: "tech-now24.firebaseapp.com",
  projectId: "tech-now24",
  storageBucket: "tech-now24.appspot.com",
  messagingSenderId: "427100754072",
  appId: "1:427100754072:web:8492c9e002c8e8dcef00ed"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);