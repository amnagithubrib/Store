// Checkout.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import Top from './Top';
import { useCart } from './cartContext'; // Import useCart from CartContext
import './Checkout.css';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { dispatch } = useCart(); // Use dispatch from CartContext

  const queryParams = new URLSearchParams(location.search);

  const imgSrc = queryParams.get('img');
  const text = queryParams.get('text');
  const title = queryParams.get('title');

  // Split the 'text' parameter to separate price and CardTitle
  const [price, cardTitle] = (text || '').split(',');

  const [qty, setQty] = useState(1);

  const addToCartHandler = () => {
    const newItem = {
      title,
      qty,
      price,
      image: imgSrc, // Include the image source in the cart item
    };

    dispatch({ type: 'ADD_TO_CART', item: newItem });
    navigate('/cart'); // Navigate to the cart page after adding to the cart
  };

  return (
    <div className="checkout-container-fluid">
      <Header />
      <Top />
      <div className="checkout-content">
        <Row>
          {/* Column 1: Card Image */}
          <Col md={4} className="mb-4">
            <Image src={imgSrc} alt={title} fluid />
          </Col>

          {/* Column 2: Title and Description */}
          <Col md={3} className="mb-4">
            <ListGroup variant="flush">
              <ListGroup.Item className="mb-4" style={{paddingTop:10}}>
                <h5><b>{title}</b></h5>
              </ListGroup.Item>
              <ListGroup.Item className="text-left">
                {/* Include your product description here */}
                {/* You can fetch this information from your data source */}
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Column 3: Price, Status, Qty, Add to Cart */}
          <Col md={3} className="mb-4"style={{paddingTop:10}} >
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>₹{price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>In Stock</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col xs="auto" className="my-1">
                      <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(10).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button
                    className="w-100"
                    disabled={false}
                    type="button"
                    onClick={addToCartHandler}
                    style={{ marginTop: '20px', backgroundColor: ' #fdeaed', borderColor: ' #fdeaed', color: 'black' }}
                  >
                    <b>Add to Cart</b>
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
