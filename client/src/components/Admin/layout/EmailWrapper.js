import React from "react";

const EmailWrapper = () => {
  return (
    <div className="email-desc-wrapper">
      <div className="email-header">
        <div className="email-date">Dec 1, 2019 12:02 PM</div>
        <div className="email-subject">Report New Missing Person</div>
        <p className="recipient">
          <span>From:</span> Paul Smith &lt;paul.smith@domain.com&gt;
        </p>
      </div>
      <div className="email-body">
        <p>Hi Jacob,</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan
          orci ac urna tristique luctus. Duis sollicitudin quam eu ante
          faucibus, in fringilla sem placerat. Praesent eget nisi quis mauris
          luctus dignissim. Nullam vel commodo augue, vitae auctor odio. Sed vel
          placerat nisi. Aliquam erat volutpat. Etiam mattis nisl magna, vel
          laoreet dolor hendrerit ut.
        </p>
        <p>
          Etiam condimentum accumsan ligula eu ornare. Ut bibendum, lacus et
          tempus molestie, eros velit tincidunt felis, in dictum dolor nulla non
          dolor. Nulla ut dui gravida, interdum massa non, egestas lacus.
          Praesent hendrerit nisl pellentesque massa aliquam, nec ultrices risus
          condimentum.
        </p>
        <p>
          Thanks &amp; Regards <br />
          Julian Cruise
        </p>
      </div>

      <div className="email-action">
        <button
          className="btn text-white"
          style={{ backgroundColor: "#DC2E32" }}
        >
          Reject
        </button>
        <button className="btn btn-dark text-white">Confirm</button>
      </div>
    </div>
  );
};

export default EmailWrapper;
