import React from "react";

const EmailListItem = ({ form, handleChange }) => {
  return (
    <li className="email-list-item active">
      <div className="recipient">
        <a href="#" className="recipient-name">
          {form.senderName}
        </a>
      </div>
      <button
        href="#"
        className="email-subject"
        style={{ border: "none", color: "#CA3244", background: "none" }}
        onClick={() => {
          return handleChange(form);
        }}
      >
        {form.title}
        <i className="unread">&nbsp;</i>
      </button>
    </li>
  );
};

export default EmailListItem;
