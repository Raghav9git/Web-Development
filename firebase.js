// firebase/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA7uyFl4ZvDHrW24-uMn-KuY_MFxr5_n3E",
  authDomain: "safenet-a84d2.firebaseapp.com",
  projectId: "safenet-a84d2",
  storageBucket: "safenet-a84d2.firebasestorage.app",
  messagingSenderId: "1044587274912",
  appId: "1:1044587274912:web:1280c4d0685c5280d19fc5"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


