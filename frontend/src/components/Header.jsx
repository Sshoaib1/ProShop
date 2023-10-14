import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa"; //fa-> font-awesome icons
import { LinkContainer } from "react-router-bootstrap";
import logo1 from "../assets/logo1.png";

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src={logo1}
                alt="ProShop"
                width={50}
                style={{ padding: 5 }}
              />
              UShop
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {" "}
              {/* me-auto -> align links to right and ms-auto -> to the right*/}
              <LinkContainer to="/cart">
                <Nav.Link>
                  {" "}
                  <FaShoppingCart /> Cart{" "}
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  {" "}
                  <FaUser /> Sign in{" "}
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
