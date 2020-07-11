import React, { Component } from 'react';
import Product from './Product';
import {ProductConsumer} from '../context';

export default class Drugs extends Component {

 render() {
  return (
    <React.Fragment>
     <h1 className='abel-font title'>Drugs</h1>
      <p className='sub-content'> The prices for the vaccines and drugs vary with dosage and source. </p>
      <div className='product-grid'>
        <ProductConsumer>
            {value=>{
             return value.drugProducts.map(product =>{
                return <Product key={product.id} product={product} />;
             })
            }}
        </ProductConsumer>
        </div>
    </React.Fragment>
   )
 }
}

