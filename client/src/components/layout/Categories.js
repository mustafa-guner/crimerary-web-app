import React from "react";
import { NavLink } from "react-router-dom";
const Categories = ({ categories }) => {
  return (
    <ul>
      {categories.map((category) => {
        return (
          <li key={category._id}>
            <NavLink to="#">
              {category.category} <span>(25)</span>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
