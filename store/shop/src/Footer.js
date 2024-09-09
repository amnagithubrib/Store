import React from 'react';
import './Footer.css';
import newsletter from './img/newsletter.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-top-data d-flex gap-3 align-items-center" style={{ paddingBottom: '20px' }}>
                            <img src={newsletter} alt="newsletter" />
                            <h2 className="mb-0 text-black"><b>Sign Up</b></h2>
                        </div>
                        <div className="input-group">
                            <input type="text" className="form-control py-2" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2" />
                            <span className="input-group-text p-2" id="basic-addon2">Subscribe</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5><b>Contact Us</b></h5>
                        <p>
                            Hussain and Ali Plaza, Old Airport Rd<br />
                            Faisal Colony, Rawalpindi<br />
                            Punjab, Pakistan<br />
                            +92 7864728367<br />
                            cashandcarry45@gmail.com
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5><b>Information</b></h5>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Refund Policy</a></li>
                            <li><a href="#">Shipping Policy</a></li>
                            <li><a href="#">Terms And Conditions</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5><b>Quick Links</b></h5>
                        <ul>
                            <li><a href="#">Vegetables</a></li>
                            <li><a href="#">Fruits</a></li>
                            <li><a href="#">Crockery</a></li>
                            <li><a href="#">Drinks And Beverages</a></li>
                        </ul>
                    </div>
                    <div className="col-12">
                            <p className="text-center mb-0 text-black"><b>&copy; {new Date().getFullYear()}; Powered By C & C</b></p>
                        </div>
                </div>
            </div>
        </footer>
        
    );
}

export default Footer;
