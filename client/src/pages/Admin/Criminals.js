import React from "react";

import CriminalsList from "../../components/Admin/layout/CriminalsList";
import { Link } from "react-router-dom";
const Criminals = (props) => {
  return (
    <div>
      <Link to="/dashboard/add-criminal" className="mb-3 nav-link pl-0">
        Add New Criminal
      </Link>
      <CriminalsList />
    </div>
  );
};

export default Criminals;
