import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCGJkILU5w0ALp9J4M_59RNMXhzCzve2vQ",
  authDomain: "project-71-9526f.firebaseapp.com",
  projectId: "project-71-9526f",
  storageBucket: "project-71-9526f.appspot.com",
  messagingSenderId: "328778373822",
  appId: "1:328778373822:web:5222c466e92e297b815cef"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
