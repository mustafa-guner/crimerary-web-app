import React from "react";
import PropTypes from "prop-types";
import "./Forms.css";
import EmailWrapper from "../../components/Admin/layout/EmailWrapper";
import EmailListItem from "../../components/Admin/layout/EmailListItem";
const Forms = (props) => {
  return (
    <div className="email-app card-margin">
      <div className="email-list-wrapper">
        <div
          id="email-app-body"
          className="email-list-scroll-container ps ps--active-y"
        >
          <ul className="email-list">
            <EmailListItem />
          </ul>
        </div>
      </div>
      <EmailWrapper />
    </div>
  );
};

Forms.propTypes = {};

export default Forms;
