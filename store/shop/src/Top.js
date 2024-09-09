import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Top.css';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="custom-navbar py-3 pl-3">
      <Container fluid>
        <Navbar.Brand href="#" className="navbar-brand" style={{ paddingLeft: 30 }}>C&C</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav>
            <NavLink href="/layout" className="nav-link">OUR STORE</NavLink>
            <NavLink href="/about" className="nav-link">ABOUT</NavLink>
            <NavLink href="/order" className="nav-link">ORDER</NavLink>
            <NavLink href="/contact" className="nav-link">CONTACT</NavLink>
          </Nav>
          <Form className="d-flex ms-auto"> {/* Use ms-auto to move the search bar to the right */}
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search-bar"
              aria-label="Search"
            />
            <Button variant="outline-success"><FontAwesomeIcon icon={faSearch} /></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;