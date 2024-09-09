import React, { useState, useEffect } from 'react';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi';
import Header from './Header';
import Top from './Top';
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile_number: '',
    address: '',
  });

  const [csrfToken, setCsrfToken] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Fetch CSRF token on component mount
    const token = getCookie('csrftoken');
    setCsrfToken(token);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getCookie = (name) => {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      const response = await fetch('http://localhost:8000/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Form submitted successfully!', data);

        // Display success notification
        setShowSuccess(true);

        // Optionally, reset the form
        setFormData({
          name: '',
          email: '',
          mobile_number: '',
          address: '',
        });

        // Hide success notification after a few seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

  return (
    <>
      <Header />
      <Top />
      <div style={{ backgroundColor: '#f5f5f5', padding: '20px 0' }} className="contact-wrapper py-5 home-wrapper-2">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }} className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.166851223979!2d73.12238047505572!3d33.6009750414249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfebc18377b6db%3A0x36a7df4853e74f11!2sMadina%20Cash%20%26%20Carry!5e0!3m2!1sen!2s!4v1694424364543!5m2!1sen!2s"
                width="600"
                height="450"
                style={{ border: '0', width: '100%' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '5px' }} className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 style={{ fontSize: '24px', marginBottom: '20px' }} className="contact-title">
                    <b>Contact</b>
                  </h3>
                  <form onSubmit={handleSubmit} className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Name"
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '15px' }}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Email"
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '15px' }}
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="mobile_number"
                        value={formData.mobile_number}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Mobile Number"
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '15px' }}
                      />
                    </div>
                    <div>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Address"
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '15px' }}
                      ></textarea>
                    </div>
                    {/* Add CSRF token input */}
                    <input type="hidden" name="csrfmiddlewaretoken" value={csrfToken} />
                    <div>
                      <button
                        type="submit"
                        className="button border-0"
                        style={{ backgroundColor: '#fa72c6', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 style={{ fontSize: '24px', marginBottom: '20px' }} className="contact-title">
                    <b>Get in touch with us</b>
                  </h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5" />
                        <address className="mb-0">
                          Hussain and Ali Plaza, Old Airport Rd Faisal Colony, Rawalpindi Punjab, Pakistan
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5" />
                        <a href="tel:+92 7864728367">+92 7864728367</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:cashandcarry45@gmail.com">cashandcarry45@gmail.com</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiInfoCircle className="fs-5" />
                        <p className="mb-0">Monday - Friday 10 AM - 8PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {showSuccess && (
   <div
   className="notification"
   style={{
     position: 'fixed',
     top: '50%',
     left: '50%',
     transform: 'translate(-50%, -50%)',
     backgroundColor: '#fa72c6',
     color: '#fff', // Change text color to white
     padding: '15px',
     zIndex: 9999,
     transition: 'opacity 0.2s ease-in-out', // Add transition for smoother appearance/disappearance
   }}
 >
   Form submitted successfully!
 </div>
 
      )}
    </>
  );
};

export default Contact;
