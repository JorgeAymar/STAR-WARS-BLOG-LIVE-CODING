import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, DropdownButton, Dropdown } from 'react-bootstrap';

const logoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKODGvTV-5Yz2-erWV6MFAsWRjWv6fXSlzYB1fxPIC9Qg8XvULNFIAYW8wOT2e79vMpk&usqp=CAU";

export const NavbarX = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="#home">
					<img
						src={logoUrl}
						alt="Logo"
						height="30"
						className="d-inline-block align-top"
					/>{" "}
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/personajes">Personajes</Nav.Link>
						<Nav.Link href="/planetas">Planetas</Nav.Link>
					</Nav>
					<Nav>
						<DropdownButton title="Favoritos" id="basic-nav-dropdown">
							<Dropdown.Item href="#element1">Elemento 1</Dropdown.Item>
							<Dropdown.Item href="#element2">Elemento 2</Dropdown.Item>
							<Dropdown.Item href="#element3">Elemento 3</Dropdown.Item>
						</DropdownButton>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
