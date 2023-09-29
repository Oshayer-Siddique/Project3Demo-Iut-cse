import React,{ useState, useEffect} from 'react';
import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap';

import '/src/assets/css/Navbar.css'; // Import custom CSS
//import '/src/assets/css/style.css';


import Logo from '/src/assets/cs_logo.png'
import LogoWhite from '/src/assets/cs_logo_white.png'


function CustomNavbar() {
    
    
    return (
        <Navbar expand="lg" variant="dark" className="custom-navbar">
        <Container>
          <Navbar.Brand href="/">
            <img src={LogoWhite} alt="dfsd" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/blogs">Blogs</Nav.Link>
              <Nav.Link href="/members">Members</Nav.Link>
              <Nav.Link href="/events">Events</Nav.Link>
              <NavDropdown title="Competitions">
                <NavDropdown.Item href="/IntraCompetitions">Intra University</NavDropdown.Item>
                <NavDropdown.Item href="/InterRegistration">Inter University</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  

export default CustomNavbar;