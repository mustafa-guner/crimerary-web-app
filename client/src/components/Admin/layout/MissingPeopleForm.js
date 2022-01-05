import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";
import { createMissingPerson } from "../../../redux/actions/missingPerson";
import { connect } from "react-redux";

const MissingPeopleForm = ({ createMissingPerson }) => {
  const [missingPersonData, setMissingPersonDat] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    bio: "",
    fromDate: "",
    lastSeenLocation: "",
  });

  const [image, setImage] = useState({ photo: "" });
  const [disable, setDisable] = useState(false);
  const { firstName, lastName, gender, dob, bio, lastSeenLocation, fromDate } =
    missingPersonData;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    missingPersonData.photo = image.photo;

    formData.append("firstName", missingPersonData.firstName.trim());
    formData.append("lastName", missingPersonData.lastName.trim());
    formData.append("photo", missingPersonData.photo);
    formData.append("fromDate", missingPersonData.fromDate);
    formData.append("lastSeenLocation", missingPersonData.lastSeenLocation);
    formData.append("dob", missingPersonData.dob);
    formData.append("gender", missingPersonData.gender);
    formData.append("bio", missingPersonData.bio.trim());

    setDisable(true);
    createMissingPerson(formData).then(() => {
      setDisable(false);
    });
  };

  const handleChange = (e) => {
    setMissingPersonDat({
      ...missingPersonData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImage({ ...image, photo: e.target.files[0] });
  };
  return (
    <div>
      <Link to="/dashboard/missing-people" className="mb-3 nav-link pl-0">
        <i class="fas fa-long-arrow-alt-left"></i> Back
      </Link>
      <h1 className="lead mb-4" style={{ fontSize: "2rem" }}>
        Missing Person Form
      </h1>
      <Form onSubmit={handleSubmit}>
        <Row xs={1} md={3}>
          <Col className="my-2">
            <Form.Label>Enter Name of Missing Person</Form.Label>
            <Form.Control
              placeholder="First name"
              name="firstName"
              onChange={(e) => handleChange(e)}
              value={firstName}
              disabled={disable}
            />
          </Col>
          <Col className="my-2">
            <Form.Label>Enter Surname of Missing Person</Form.Label>
            <Form.Control
              placeholder="Last name"
              name="lastName"
              disabled={disable}
              value={lastName}
              onChange={(e) => handleChange(e)}
            />
          </Col>
          <Col className="my-2">
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload Image of Missing Person</Form.Label>
              <Form.Control
                type="file"
                onChange={handleImageChange}
                disabled={disable}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="my-4" xs={1} md={3}>
          <Col className="my-2">
            <Form.Group controlId="dob">
              <Form.Label>Choose DOB of Missing Person</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                disabled={disable}
                value={dob}
                onChange={(e) => handleChange(e)}
                placeholder="Date of Birth"
              />
            </Form.Group>
          </Col>

          <Col className="my-2">
            <Form.Label>Last Seen Location</Form.Label>
            <Form.Control
              placeholder="Location"
              name="lastSeenLocation"
              onChange={(e) => handleChange(e)}
              value={lastSeenLocation}
              disabled={disable}
            />
          </Col>

          <Col className="my-2">
            <Form.Group controlId="dob">
              <Form.Label> Date of Disappearance (From)</Form.Label>
              <Form.Control
                type="date"
                name="fromDate"
                disabled={disable}
                value={fromDate}
                onChange={(e) => handleChange(e)}
                placeholder="From Date"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row lg={3}>
          <Col className="align-self-center my-2">
            <Form.Label className="d-block">
              Select Gender of Missing person
            </Form.Label>
            <Form.Check
              inline
              label="male"
              name="gender"
              value={"male"}
              disabled={disable}
              type={"radio"}
              onChange={(e) => handleChange(e)}
              id={`inline-${"radio"}-2`}
            />
            <Form.Check
              inline
              label="female"
              name="gender"
              value={"female"}
              disabled={disable}
              type={"radio"}
              onChange={(e) => handleChange(e)}
              id={`inline-${"radio"}-2`}
            />
          </Col>
        </Row>

        <Row xs={1} md={1} className="my-4">
          <Col className="my-2">
            <Form.Control
              as="textarea"
              name="bio"
              value={bio}
              disabled={disable}
              onChange={(e) => handleChange(e)}
              placeholder="Leave brief bio here"
              style={{ height: "100px" }}
            />
          </Col>
        </Row>
        <Row xs={1} md={4}>
          <Col className="my-2">
            <button
              disabled={disable}
              className="btn btn-success  w-100 text-center"
            >
              Save{" "}
              {disable && (
                <span
                  className="spinner-border spinner-border-sm text-light "
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </span>
              )}
            </button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

MissingPeopleForm.propTypes = {};

export default connect(null, { createMissingPerson })(MissingPeopleForm);
