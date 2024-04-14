import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCIcEXk5125g7W892bpXWoQO3cacD49yRo",
  authDomain: "disney-clone-c7703.firebaseapp.com",
  projectId: "disney-clone-c7703",
  storageBucket: "disney-clone-c7703.appspot.com",
  messagingSenderId: "578025571142",
  appId: "1:578025571142:web:5f24d074b047f151eb1b47",
  measurementId: "G-2E5LCDNSSL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage, db };
