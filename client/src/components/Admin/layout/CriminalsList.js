import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import { getCriminals } from "../../../redux/actions/criminals";
import { connect } from "react-redux";
import { getCriminal } from "../../../redux/actions/criminals";
import { useNavigate } from "react-router-dom";
import { removeCriminal } from "../../../redux/actions/criminals";
import noData from "../../../images/no data.svg";
import Swal from "sweetalert2";
const CriminalsTable = ({
  criminals,
  getCriminals,
  getCriminal,
  removeCriminal,
}) => {
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    getCriminals();
  }, [getCriminals]);

  const handleRemove = (criminalID) => {
    Swal.fire({
      title: "Confirm your password",
      html: `
      <input type="password" id="password"  autocomplete="off" class="p-2 rounded " placeholder="Password">`,
      confirmButtonText: "Confirm",
      confirmButtonColor: "#212529",
      focusConfirm: false,
      preConfirm: () => {
        const password = Swal.getPopup().querySelector("#password").value;
        if (!password) {
          Swal.showValidationMessage(`Please enter your password.`);
        }
        return { password: password };
      },
    }).then((result) => {
      console.log(result.value.password);
      return removeCriminal(criminalID, result.value.password);
    });
  };

  return (
    <div>
      <Row xs={1} md={5} className="g-4">
        {criminals.criminals &&
          criminals.criminals.length > 0 &&
          !criminals.loading &&
          criminals.criminals.map((criminal, idx) => (
            <Col>
              <div className="card p-4">
                <div className=" image d-flex flex-column justify-content-center align-items-center">
                  {" "}
                  <img
                    src={criminal.photo}
                    height="100"
                    width="100"
                    style={{ objectFit: "cover" }}
                  />
                  <span className="name mt-3">
                    {criminal.firstName} {criminal.lastName}
                  </span>{" "}
                  <div className=" d-flex mt-2">
                    {" "}
                    <button
                      className="btn1 btn-dark mr-2"
                      onClick={() => {
                        setDisable(true);
                        getCriminal(criminal._id).then(() => {
                          setDisable(false);
                          return navigate(
                            `/dashboard/edit-criminal/${criminal._id}`
                          );
                        });
                      }}
                    >
                      Edit{" "}
                    </button>{" "}
                    <button
                      className="btn1 btn-danger"
                      onClick={() => handleRemove(criminal._id)}
                    >
                      Remove{" "}
                    </button>{" "}
                  </div>
                  <div className="text mt-3">
                    {" "}
                    <span>
                      {criminal.bio.length > 20
                        ? criminal.bio.substring(0, 15) + "..."
                        : criminal.bio}
                      <br />
                    </span>{" "}
                  </div>
                  <div className=" px-2 rounded mt-4 border border-danger text-danger ">
                    {criminal.gender}
                  </div>
                  <div className=" px-2 rounded mt-4 date ">
                    {" "}
                    <span className="join">
                      {new Date().getFullYear() -
                        new Date(criminal.dob).getFullYear()}{" "}
                      years old
                    </span>{" "}
                  </div>
                </div>
              </div>
            </Col>
          ))}

        {/* {disable && (
          <Col className="align-self-center">
            <div className="spinner-border text-success " role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </Col>
        )} */}
      </Row>
      <Row>
        {criminals.criminals.length === 0 && (
          <div className="text-center">
            {" "}
            <h1 className="display-4 text-center text-black-50 p-4">
              No Criminals Found
            </h1>
            <img
              style={{ width: "80px", height: "80px" }}
              src={noData}
              alt="No Data Found"
            />{" "}
          </div>
        )}
      </Row>
    </div>
  );
};

CriminalsTable.propTypes = {};
const mapStateToProps = (state) => ({
  criminals: state.criminals,
});
export default connect(mapStateToProps, {
  getCriminals,
  getCriminal,
  removeCriminal,
})(CriminalsTable);
