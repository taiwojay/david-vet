import React from 'react';
import {Link} from 'react-router-dom';
import {Accordion, Card, Button } from 'react-bootstrap'

export default function Footer() {
    return (
        <footer className='footer'>
           <ul>
               <Link to='/'><li>Home</li></Link>
               <Link to='/consultation'> <li>Consultation</li></Link>
           </ul>
           
           <Accordion >
            <Card className='blue4'>
                <Card.Header>
                <Accordion.Toggle as={Button} eventKey="0">
                   About Us
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body> <p className='aboutus'> David Veterinary Centre has been around for more than 20 years.
                            We value our customers very much and always make sure to put them first in every situation. 
                            The owner is a renowned Veterinary Doctor, Dr. Taiwo Oluwasegun David, an alumnus of the University of Ibadan.</p>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
          </Accordion>
          <p className='aboutus'>Address 1: 567 Rumuigbo Street, Opposite Rumuigbo Civic Centre, Port-Harcourt, Rivers State</p>
          <p className='aboutus'>Address 2: Rumuokoro Street, After Safari Restaurant Port-Harcourt, Rivers State. We sell feed in bags from this address</p>
          <p className='aboutus'>Our Contact 1: Mrs. Sokari Teme , 07031393915</p>
          <p className='aboutus'>Our Contact 2: Dr. David Taiwo , 08037736418</p>
          <p className='myinfo'>Disclaimer: This website does not contain all our products and completely accurate information. It is generally for advertisement </p>
          <p className='myinfo'>This website was made by Taiwo Toba, check out my GitHub at <a href='https://github.com/taiwojay/'>https://github.com/taiwojay</a></p>
        </footer>
    )
}
