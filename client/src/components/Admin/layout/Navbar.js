import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto text-center mx-auto">
            <Navbar.Brand className="text-center ">
              <NavLink
                className={"text-white "}
                style={{ textDecoration: "none" }}
                to="/dashboard"
              >
                <div className="lead">
                  Crime<span className="text-danger">Rary</span> | Admin Panel
                </div>
              </NavLink>
            </Navbar.Brand>
            {/* <Nav.Link href="#home">Crimes</Nav.Link>
            <Nav.Link href="#features">Criminals</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
