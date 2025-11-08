import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ Make sure Bootstrap styles are applied

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ fontWeight: "bold" }}>
          Lairon Academy
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" style={{ color: "black" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/login" style={{ color: "black" }}>
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register" style={{ color: "black" }}>
              Register
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: "black" }}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/service" style={{ color: "black" }}>
              Service
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
