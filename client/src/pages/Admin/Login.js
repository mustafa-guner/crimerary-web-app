import React, { useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { login } from "../../redux/actions/auth";
import { Navigate } from "react-router-dom";

const Login = ({ isAuth, login, loading }) => {
  const [formData, setFormData] = useState({
    username: "musdy.guner",
    password: "asdf123",
  });

  const { username, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  if (isAuth) return <Navigate to="/dashboard" />;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1 className="display-2 my-2">
        Crime<span className="text-danger">Rary</span>
      </h1>
      <p className="lead text-underline">Admin Panel Login</p>
      <form onSubmit={handleSubmit}>
        <label className="d-block lead">username:</label>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Enter username"
          onChange={(e) => handleChange(e)}
        />

        <label className="d-block mt-3 lead">password:</label>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter password"
          onChange={(e) => handleChange(e)}
        />

        <button className="d-block my-2 btn btn-success">Login</button>
      </form>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { login })(Login);
