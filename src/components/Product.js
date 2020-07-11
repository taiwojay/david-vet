import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

export default class Product extends Component {
    render() {
        const{name, price, info}=this.props.product;
        return (
            <div className='product-box-container'>
             <Card 
                   onClick={()=>console.log('you clicked')}
                   className='blue3 product-box fade-in'>
            {/*    <Card.Img variant="top" src="img/cardimg.jpg" /> */}
                <Card.Body>
                    <Card.Title className='product-font josefin-font'>{name}</Card.Title>
                    <Card.Text className='product-font josefin-font'>
                    {info}
                    </Card.Text>
                    <Card.Title className='product-font josefin-font'>{price}</Card.Title>
                </Card.Body>
             </Card>
             </div>
        )
    }
}


