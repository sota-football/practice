//このファイルはreactとfirebaseの接着剤のようなもの

import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7eUDqu8e-Nmbj93YWG-_LNkfyJPYbV9M",
  authDomain: "blog-d94e9.firebaseapp.com",
  projectId: "blog-d94e9",
  storageBucket: "blog-d94e9.appspot.com",
  messagingSenderId: "42531236146",
  appId: "1:42531236146:web:bfb5796f5f98ba1e144f2b"
};

//以下はfirebaseの公式に書いてある
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db};