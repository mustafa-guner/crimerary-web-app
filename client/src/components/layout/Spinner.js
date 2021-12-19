import React from "react";
import { Link } from "react-router-dom";
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
      <h1 className="display-4">Loading</h1>

      <div className="spinner-border " role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
