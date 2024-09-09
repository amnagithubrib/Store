import React from "react";
import "./About.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BsCheckLg} from 'react-icons/bs';
import Header from "./Header";
import Top from "./Top";
import Footer from "./Footer";

const Background = () => {
  return (
    <div className="bg">
      <Header/>
      <Top/>
      <Container className="doss">
        <Row>
          <Col sm={4}>
            <h4><b><BsCheckLg/> Quality Products</b></h4>
            <p>Our store offers a wide range of high-quality products sourced directly from local farms and trusted suppliers. We ensure that you receive only the best products.</p>
          </Col>
          <Col sm={4}>
            <h4><b> <BsCheckLg/>Transparent Pricing</b></h4>
            <p>At our grocery store, we believe in transparency. Our prices are clear and competitive, ensuring that you get value for your money with every purchase.</p>
          </Col>
          <Col sm={4}>
            <h4><b><BsCheckLg/>Customer Satisfaction</b></h4>
            <p>We take pride in our excellent customer service. Your satisfaction is our top priority, and we are dedicated to providing you with a hassle-free shopping experience.</p>
          </Col>
          <Col sm={4}>
            <h4><b><BsCheckLg/>Timely Deliveries</b></h4>
            <p>With a strong commitment to punctuality, we guarantee timely deliveries. We understand that your time is valuable, and we respect it.</p>
          </Col>
          <Col sm={4}>
            <h4><b><BsCheckLg/>Accurate Orders</b></h4>
            <p>We strive for accuracy in every order. Our team is trained to ensure that your orders are fulfilled accurately, making sure you receive exactly what you need.</p>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default Background;