import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Top from './Top';
import Footer from './Footer';
import './Order.css';
import ordernow from './img/ordernow.avif';

const Order = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const total = queryParams.get('total');

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    password: '',
    address: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'total') {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
        total,
      });
    }
  };

  const getCookie = (name) => {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const numericTotal = parseFloat(total.replace(/[^\d.]/g, ''));

      if (isNaN(numericTotal)) {
        console.error('Invalid total value:', total);
        return;
      }

      console.log('Numeric Total Value:', numericTotal);

      const csrftoken = getCookie('csrftoken');

      const response = await fetch('http://127.0.0.1:8000/api/orders/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({ ...formData, total: numericTotal }),
      });

      console.log('Response:', await response.text());

      if (response.ok) {
        setShowSuccess(true);

        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);

        // Reset the form data
        setFormData({
          name: '',
          mobile: '',
          password: '',
          address: '',
          total,
        });
      }
    } catch (error) {
      console.error('Error submitting order:', error.message);
    }
  };
return (
    <>
      <Header />
      <Top />
      <div className='custom-login-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='custom-auth-card'>
              <h3 className='custom-text-center custom-mb-3'></h3>
              <div className='custom-grid-container'>
                <div className='custom-grid-item'>
                  <img src={ordernow} alt='Your Image' className='custom-image' />
                </div>
                <div className='custom-grid-item custom-form-container'>
                  <form onSubmit={handleSubmit} className='custom-form'>
                    <input type='text' name='name' placeholder='Name' className='custom-form-control' value={formData.name} onChange={handleChange} />
                    <input type='tel' name='mobile' placeholder='Mobile Number' className='custom-form-control' value={formData.mobile} onChange={handleChange} />
                    <input type='password' name='password' placeholder='Password' className='custom-form-control' value={formData.password} onChange={handleChange} />
                    <input type='text' name='address' placeholder='Address' className='custom-form-control' value={formData.address} onChange={handleChange} />
                    <input type='hidden' name='total' value={total} />
                    <p>Total: {total}</p>
                    <div className='custom-d-flex custom-justify-content-center custom-gap-15 custom-align-items-center'>
                      <button type='submit' className='custom-button custom-border-0'><b>Order</b></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {showSuccess && (
        <div
          className='notification'
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fa72c6',
            color: '#fff',
            padding: '15px',
            zIndex: 9999,
            transition: 'opacity 0.2s ease-in-out',
          }}
        >
          Order submitted successfully!
        </div>
      )}
    </>
  );
};

export default Order;