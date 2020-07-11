import React from 'react';
import './App.css';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

import ContactUs from './components/ContactUs';
import Consultation from './components/Consultation';
import PoultryProducts from './components/PoultryProducts';
import Drugs from './components/Drugs';
import PetCare from './components/PetCare';

import {Switch, Route } from 'react-router-dom';

function App() {
  return (
    
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/contactus' exact component={ContactUs} />
            <Route path='/poultryproducts' exact component={PoultryProducts} />
            <Route path='/drugs' exact component={Drugs} />
            <Route path='/petcare' exact component={PetCare} />
            <Route path='/consultation' exact component={Consultation} />
          </Switch>
          <Footer />
          </React.Fragment>
    
  );
}

export default App;
