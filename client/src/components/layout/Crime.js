import React from "react";
import { NavLink } from "react-router-dom";
import Moment from "react-moment";
const Crime = ({ crime }) => {
  return (
    <article className="entry" key={crime._id}>
      <div className="entry-img">
        <img src={`${crime.photo}`} alt="" className="img-fluid" />
      </div>

      <h2 className="entry-title">
        <NavLink to="crimes-single.html">{crime.title}</NavLink>
      </h2>

      <div className="entry-meta">
        <ul>
          <li className="d-flex align-items-center">
            <i className="fas fa-users text-danger align-self-center"></i>{" "}
            {crime.criminals.map((criminal) => {
              return (
                <li key={criminal._id} className="align-self-center mr-1">
                  {criminal.firstName} {criminal.lastName}
                </li>
              );
            })}
          </li>
          <li className="d-flex align-items-center">
            <NavLink to="crimes-single.html">
              <Moment format="YYYY/MM/DD">{crime.commitedAt}</Moment>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="entry-content">
        <p>{crime.description}</p>
        <div className="read-more">
          <NavLink to="crimes-single.html">Read More</NavLink>
        </div>
      </div>
    </article>
  );
};

export default Crime;
