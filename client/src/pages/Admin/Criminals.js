import React from "react";
import PropTypes from "prop-types";
import CriminalsList from "../../components/Admin/layout/CriminalsList";
import { Link } from "react-router-dom";
const Criminals = (props) => {
  return (
    <div>
      <Link to="/add-criminal" className="mb-3 nav-link pl-0">
        Add New Criminal
      </Link>
      <CriminalsList />
    </div>
  );
};

Criminals.propTypes = {};

export default Criminals;
