// LoginPage component
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);

    // Perform actual authentication logic here
    // For simplicity, let's just set authenticated to true if email and password are not empty
    if (email && password) {
      // You would typically send a request to the server for authentication here
      // For the sake of this example, we'll check if the password matches the one used during sign-up
      const userData = JSON.parse(localStorage.getItem(email));
      if (userData && userData.password === password) {
        setAuthenticated(true);
        navigate('/layout');
      } else {
        alert('Invalid email or password. Please try again.');
      }
    }
  };

  return (
    <Container>
      <Row>
        {/* Login Form */}
        <Col md={{ span: 6, offset: 3 }}>
          <div className="login-form">
            <h2><b>Login</b></h2>
            <hr />

            <form>
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

              <button type="button" onClick={handleLogin}>
                <b> Login</b>
              </button>
            </form>

            {/* Link to Sign Up page */}
            <p>Don't have an account? <Link to="/signin">Sign Up</Link></p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;



