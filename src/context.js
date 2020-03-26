import React, { Component } from 'react'
import { detailProduct } from './data';
// import firebase from './firebase/Firebase';
import "firebase/firestore";
import 'firebase/storage';
const ProductContext = React.createContext();
// Provider
// Consumer 

let db = null;

class ProductProvider extends Component {
    state= {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,

    };
    componentDidMount() {
        this.initFirebase();
        this.setProducts();
    }


    initFirebase = () => {

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

        firebase.initializeApp(firebaseConfig);

        db = firebase.firestore();
    }

    setProducts = () => {
        let tempProducts = [];
        db.collection('Products').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
              let data = doc.data();

              const singleItem = {...data};
              
              tempProducts = [...tempProducts, singleItem]

              this.setState({products: tempProducts}) 
              console.log(doc.data())
            })
          }).catch(function (error) {
              console.log("Error getting document:", error);
          });
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id)
        return product;
    };

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct:product}
        })
    };

    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(() => {
            return { products: tempProducts, cart: [...this.state.cart, product] };
        },
        () => {
            console.log(this.state);
        });
    };

    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {modalProduct: product, modalOpen: true}
        })
    }

    closeModal = () => {
        this.setState(() =>{
            return {modalOpen: false}
        })
    }
    render() {
        return (
            <ProductContext.Provider 
                value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};