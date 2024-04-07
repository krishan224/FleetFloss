import React from 'react';
import AboutUs from './Component/AboutUs';
import Contacts from './Component/Contacts';
import Faq from './Component/Faq';
import Footer from './Component/Footer';
//import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navabar from './Component/Header';
import MainComponent from './Component/MainComponent';
import Testimonial from './Component/Testimonial';
import PlaceOrder from './Component/PlaceOrdre';
//import Header from './Component/Header';


function App() {
  return (
    <div>
        <Navabar></Navabar>  
        <AboutUs></AboutUs>
        <MainComponent></MainComponent>
        <Testimonial></Testimonial>
        <Contacts></Contacts>
        <PlaceOrder></PlaceOrder>
        <Faq></Faq>
        
        <Footer></Footer>
      
    </div>
  );
}

export default App;
