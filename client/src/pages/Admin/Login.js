import React, { useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { login } from "../../redux/actions/auth";
import { Navigate } from "react-router-dom";

const Login = ({ auth, login }) => {
  const [disable, setDisable] = useState(false);

  const [formData, setFormData] = useState({
    // username: "musdy.guner",
    // password: "asdf123",
  });

  const { username, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    setDisable(true);
    e.preventDefault();

    login(formData).then(() => {
      setDisable(false);
    });
  };

  if (auth.isAuth) return <Navigate to="/dashboard" />;

  return (
    <div
      className="d-flex justify-space-between align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="col-5 d-flex flex-column  align-items-center ">
        <h1 className="display-2 my-2">
          Crime<span className="text-danger">Rary</span>
        </h1>
        <p className="lead text-underline">Admin Panel Login</p>
        {disable && (
          <div className="spinner-border " role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}
        {auth.isRestricted && (
          <p className="text-danger">You are restricted for a while.</p>
        )}
        <form onSubmit={handleSubmit}>
          <label className="d-block lead">username:</label>
          <input
            type="text"
            name="username"
            value={username}
            disabled={disable}
            placeholder="Enter username"
            onChange={(e) => handleChange(e)}
          />

          <label className="d-block mt-3 lead">password:</label>
          <input
            type="password"
            name="password"
            value={password}
            disabled={disable}
            placeholder="Enter password"
            onChange={(e) => handleChange(e)}
          />

          <button
            disabled={disable}
            className="d-block my-2 btn btn-dark w-100"
          >
            Login
          </button>
        </form>
      </div>
      <div
        className=" col-lg-7 w-75 p-4"
        style={{
          width: "100%",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",

          backgroundImage:
            "url('https://cdn.dribbble.com/users/286340/screenshots/7379890/media/3dda66ea8bd1863d6c7229d4e3b0b4da.jpg?compress=1&resize=1000x750&vertical=top')",
        }}
      ></div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { login })(Login);
