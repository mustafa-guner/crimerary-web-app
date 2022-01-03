import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { connect } from "react-redux";

const Menu = ({ handleLogout, auth: { loading, user } }) => {
  return (
    <Navbar collapseOnSelect expand="lg" className="my-4">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Home</Nav.Link>

            <Nav.Link href="/dashboard/criminals">Criminals</Nav.Link>
            <Nav.Link href="/dashboard/crimes">Crimes</Nav.Link>
            <Nav.Link href="/dashboard/missing-people">Missing People</Nav.Link>
            <Nav.Link href="/dashboard/forms">Forms</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              className="nav-link"
              href="#"
              id="userDropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                {user && !loading && user.firstName}{" "}
                {user && !loading && user.lastName}
              </span>
              <img
                className="img-profile rounded-circle"
                style={{ width: "30px", height: "30px", objectFit: "cover" }}
                src="https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
              />
            </Nav.Link>
            <Nav.Link className="nav-link" onClick={handleLogout}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

Menu.propTypes = {};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Menu);
