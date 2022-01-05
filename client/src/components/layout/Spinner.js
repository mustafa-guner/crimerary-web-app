import React from "react";
import { Link } from "react-router-dom";
import detectiveImage from "../../images/crime2.jpg";
const Spinner = () => {
  return (
    <div
      className="d-flex justify-content-center  h-100"
      style={{
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        position: "fixed",
        left: "0",
        right: "0",
        overflow: "auto",
        height: "100vh",
      }}
    >
      <img src={`${detectiveImage}`} />
      <h1 className="display-2 my-2">
        Crime<span className="text-danger">Rary</span>
      </h1>
      <div className="spinner-border my-2 " role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
