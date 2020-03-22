import firebase from 'firebase';


var admin = require("firebase-admin");

var serviceAccount = require("./ydejewelry-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ydejewelry.firebaseio.com"
});


// var firebaseConfig = {
//     apiKey: "AIzaSyC_hIhz_tWCRpnqepjKI6kGYp4zbefn2-0",
//     authDomain: "ydejewelry.firebaseapp.com",
//     databaseURL: "https://ydejewelry.firebaseio.com",
//     projectId: "ydejewelry",
//     storageBucket: "ydejewelry.appspot.com",
//     messagingSenderId: "863454607225",
//     appId: "1:863454607225:web:72154d88f141b008bfa1a8",
//     measurementId: "G-KF78DF0F90"
//   };

// var fire = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.collection('TestCollection').get()
.then(response => {
console.log(response.docs);
})
.catch(error => {
console.log(error);
});

export default admin;
