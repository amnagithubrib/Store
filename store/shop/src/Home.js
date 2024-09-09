import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mainBannerImage from './img/main-banner-1.png'; // Import the main banner image
import catBanner1Image from './img/catbanner-01.png'; // Import category 1 image
import catBanner2Image from './img/catbanner-02.png'; // Import category 2 image
import catBanner3Image from './img/catbanner-03.png'; // Import category 3 image
import catBanner4Image from './img/catbanner-04.png'; // Import category 4 image
import './Home.css'; // Import your custom CSS file

function AutoLayoutExample() {
  return (
    <Container className="custom-container">
      <Row>
        <Col lg={6} className="custom-padding">
          {/* Main Banner */}
          <div className="image-container">
            <img src={mainBannerImage} alt="Main Banner" className="imgt" />
            <div className="image-text">
              <h4 style={{color:'red'}}>Special Offer</h4>
              <h1><b>Save 60%</b></h1>
              <p>Big Sale</p>
              <button className="buy-button" >Buy Now</button>
            </div>
          </div>
        </Col>
        <Col lg={6} className="custom-padding">
          {/* Category Banners */}
          <Row>
            <Col lg={6}>
              <div className="category-banner">
                <div className="image-container">
                  <img src={catBanner1Image} alt="Category 1" className="img-fluid" />
                  <div className="image-text">
                    <h4 style={{color:'red'}}>Best Sale</h4>
                    <p><b>Save 60%</b></p>
                    <p>Big Sale</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="category-banner">
                <div className="image-container">
                  <img src={catBanner2Image} alt="Category 2" className="img-fluid" />
                  <div className="image-text">
                    <h4 style={{color:'red'}}>Best Sale</h4>
                    <p><b>Save 60%</b></p>
                    <p>Big Sale</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="category-banner">
                <div className="image-container">
                  <img src={catBanner3Image} alt="Category 3" className="img-fluid" />
                  <div className="image-text">
                    <h4 style={{color:'red'}}>Best Sale</h4>
                    <p><b>Save 60%</b></p>
                    <p>Big Sale</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="category-banner">
                <div className="image-container">
                  <img src={catBanner4Image} alt= "Category 4" className="img-fluid" />
                  <div className="image-text">
                    <h4 style={{color:'red'}}>Best Sale</h4>
                    <p><b>Save 60%</b></p>
                    <p>Big Sale</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;