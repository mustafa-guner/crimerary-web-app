import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";
const CriminalsForm = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    bio: "",
  });

  const { firstName, lastName, gender, dob, bio } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Link to="/dashboard/criminals" className="mb-3 nav-link pl-0">
        <i class="fas fa-long-arrow-alt-left"></i> Back
      </Link>
      <h1 className="lead mb-4" style={{ fontSize: "2rem" }}>
        Criminals Form
      </h1>
      <Form onSubmit={handleSubmit}>
        <Row xs={1} md={3}>
          <Col className="my-2">
            <Form.Label>Enter Name of Criminal</Form.Label>
            <Form.Control
              placeholder="First name"
              name="firstName"
              onChange={(e) => handleChange(e)}
              value={firstName}
            />
          </Col>
          <Col className="my-2">
            <Form.Label>Enter Surname of Criminal</Form.Label>
            <Form.Control
              placeholder="Last name"
              name="lastName"
              value={lastName}
              onChange={(e) => handleChange(e)}
            />
          </Col>
          <Col className="my-2">
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload Image of Criminal</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="my-4" xs={1} md={3}>
          <Col className="my-2">
            <Form.Label>Select Commited Crime Category</Form.Label>
            <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
              <option value="0">Choose...</option>
              <option value="1">Rape</option>
              <option value="2">Kill</option>
              <option value="3">Fight</option>
            </Form.Select>
          </Col>
          <Col className="my-2">
            <Form.Group controlId="dob">
              <Form.Label>Choose DOB of Criminal</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                value={dob}
                onChange={(e) => handleChange(e)}
                placeholder="Date of Birth"
              />
            </Form.Group>
          </Col>
          <Col className="align-self-center my-2">
            <Form.Label className="d-block">
              Select Gender of Criminal
            </Form.Label>
            <Form.Check
              inline
              label="male"
              name="gender"
              type={"radio"}
              onChange={(e) => handleChange(e)}
              id={`inline-${"radio"}-2`}
            />
            <Form.Check
              inline
              label="female"
              name="gender"
              type={"radio"}
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
              onChange={(e) => handleChange(e)}
              placeholder="Leave brief bio here"
              style={{ height: "100px" }}
            />
          </Col>
        </Row>
        <Row xs={1} md={4}>
          <Col className="my-2">
            <button className="btn btn-success  w-100 text-center">Save</button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

CriminalsForm.propTypes = {};

export default CriminalsForm;
