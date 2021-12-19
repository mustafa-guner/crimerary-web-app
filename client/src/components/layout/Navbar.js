import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto text-center mx-auto">
            <Navbar.Brand className="text-center" href="#home">
              CrimeRary
            </Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
