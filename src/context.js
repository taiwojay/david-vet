import React, { Component } from 'react';
import {drugProducts, petProducts, feedProducts, eggProducts, fowlProducts} from './data'

const ProductContext = React.createContext();
//provider
//consumer

class ProductProvider extends Component {
    state={
        drugProducts: drugProducts,
        petProducts: petProducts,
        feedProducts: feedProducts,
        eggProducts: eggProducts,
        fowlProducts: fowlProducts
    }
    handleDetail=()=>{
        console.log('hello from detail');
    }
    render() {
        return (
            <ProductContext.Provider value={{
             ...this.state, 
              handleDetail: this.handleDetail
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};