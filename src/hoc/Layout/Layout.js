import React, { Component } from 'react'

import Aux from '../Auxiliary/Auxilary';
import Modal from '../../components/Modal';
import Navbar from '../../components/Navbar';
import Routing from '../../routing/Routing';
import Welcome from '../../components/Welcome';

import { ProductConsumer, ProductProvider } from '../../context';


export default class Layout extends Component {
    render() {
        return (
            <Aux>
                <React.Fragment>
                    <Navbar />
                    <ProductProvider>
                        <Welcome /> 
                        <Routing />
                        <Modal />
                    </ProductProvider>
                </React.Fragment> 
            </Aux>
        )
    }
}
