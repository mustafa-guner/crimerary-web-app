import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import Spinner from "../components/layout/Spinner";
import NavigationBar from "../components/Admin/layout/Navbar";
import Menu from "../components/Admin/layout/Menu";
import { logout } from "../redux/actions/auth";
import Dashboard from "../pages/Admin/Dashboard";

const PrivateRoute = ({
  children,
  auth: { loading, isAuth, token },
  logout,
}) => {
  return loading && token ? (
    <Spinner />
  ) : isAuth ? (
    <>
      <NavigationBar />
      <Menu handleLogout={() => logout()} />
      <Dashboard children={children} />
    </>
  ) : (
    <Navigate to={"/login"} />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout }, null, { pure: false })(
  PrivateRoute
);
