// SignIn component
import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cart2 from './img/cart2.webp';
import './Signin.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const [errorMessages, setErrorMessages] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleSignUp = () => {
    const errors = {};

    if (!username) {
      errors.username = 'Username is required';
    }

    if (!email) {
      errors.email = 'Email is required';
    }

    if (!password) {
      errors.password = 'Password is required';
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Password and Confirm Password must match';
    }

    if (Object.keys(errors).length === 0) {
      // Save user data in localStorage (mock server)
      const userData = { username, email, password };
      localStorage.setItem(email, JSON.stringify(userData));

      setAuthenticated(true);
      navigate('/login');
    } else {
      setErrorMessages(errors);
    }
  };

  return (
    <Container>
      <Row>
        {/* First Column: Sign-in/Sign-up Form */}
        <Col>
          {!authenticated ? (
            <div className="sign-in-form">
              <h2><b>Sign Up</b></h2>

              <hr />

              <form>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                {errorMessages.username && <p style={{ color: 'red' }}>{errorMessages.username}</p>}

                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {errorMessages.email && <p style={{ color: 'red' }}>{errorMessages.email}</p>}

                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {errorMessages.password && <p style={{ color: 'red' }}>{errorMessages.password}</p>}

                <label>Confirm Password:</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                {errorMessages.confirmPassword && <p style={{ color: 'red' }}>{errorMessages.confirmPassword}</p>}

                <button type="button" onClick={handleSignUp}>
                  <b> Sign Up</b>
                </button>
              </form>

              {/* Link to Sign In page */}
              <p>Already have an account? <Link to="/login">Sign In</Link></p>
            </div>
          ) : (
            // Redirect to the login page after successful signup
            <Navigate to="/login" />
          )}
        </Col>

        {/* Second Column: Cart Image */}
        <Col>
          {!authenticated && (
            <img style={{ height: 585, width: 600, paddingTop: 20 }} src={cart2} alt="Cart 2" className="cart-image" />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
