// src/components/MerchantHome.js
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import FormComponent from './FormComponent';
import PhishingURLDetector from './PhishingURLDetector.component';
import logo from '../assets/logo.png';
import { FaCreditCard, FaEdit } from 'react-icons/fa';
import ecommerce from '../assets/E-commerce.png'
import SendMessageComponent from './SendMessageComponent';

const MerchantHome = () => (
  <div>
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="app-title">Payment Risk Shield</span>
      </div>
    </nav>

    
    <div className='merchant'>
      <div className="icons-container">
        <Link to="generate-payment-link" className="icon-link">
          <FaCreditCard size={50} />
          <p>Payment</p>
        </Link>
        <div className="icon-link">
        <Link to="send-message" className="icon-link"> {/* Link to SendMessageComponent */}
          <FaEdit size={50} />
          <p>Send Message</p>
          </Link>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
     
      


      <Routes>
        <Route path="/" element={<div><img src={ecommerce} alt="Merchant" className="merchant-image" style={{ width: '100%', height: '900px' }} /></div>} />
        <Route path="/phishing-detection" element={<PhishingURLDetector />} />
        <Route path="/generate-payment-link/*" element={<FormComponent />} />
        <Route path="/send-message" element={<SendMessageComponent />} /> {/* Route to SendMessageComponent */}

      </Routes>
    </div>

    <div className="merchant-image-container">
       
       

      </div>

    </div>
  
);

export default MerchantHome;
