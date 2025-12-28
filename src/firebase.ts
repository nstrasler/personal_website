import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwF9IBeKkxqWXdmIKVHzICZGij6nZQYCI",
  authDomain: "personal-website-noah-strasler.firebaseapp.com",
  projectId: "personal-website-noah-strasler",
  storageBucket: "personal-website-noah-strasler.firebasestorage.app",
  messagingSenderId: "677079222386",
  appId: "1:677079222386:web:871dafed79d934ece99aeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;