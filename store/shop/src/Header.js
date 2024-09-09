import React from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import './Header.css';

function Header() {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl d-flex justify-content-between align-items-center">
          <div>
            <p className="text-dark mb-0">
              Free Shipping Over Rs.50000 & Free Returns
            </p>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark icon-link">
              <FaFacebook size={20} className="mx-2" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark icon-link">
              <FaInstagram size={20} className="mx-2" />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-dark icon-link">
              <FaWhatsapp size={20} className="mx-2" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
