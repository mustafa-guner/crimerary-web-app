import React from "react";
import errorPage from "../../images/404.png";
import Navbar from "../../components/Admin/layout/Navbar";
const Error = () => {
  return (
    <>
      <Navbar />
      <div className="container text-center d-flex flex-column align-items-center justify-content-center h-100 ">
        <div className="display-4 text-black-50">404 Page is not found</div>
        <img
          style={{ width: "50px", height: "50px" }}
          src={errorPage}
          alt="404 Page Not Found"
        />
      </div>
    </>
  );
};

export default Error;
