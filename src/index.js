import React from 'react';
import ReactDOM from 'react-dom/client';
//import reportWebVitals from './reportWebVitals';
import About from './Component/AboutUs';

import Contacts from './Component/Contacts';
import Faq from './Component/Faq';
import MainComponent from './Component/MainComponent';
import Testimonial from './Component/Testimonial';
import PlaceOrder from './Component/PlaceOrder';
import Layout from './Component/Layout';
import './index.css'

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';



const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout />}>
      <Route path='' element={<MainComponent/>} />
      <Route path="MainComponent" element={<MainComponent />} />
      <Route path="PlaceOrder" element={<PlaceOrder />} />
      <Route path="Testimonial" element={<Testimonial />} />
      <Route path="Faq" element={<Faq />} />
      <Route path="Contacts" element={<Contacts />} />
      <Route path="AboutUs" element={<About />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);