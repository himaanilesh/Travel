import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, Links } from 'react-router-dom'

const Header = () => {
  return (
    <div>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Lairon Academy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home"><Link style={{textDecoration:"none",color:"black"}}  to={"/home"}>Home</Link></Nav.Link>
             <Nav.Link  href="#login"> <Link style={{textDecoration:"none",color:"black"}}to={"/login"}>Login</Link></Nav.Link>
              <Nav.Link href="#register"><Link style={{textDecoration:"none",color:"black"}} to={"/register"}>Register</Link></Nav.Link>
              <Nav.Link href="#about"><Link style={{textDecoration:"none",color:"black"}}  to={"/about"}>About</Link></Nav.Link>
              <Nav.Link href="#service"><Link style={{textDecoration:"none",color:"black"}}  to={"/service"}>Service</Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      <h1>
        
      </h1>
    </div>
    </div>
  )
}

export default Header