import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Stack, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
const Header = () => {
  return (
    <div>
      <Navbar data-bs-theme="dark" className='header'>
        <Container className='header-container'>
          <Navbar.Brand href="/" className='logo'>Task Master</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link >Support</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
