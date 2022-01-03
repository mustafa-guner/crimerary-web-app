import React, { useEffect } from "react";
import NavigationBar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { NavLink } from "react-router-dom";
import { getCriminals } from "../redux/actions/criminals";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";

const Criminals = ({ criminals, getCriminals }) => {
  useEffect(() => {
    getCriminals();
    console.log(criminals);
  }, [getCriminals]);
  return (
    <>
      <NavigationBar />
      <main id="main">
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <NavLink className={"text-danger"} to="/">
                  Home
                </NavLink>
              </li>
              <li>Criminals</li>
            </ol>
            <h2>Criminals</h2>
          </div>
        </section>
        <section id="team" className="team">
          <div className="container">
            <Row xs={1} md={5} className="g-4">
              {criminals.criminals &&
              criminals.criminals.length &&
              !criminals.loading ? (
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
                ))
              ) : criminals.length === 0 ? (
                <h3>No Criminals</h3>
              ) : (
                <h3>Loading</h3>
              )}

              {/* {disable && (
          <Col className="align-self-center">
            <div className="spinner-border text-success " role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </Col>
        )} */}
            </Row>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  criminals: state.criminals,
});

export default connect(mapStateToProps, { getCriminals })(Criminals);
