import React from 'react';
import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./../assets/cs_logo.png"


const NavbarItem = () => {
    return (
      
        <Navbar expand="lg" className="bg-body-tertiary from-[#2C3E50] to-[#000000] bg-gradient-to-r w-full block">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={logo} alt="dfsd" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/Blog">Blog</Nav.Link>
              <Nav.Link href="/Committee">Committee</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              <Nav.Link href="/Achievements">Achievements</Nav.Link>
              <Nav.Link href="/LeaderBoard">Leaderboard</Nav.Link>
              <NavDropdown title="Activities" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/Activities">Activities</NavDropdown.Item>
                <NavDropdown.Item href="/Contact">
                  Contact
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/RegisterGlobal">
                  RegisterGlobal
                </NavDropdown.Item>
                <NavDropdown.Item href="/RegisterIUT">
                  RegisterIUT
                </NavDropdown.Item>
              </NavDropdown>
              
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavbarItem;