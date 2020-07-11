import React from 'react';
import {Link} from 'react-router-dom';

export default function Panels() {
    return (
        <div className='grid-wrapper fade-in'>
           <div className='box-container'>
            <Link to='/drugs'>
            <div className='box blue3'>Drugs and Vaccines </div>
            </Link>
            </div>
            <div className='box-container'>
            <Link to='/petcare'>
            <div className='box blue3'>Pet Care</div>
            </Link>
            </div>
            <div className='box-container'>
            <Link to='/consultation'>
            <div className='box blue3'>Consultation</div>
            </Link>
            </div>
            <div className='box-container'>
            <Link to='/poultryproducts'>
            <div className='box blue3'>Poultry Products</div>
            </Link>
            </div>
        </div>
           
    )
}
 