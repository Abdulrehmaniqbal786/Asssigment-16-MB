import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBE90ZLlyFaM8kEggqC_l5Gj7VDp-5dyFc",
  authDomain: "assigment-16-mb.firebaseapp.com",
  databaseURL: "https://assigment-16-mb-default-rtdb.firebaseio.com",
  projectId: "assigment-16-mb",
  storageBucket: "assigment-16-mb.appspot.com",
  messagingSenderId: "212147327610",
  appId: "1:212147327610:web:e1b7dd811d2fcf70dea1c3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


export default app;