import React from "react";
import PropTypes from "prop-types";
import { Table, Row, Col } from "react-bootstrap";

const CriminalsTable = (props) => {
  return (
    <div>
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Col>
            <div class="card p-4">
              <div class=" image d-flex flex-column justify-content-center align-items-center">
                {" "}
                <button class="btn btn-secondary">
                  {" "}
                  <img
                    src="https://i.imgur.com/wvxPV9S.png"
                    height="100"
                    width="100"
                  />
                </button>{" "}
                <span class="name mt-3">Eleanor Pena</span>{" "}
                <div class=" d-flex mt-2">
                  {" "}
                  <button class="btn1 btn-dark mr-2">Edit </button>{" "}
                  <button class="btn1 btn-danger">Remove </button>{" "}
                </div>
                <div class="text mt-3">
                  {" "}
                  <span>
                    Eleanor Pena is a creator of minimalistic x bold graphics
                    and digital artwork.
                    <br />
                  </span>{" "}
                </div>
                <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                  {" "}
                  <span>
                    <i class="fa fa-twitter"></i>
                  </span>{" "}
                  <span>
                    <i class="fa fa-facebook-f"></i>
                  </span>{" "}
                  <span>
                    <i class="fa fa-instagram"></i>
                  </span>{" "}
                  <span>
                    <i class="fa fa-linkedin"></i>
                  </span>{" "}
                </div>
                <div class=" px-2 rounded mt-4 date ">
                  {" "}
                  <span class="join">Joined May,2021</span>{" "}
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

CriminalsTable.propTypes = {};

export default CriminalsTable;
