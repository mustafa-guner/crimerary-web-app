import React from "react";

const EmailListItem = () => {
  return (
    <li className="email-list-item active">
      <div className="recipient">
        <a href="#" className="recipient-name">
          Pepper Potts
        </a>
      </div>
      <a href="#" className="email-subject">
        Reporting of New Missing Person<i className="unread">&nbsp;</i>
      </a>
    </li>
  );
};

export default EmailListItem;
