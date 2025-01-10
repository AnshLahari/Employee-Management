
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAJbKyjMPBwWX7ZyHR-BObtwQxxzludywg",
  databaseURL:"https://employee-mangement-fa958-default-rtdb.firebaseio.com",
  authDomain: "employee-mangement-fa958.firebaseapp.com",
  projectId: "employee-mangement-fa958",
  storageBucket: "employee-mangement-fa958.firebasestorage.app",
  messagingSenderId: "732759096896",
  appId: "1:732759096896:web:bdbe9c32b43702895469a5"
};


const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)