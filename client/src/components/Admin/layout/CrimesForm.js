import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";
const CrimesForm = (props) => {
  return (
    <div>
      <Link to="/dashboard/crimes" className="mb-3 nav-link pl-0">
        <i class="fas fa-long-arrow-alt-left"></i> Back
      </Link>
      <h1 className="lead mb-4" style={{ fontSize: "2rem" }}>
        Crimes Form
      </h1>
      <Form>
        <Row xs={1} md={3}>
          <Col className="my-2">
            <Form.Label>Enter Title of Crime</Form.Label>
            <Form.Control placeholder="Title" />
          </Col>
          <Col className="my-2">
            <Form.Label>Enter Location of Crime</Form.Label>
            <Form.Control placeholder="Location" />
          </Col>
          <Col className="my-2">
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload Image of Crime</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="my-4" xs={1} md={3}>
          <Col className="my-2">
            <Form.Label>Choose Criminals</Form.Label>
            <Form.Select
              className="me-sm-2"
              id="inlineFormCustomSelect"
              multiple={true}
            >
              <option value="0">Choose...</option>
              <option value="1">John Doe</option>
              <option value="2">Jen Doe</option>
              <option value="3">James Doe</option>
              <option value="0">Danny Doe...</option>
              <option value="1">Jack Doe</option>
              <option value="2">Johnson Doe</option>
              <option value="3">For Doe</option>
            </Form.Select>
          </Col>
          <Col className="my-2">
            <Form.Group controlId="dob">
              <Form.Label>Choose Crime Commited Date</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                placeholder="Date of Birth"
              />
            </Form.Group>
          </Col>

          <Col className="my-2">
            <Form.Label>Select Crime Category</Form.Label>
            <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
              <option value="0">Choose...</option>
              <option value="1">Rape</option>
              <option value="2">Kill</option>
              <option value="3">Fight</option>
            </Form.Select>
          </Col>
        </Row>

        <Row xs={1} md={1} className="my-4">
          <Col className="my-2">
            <Form.Control
              as="textarea"
              placeholder="Leave description here"
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

CrimesForm.propTypes = {};

export default CrimesForm;
