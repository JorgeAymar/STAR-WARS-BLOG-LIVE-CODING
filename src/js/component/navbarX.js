import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Favoritos from "./favoritos";

const logoUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKODGvTV-5Yz2-erWV6MFAsWRjWv6fXSlzYB1fxPIC9Qg8XvULNFIAYW8wOT2e79vMpk&usqp=CAU";

const NavbarX = () => {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img
            src={logoUrl}
            alt="Logo"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/personajes">Personajes</Nav.Link>
            <Nav.Link href="/planetas">Planetas</Nav.Link>
          </Nav>
          <Favoritos />
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavbarX;
