import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBU5U5-Lzq5zjN9Q_MlVnhE4mO1MCO7pKg",
  authDomain: "messenger-clone-a4624.firebaseapp.com",
  projectId: "messenger-clone-a4624",
  storageBucket: "messenger-clone-a4624.appspot.com",
  messagingSenderId: "2263406695",
  appId: "1:2263406695:web:84e588c067f1f31be15cc2",
  measurementId: "G-3RQW8XNHXC",
});

const db = firebaseApp.firestore();

export default db;
