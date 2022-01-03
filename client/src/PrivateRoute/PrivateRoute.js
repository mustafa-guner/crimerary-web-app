import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import Spinner from "../components/layout/Spinner";
import NavigationBar from "../components/Admin/layout/Navbar";
import Menu from "../components/Admin/layout/Menu";
import { logout } from "../redux/actions/auth";
import { dashboard } from "../redux/actions/dashboard";
import Dashboard from "../pages/Admin/Dashboard";

const PrivateRoute = ({
  children,
  auth: { loading, isAuth, token },
  logout,
  dashboard,
}) => {
  return loading && token ? (
    <Spinner />
  ) : isAuth ? (
    <>
      <NavigationBar />

      <Menu handleLogout={() => logout()} dashboard={dashboard} />
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
  dashboard: state.dashboard.dashboard,
});

export default connect(mapStateToProps, { logout, dashboard }, null, {
  pure: false,
})(PrivateRoute);
