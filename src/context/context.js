import React, { Component } from 'react'
import { detailProduct } from '../data';
import firebase from '../firebase/Firebase';
import placeHolderImage from '../website.jpg';
import PRODUCTS_QUERY from './index';
import { useQuery } from '@apollo/react-hooks';

const ProductContext = React.createContext();
// Provider
// Consumer 



class ProductProvider extends Component {

    constructor() {
        super()
        
        // this.initFirebase();
    }

    
    state= {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        tempImage: placeHolderImage
    };
    componentDidMount() {
        this.setProducts();
    }


    // initFirebase = () => {

    //     var firebase = require("firebase/app");

    //     const firebaseConfig = {
    //         apiKey: "AIzaSyDKk2lIktVfYmapmBnEYLRbwqYHnxloKFc",
    //         authDomain: "ydesjewelry.firebaseapp.com",
    //         databaseURL: "https://ydesjewelry.firebaseio.com",
    //         projectId: "ydesjewelry",
    //         storageBucket: "ydesjewelry.appspot.com",
    //         messagingSenderId: "741435813498",
    //         appId: "1:741435813498:web:46f81fcd9d37c9a2cb55c3"
    //     };

    //     firebase.initializeApp(firebaseConfig);

    //     db = firebase.firestore();
    //     storage = firebase.storage().ref();
    // }

    setProducts = () => {
        
        

        // this.setState({products: tempProducts}) 

        // const db = firebase.firestore();
        // let tempProducts = [];
        // db.collection('Products').get().then((snapshot) => {
        //     snapshot.docs.forEach(doc => {
        //       let data = doc.data();

        //       const singleItem = {...data};
              
        //       tempProducts = [...tempProducts, singleItem]

        //       this.setState({products: tempProducts}) 
        //       console.log(doc.data())
        //     })
        //   }).catch(function (error) {
        //       console.log("Error getting document:", error);
        //   });
    }

    loadImage = (image) => {
        // make this independant of file types
        // storage.chi

        const storage = firebase.storage().ref();
        storage.child(`${image}.jpg`).getDownloadURL().then((url) => {
            this.setState(() => {
                return {tempImage: url}
            })
            

        }).catch((error) => {
            // Handle any errors
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
                    closeModal: this.closeModal,
                    loadImage: this.loadImage
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};