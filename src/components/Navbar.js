import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Navigation() {
    return (
        <div>
          <Navbar collapseOnSelect expand="lg" className='blue4 '>
          
            <Navbar.Brand as={Link} to='/' className='abel-font white-font small-font'>DVC </Navbar.Brand>
          
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link as={Link} to='/' className='abel-font white-font small-font'>Home</Nav.Link>
                <Nav.Link as={Link} to='/poultryproducts' className='abel-font white-font small-font'>Poultry</Nav.Link>
                <Nav.Link  as={Link} to="/consultation" className='abel-font white-font small-font'>Consultaion</Nav.Link>
                <Nav.Link as={Link} to='/drugs' className='abel-font white-font small-font'>Drugs</Nav.Link>
                <Nav.Link as={Link} to='/petcare' className='abel-font white-font small-font'>Pets</Nav.Link> 
                </Nav>
               
            </Navbar.Collapse>
          </Navbar>   
        </div>
    )
}
