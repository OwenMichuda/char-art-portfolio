import React from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import '../styles/NavbarHeader.css';

function NavbarHeader() {
  return (
    <Navbar bg="light" data-bs-theme="light" fixed="top" className="navbar d-flex">
      <div className="m-lg-2">
        <Navbar.Brand href="#home">Charlotte Giff</Navbar.Brand>
      </div>
      <div className="mx-auto">
        <Nav className="me-auto">
          <Nav.Link href="#Photography">Photography</Nav.Link>
          <Nav.Link href="#Landscapes">Landscapes</Nav.Link>
          <Nav.Link href="#Portraits">Portraits</Nav.Link>
          <Nav.Link href="#Publications">Publications</Nav.Link>
          <Nav.Link href="#CreativeWork">Creative Work</Nav.Link>
          <Nav.Link href="#Poetry">Poetry</Nav.Link>
        </Nav>
      </div>
      <div>
        <Nav className="me-auto">
          <Nav.Link href="#About">About Me</Nav.Link>
          <Nav.Link href="#Contact">Contact</Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
}

export default NavbarHeader;
