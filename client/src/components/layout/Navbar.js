import React from "react";
import { NavLink } from "react-router-dom";
import "../../pages/App.css";

const NavigationBar = () => {
  return (
    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <h1>
            <NavLink to="/">
              Crime<span>rary</span>{" "}
            </NavLink>
          </h1>
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/team">Team</NavLink>
            </li>
            <li>
              <NavLink to="/crimes">Crimes</NavLink>
            </li>
            <li>
              <NavLink to="/criminals">Criminals</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;
