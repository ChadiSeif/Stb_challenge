import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div>
      <Navbar
        style={{
          backgroundColor: "#0f044c",
          height: "10vh",
          width: "100%",
          position: "absolute",
        }}
      >
        <Container>
          <Navbar.Brand href="/home" style={{ color: "white" }}>
            <img src="/assets/FINALLOGOwhite.png" alt="logo" width="150px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link style={{ color: "white" }} ">
                Nous connaitre
              </Nav.Link> */}
              <Nav.Link style={{ color: "white" }}">
                Présentation
              </Nav.Link>
              <Nav.Link style={{ color: "white" }} >
                Nos Chiffres clés
              </Nav.Link>
              <Nav.Link style={{ color: "white" }} >
                Notre équipe
              </Nav.Link>
              <Nav.Link style={{ color: "white" }} >
                Responsabilite sociale
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
