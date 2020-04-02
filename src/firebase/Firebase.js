import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDKk2lIktVfYmapmBnEYLRbwqYHnxloKFc",
  authDomain: "ydesjewelry.firebaseapp.com",
  databaseURL: "https://ydesjewelry.firebaseio.com",
  projectId: "ydesjewelry",
  storageBucket: "ydesjewelry.appspot.com",
  messagingSenderId: "741435813498",
  appId: "1:741435813498:web:46f81fcd9d37c9a2cb55c3"
};

firebase.initializeApp(firebaseConfig);


export default firebase;


