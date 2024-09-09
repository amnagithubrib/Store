import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import Top from './Top';
import { useCart } from './cartContext';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get('title');
  const { state, dispatch } = useCart();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(state.cart);
  }, [state]);

  const removeFromCartHandler = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', title: item.title });
  };

  const calculateSubtotal = () => {
    const subtotal = cartItems.reduce((acc, { price, qty }) => {
      const itemPrice = parseFloat(price.replace('Rs.', '')) || 0;
      const itemQty = parseInt(qty, 10) || 0;
      return acc + itemPrice * itemQty;
    }, 0);
  
    // Format the subtotal to two decimal places and add currency symbol (PKR)
    const formattedSubtotal = new Intl.NumberFormat('ur-PK', {
      style: 'currency',
      currency: 'PKR',
    }).format(subtotal);
  
    return formattedSubtotal;
  };
  
  const calculateTotal = () => {
    const total = cartItems.reduce((acc, { price, qty }) => {
      const itemPrice = parseFloat(price.replace('Rs.', '')) || 0;
      const itemQty = parseInt(qty, 10) || 0;
      return acc + itemPrice * itemQty;
    }, 0);
  
    // Format the total to two decimal places and add currency symbol (PKR)
    const formattedTotal = new Intl.NumberFormat('ur-PK', {
      style: 'currency',
      currency: 'PKR',
    }).format(total);
  
    return formattedTotal;
  };
  

  const proceedToCheckoutHandler = () => {
    // Perform any necessary actions before proceeding to checkout

    // Instead of navigating to '/checkout', navigate to '/signin' directly
    const total = calculateTotal();

  // Instead of navigating to '/order', navigate to '/order' with the total as a query parameter
  navigate(`/order?total=${total}`);
  };

  useEffect(() => {
    console.log("Cart Items:", cartItems);
  }, [cartItems]);

  return (
    <div>
      <Header />
      <Top />

      <div className="cart-container">
        <h2>
          <b>Shopping Cart</b>
        </h2>
        {cartItems.map((item, index) => (
          <Card key={index} className="mb-3">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.title} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <span>{item.title}</span>
                  </Col>
                  <Col md={2}>Qty: {item.qty}</Col>
                  <Col md={2}>₹{item.price}</Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      style={{ backgroundColor: '#fccdd4', borderColor: '#FF69B4', color: 'black' }}
                      onClick={() => removeFromCartHandler(item)}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        ))}
        <p className="cart-info">
          <b>Subtotal:</b>
          {calculateSubtotal()}
        </p>
        <p className="cart-info">
          <b>Total: </b>
          {calculateTotal()}
        </p>
        <button className="cart-button" onClick={proceedToCheckoutHandler}>
          <b>PROCEED TO CHECKOUT</b>
        </button>
      </div>
      <Footer className="footer" />
    </div>
  );
};

export default Cart;