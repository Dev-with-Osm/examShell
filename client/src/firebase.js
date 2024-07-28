import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "examshell-d208f.firebaseapp.com",
  projectId: "examshell-d208f",
  storageBucket: "examshell-d208f.appspot.com",
  messagingSenderId: "1047231813515",
  appId: "1:1047231813515:web:c5f11946ce16e266f7418e",
  measurementId: "G-9PJY91ZBR4"
};

export const app = initializeApp(firebaseConfig);
//AIzaSyD1fqZqtMhB2n0_9q8H7goi_rJy3ow-JZY