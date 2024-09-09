import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './cartContext'; // Import the CartProvider
import Layout from './Layout';
import About from './About';
import Order from './Order';
import Contact from './Contact';
import Checkout from './Checkout';
import Cart from './Cart';
import SignIn from './Signin';
import Login from './Login';
const App = () => {
  return (
    <BrowserRouter>
      {/* Wrap the entire application with the CartProvider */}
      <CartProvider>
        <Routes>
         
          <Route path="/layout" element={<Layout />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<SignIn/>}/>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
