import React from "react";
import MissingPeopleList from "../../components/Admin/layout/MissingPeopleList";
import { Link } from "react-router-dom";
const Criminals = (props) => {
  return (
    <div>
      <Link to="/dashboard/add-missing-person" className="mb-3 nav-link pl-0">
        Add New Missing Person
      </Link>
      <MissingPeopleList />
    </div>
  );
};

export default Criminals;
