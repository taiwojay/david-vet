import React from 'react';
import {Carousel} from 'react-bootstrap'

export default function SlideShow() {
    return (
    
        <div className='carousel-container'>
    
            <Carousel >
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="img/dogs.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <p className='carousel-text'>Care for your pets</p>
                 
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="img/poultry.jpeg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <p className='carousel-text'>Raise your own poultry</p>
            
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="img/drugs.jpeg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <p className='carousel-text blue3-font'>Prevention is better than cure, lucky for you, we do both</p>
             
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            </div>
        

    )
}
