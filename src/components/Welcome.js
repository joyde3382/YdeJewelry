import React, { Component } from 'react'

import { ProductConsumer } from '../context/context';
import placeHolderImage from '../../src/product-1.png';
export default class Welcome extends Component {
    render() {
        let img = placeHolderImage;
        let context = this.context;

        return (
            <ProductConsumer>
                {(value) => (
                    
                    <div>
                        {/* {img = value.loadImage("tempBGImage")}
                        
                        <img src={value.loadImage("tempBGImage")} alt="product" />  */}
                    </div>
                    
                
                )}
            </ProductConsumer>
        )
    }
}
