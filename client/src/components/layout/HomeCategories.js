import React from "react";
import { NavLink } from "react-router-dom";
const Categories = ({ categories }) => {
  return categories.map((category) => {
    return (
      <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
        <div className="icon-box">
          <div className="icon">
            <i className="fas fa-balance-scale"></i>
          </div>
          <h4>
            <NavLink to={`/crimes?category=${category.category}`}>
              {category.category}
            </NavLink>
          </h4>
          <p>
            Voluptatum deleniti atque corrupti quos dolores et quas molestias
            excepturi
          </p>
        </div>
      </div>
    );
  });
};

export default Categories;
