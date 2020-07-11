import React, { Component } from 'react';
import Product from './Product';
import {ProductConsumer} from '../context';
import {Link} from  'react-router-dom'

export default class PoultryProducts extends Component {

 render() {
  return (
    <React.Fragment>
     <h1 className='abel-font title'>Poultry Products and Care</h1>
      
     <h3 className='abel-font small-title'>Feed</h3>
      <p className='sub-content'>Our main source of feed is Animal Care.</p>
      <div className='product-grid'>
        <ProductConsumer>
            {value=>{
             return value.feedProducts.map(product =>{
                return <Product key={product.id} product={product} />;
             })
            }}
        </ProductConsumer>
        </div>

        <h3 className='abel-font small-title'>Day Old Chickens and Fowls</h3>
        <p className='sub-content'>These fowls can be delivered within 4-7 days of booking. Their prices vary with the hatcheries we obtain them from, but they are all quality fowls.</p>
        <div className='product-grid'>
        <ProductConsumer>
            {value=>{
             return value.fowlProducts.map(product =>{
                return <Product key={product.id} product={product} />;
             })
            }}
        </ProductConsumer>
        </div>

        <h3 className='abel-font small-title'>Eggs</h3>
        <p className='sub-content'> Our eggs are fresh from our very own Poultry Farm.</p>
        <div className='product-grid'>
        <ProductConsumer>
            {value=>{
             return value.eggProducts.map(product =>{
                return <Product key={product.id} product={product} />;
             })
            }}
        </ProductConsumer>
        </div>
        <p className='sub-content'>For information on Poultry drugs visit the <Link to='/drugs'>Drugs</Link> page </p>
        
    </React.Fragment>
   )
 }
}

