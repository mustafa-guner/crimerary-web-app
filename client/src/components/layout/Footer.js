import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>CypSoft</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by{" "}
          <NavLink className={"text-danger"} to="/">
            CypSoft
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
