import React from "react";
import PropTypes from "prop-types";
import CrimesList from "../../components/Admin/layout/CrimesList";
import { Link } from "react-router-dom";

const Crimes = (props) => {
  return (
    <div>
      <Link to="/dashboard/add-crime-post" className="mb-3 nav-link pl-0">
        Add New Crime
      </Link>
      <CrimesList />
    </div>
  );
};

Crimes.propTypes = {};

export default Crimes;
