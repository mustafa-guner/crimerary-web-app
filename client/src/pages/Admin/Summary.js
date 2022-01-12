import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { getCrimes } from "../../redux/actions/crimes";
import { getCriminals } from "../../redux/actions/criminals";
import { getAllMissingPeople } from "../../redux/actions/missingPerson";
import { getForms } from "../../redux/actions/form";
import { connect } from "react-redux";

const Summary = ({
  crimes,
  criminals,
  missingPerson,
  forms,
  getCrimes,
  auth,
  getCriminals,
  getAllMissingPeople,
  getForms,
}) => {
  useEffect(() => {
    getCrimes();
    getCriminals();
    getAllMissingPeople();
    getForms();
  }, [getCrimes, getCriminals, getAllMissingPeople, getForms]);

  return (
    <div className="container-fluid mt-4">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800"> Overall Summary</h1>
      </div>

      {crimes &&
        criminals &&
        missingPerson &&
        forms &&
        !crimes.loading &&
        !criminals.loading &&
        !forms.loading &&
        !missingPerson.loading && (
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
                        x {crimes.crimes.length}
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
                        x {criminals.criminals.length}
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
                        x {missingPerson.missingPeople.length}
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
                        x {forms.forms.length}
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
        )}

      {/* <div className="d-sm-flex align-items-center my-4">
        <h1 className="h3 mb-0 text-gray-800"> Peronal Summary </h1>{" "}
        <p
          className="font-weight-normal lead"
          style={{ color: "gray", alignSelf: "center" }}
        >
          (you)
        </p>
      </div> */}

      {/* <div className="row">
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 p-4">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Crime Posts Added
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    x{" "}
                    {
                      crimes.crimes.filter(
                        (crime) => crime.createdBy === auth.user._id
                      ).length
                    }
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
                    x{" "}
                    {
                      criminals.criminals.filter(
                        (criminal) => criminal.createdBy === auth.user._id
                      ).length
                    }
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
                    x{" "}
                    {
                      crimes.crimes.filter(
                        (crime) => crime.createdBy === auth.user._id
                      ).length
                    }
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-user-alt-slash fa-2x text-black-50"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

Summary.propTypes = {};

const mapStateToProps = (state) => ({
  crimes: state.crimes,
  criminals: state.criminals,
  missingPerson: state.missingPerson,
  forms: state.form,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getCrimes,
  getAllMissingPeople,
  getCriminals,
  getForms,
})(Summary);
