import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Card } from "react-bootstrap";
const CrimesList = (props) => {
  return (
    <Row xs={1} md={5} className="g-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://wallpaperaccess.com/full/2015338.jpg"
            />
            <Card.Body>
              <Card.Title>Crime title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <button className="btn btn-dark mr-2">Edit</button>
              <button className="btn btn-danger">Remove</button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

CrimesList.propTypes = {};

export default CrimesList;
