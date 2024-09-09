import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-rating-stars-component';
import './Cards.css';

// Import card images
import card1 from './img/card1.webp';
import card2 from './img/card2.webp';
import card3 from './img/card3.webp';
import card4 from './img/card4.webp';
import card5 from './img/card5.jpg';
import card6 from './img/card6.jpg';
import card7 from './img/card7.jpg';
import card8 from './img/card8.jpg';

function BasicExample() {
  // Dummy data for card content
  const cardData = [
    {
      id: 1,
      title: 'Tomato Bliss: Irresistible Gourmet Ketchup.',
      text: 'Rs.200',
      rating: 4,
      img: card1,
    },
    {
      id: 2,
      title: 'Cocoa Hazelnut Fusion: Indulge in Rich Chocolate & Nutty Bliss',
      text: 'Rs.300',
      rating: 3,
      img: card2,
    },
    {
      id: 3,
      title: 'Taste the Orchard Finest in Every Spoonful',
      text: 'Rs.250',
      rating: 5,
      img: card3,
    },
    {
      id: 4,
      title: 'Golden Elixir: Pure, Natural Honey for Sweet Moments',
      text: 'Rs.180',
      rating: 2,
      img: card4,
    },
    {
      id: 5,
      title: 'Olpers Milk: Creamy Goodness, Pure and Fresh.',
      text: 'Rs.220',
      rating: 4,
      img: card5,
    },
    {
      id: 6,
      title: 'Sip the Refreshing Elegance of Green Tea.',
      text: 'Rs.200',
      rating: 3,
      img: card6,
    },
    {
      id: 7,
      title: 'Nourish & Shine: Hair Care with Our Enriching Hair Oil.',
      text: 'Rs.200',
      rating: 5,
      img: card7,
    },
    {
      id: 8,
      title: 'Lux: Unleash the Power of Elegance in Every Shower.',
      text: 'Rs.200',
      rating: 4,
      img: card8,
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {cardData.map((card) => (
          <div key={card.id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card className="custom-card">
              <Card.Img variant="top" src={card.img} className="custom-card-img" />
              <Card.Body>
                <Card.Title className="card-title">{card.title}</Card.Title>
                <Card.Text className="card-text">{card.text}</Card.Text>
                <ReactStars count={5} size={20} value={card.rating} edit={false} activeColor="#ffd700" />
                <Link
                     to={`/checkout?img=${card.img}&text=${card.text}&title=${card.title}`}
                     style={{ textDecoration: 'none' }}
                   >
  <Button variant="dark" className="custom-button">
    Buy now
  </Button>
</Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BasicExample;