import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import {
  getAllMissingPeople,
  removeMissingPerson,
} from "../../../redux/actions/missingPerson";
import { connect } from "react-redux";
import { getCriminal } from "../../../redux/actions/criminals";
import { useNavigate } from "react-router-dom";
import { removeCriminal } from "../../../redux/actions/criminals";
import noData from "../../../images/no data.svg";
import Swal from "sweetalert2";

const MissingPeopleList = ({
  missingPeople,
  getAllMissingPeople,
  getCriminal,
  removeMissingPerson,
}) => {
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    getAllMissingPeople();
  }, [getAllMissingPeople]);

  console.log(missingPeople);
  const handleRemove = (missinPersonID) => {
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
      return removeMissingPerson(missinPersonID, result.value.password);
    });
  };

  return (
    <div>
      <Row xs={1} md={5} className="g-4">
        {missingPeople.missingPeople &&
          missingPeople.missingPeople.length > 0 &&
          !missingPeople.loading &&
          missingPeople.missingPeople.map((missingPerson, idx) => (
            <Col>
              <div className="card p-4">
                <div className=" image d-flex flex-column justify-content-center align-items-center">
                  {" "}
                  <p className="lead">Missing</p>
                  <img
                    src={missingPerson.photo}
                    height="100"
                    width="100"
                    style={{ objectFit: "cover" }}
                  />
                  <span className="name mt-3">
                    {missingPerson.firstName} {missingPerson.lastName}
                  </span>{" "}
                  <div className=" d-flex mt-2">
                    {" "}
                    <button className="btn1 btn-dark mr-2">Edit </button>{" "}
                    <button
                      className="btn1 btn-danger"
                      onClick={() => {
                        return handleRemove(missingPerson._id);
                      }}
                    >
                      Remove{" "}
                    </button>{" "}
                  </div>
                  <div className="text mt-3">
                    {" "}
                    <span>
                      {missingPerson.bio.length > 20
                        ? missingPerson.bio.substring(0, 15) + "..."
                        : missingPerson.bio}
                      <br />
                    </span>{" "}
                  </div>
                  <div className=" px-2 rounded mt-4 border border-danger text-danger ">
                    {missingPerson.gender}
                  </div>
                  <div className=" px-2 rounded mt-4 date ">
                    {" "}
                    <span className="join">
                      {new Date().getFullYear() -
                        new Date(missingPerson.dob).getFullYear()}{" "}
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
        {missingPeople.missingPeople.length === 0 && (
          <div className="text-center">
            {" "}
            <h1 className="display-4 text-center text-black-50 p-4">
              No Missing People Found
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

MissingPeopleList.propTypes = {};
const mapStateToProps = (state) => ({
  missingPeople: state.missingPerson,
});
export default connect(mapStateToProps, {
  getAllMissingPeople,

  getCriminal,
  removeMissingPerson,
})(MissingPeopleList);
