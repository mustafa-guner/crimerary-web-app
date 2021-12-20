import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";
const CriminalsForm = (props) => {
  return (
    <div>
      <Link to="/dashboard/criminals" className="mb-3 nav-link pl-0">
        <i class="fas fa-long-arrow-alt-left"></i> Back
      </Link>
      <h1 className="lead mb-4" style={{ fontSize: "2rem" }}>
        Criminals Form
      </h1>
      <Form>
        <Row xs={1} md={3}>
          <Col className="my-2">
            <Form.Label>Enter Name of Criminal</Form.Label>
            <Form.Control placeholder="First name" />
          </Col>
          <Col className="my-2">
            <Form.Label>Enter Surname of Criminal</Form.Label>
            <Form.Control placeholder="Last name" />
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
            <Form.Label>Select Crime Category Commited</Form.Label>
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
