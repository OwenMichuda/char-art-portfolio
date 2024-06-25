import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import '../styles/NavbarHeader.css';
import {Link} from "react-router-dom";

function NavbarHeader() {
  return (
    <Navbar bg="light" data-bs-theme="light" fixed="top" className="navbar d-flex">
      <div className="m-lg-2">
        <Navbar.Brand as={Link} to="/home">Charlotte Giff</Navbar.Brand>
      </div>
      <div className="mx-auto">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/landscapes">Landscapes</Nav.Link>
          <Nav.Link as={Link} to="/portraits">Portraits</Nav.Link>
          <Nav.Link as={Link} to="/publications">Publications</Nav.Link>
          <Nav.Link as={Link} to="/creative">Creative Work</Nav.Link>
          <Nav.Link as={Link} to="/poetry">Poetry</Nav.Link>
        </Nav>
      </div>
      <div>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/about">About Me</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
}

export default NavbarHeader;
