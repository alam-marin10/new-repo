import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCrZ2oycvYYFSAYBWSTKeEcLZ7Qqkkiwpg",
  authDomain: "my-project-b6b1a.firebaseapp.com",
  projectId: "my-project-b6b1a",
  storageBucket: "my-project-b6b1a.appspot.com",
  messagingSenderId: "422663441515",
  appId: "1:422663441515:web:e72016aa550693b475352e"
};

////////////////
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB,auth};
