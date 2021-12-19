import React from "react";
import PropTypes from "prop-types";

const Summary = (props) => {
  return (
    <div className="container-fluid mt-4">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800"> Overall Summary</h1>
      </div>

      <div className="row">
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 p-4">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Crime Posts
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    x15
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-gavel fa-2x text-black-50"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 p-4">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Criminals
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    x25
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-ambulance fa-2x text-black-50"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 p-4">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Missing People
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    x50
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-user-alt-slash fa-2x text-black-50"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 p-4">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Total Forms
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    x40
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-folder-open fa-2x text-black-50"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-sm-flex align-items-center my-4">
        <h1 className="h3 mb-0 text-gray-800"> Peronal Summary </h1>{" "}
        <p
          className="font-weight-normal lead"
          style={{ color: "gray", alignSelf: "center" }}
        >
          (you)
        </p>
      </div>

      <div className="row">
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 p-4">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Crime Posts Added
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    x15
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-gavel fa-2x text-black-50"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 p-4">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Criminals Added
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    x40
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-ambulance fa-2x text-black-50"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 p-4">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Missing People Added
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    x50
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-user-alt-slash fa-2x text-black-50"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Summary.propTypes = {};

export default Summary;
