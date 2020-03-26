import React, { Component } from 'react'
import "firebase/firestore";
import 'firebase/storage';
var firebase = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyDKk2lIktVfYmapmBnEYLRbwqYHnxloKFc",
  authDomain: "ydesjewelry.firebaseapp.com",
  databaseURL: "https://ydesjewelry.firebaseio.com",
  projectId: "ydesjewelry",
  storageBucket: "ydesjewelry.appspot.com",
  messagingSenderId: "741435813498",
  appId: "1:741435813498:web:46f81fcd9d37c9a2cb55c3"
};

var fire = firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();

const storage = firebase.storage();
const storageRef = storage.ref();

export default class FirebaseClass extends Component {

  constructor() {
    super()

    this.state= {
      images: []
    };

  }

  componentDidMount() { 
    db.collection('Products').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        let data = doc.data();
        let imgUrl = data['img'];
        var joined = this.state.images.concat(imgUrl);
        this.setState({images: joined}) 
        console.log(doc.data())
      })
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });
  }

   render() {
    return (
      <li>
        {/* <img src={ this.state.images} alt="Test Image" /> */}
        {
          this.state.images.map((value,index) => {
            return <img src={value} key={index} />
          })
        }
      </li>
    )
  }
}


