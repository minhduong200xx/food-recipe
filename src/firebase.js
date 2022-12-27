import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyABpL1Z6Zowlx5X5PG0rBiIeXQJpsqR1XM",
  authDomain: "food-recipe-73c1e.firebaseapp.com",
  databaseURL:
    "https://food-recipe-73c1e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "food-recipe-73c1e",
  storageBucket: "food-recipe-73c1e.appspot.com",
  messagingSenderId: "387247167823",
  appId: "1:387247167823:web:66cdaa99169c8ff0fecd3a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
