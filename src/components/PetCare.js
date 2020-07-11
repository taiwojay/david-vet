import React, { Component } from 'react';
import Product from './Product';
import {ProductConsumer} from '../context';

export default class AnimalCare extends Component {

 render() {
  return (
    <React.Fragment>
     <h1 className='abel-font title'>Pet Care and Vaccination</h1>
     <p className='sub-content'> Your pets health is our top prority. Surgeries for pets are done by professionals like castrations. </p>
      
      <div className='product-grid'>
        <ProductConsumer>
            {value=>{
             return value.petProducts.map(product =>{
                return <Product key={product.id} product={product} />;
             })
            }}
        </ProductConsumer>
        </div>
    </React.Fragment>
   )
 }
}

