import React, { Component } from 'react';
import SlideShow from './SlideShow';
import Panels from './Panels';

export default class HomePage extends Component {
    render() {
        return (
            <div className='page-container'>
            <div>
                <div className='hptext fade-in'>
                  Welcome to the official website of David Veterinary Centre, you can find information of products and services we provide right here.
        
                </div>
                  <SlideShow />
                  <Panels />
            </div>
            </div>
        )
    }
}
