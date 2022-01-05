import React, { useEffect, useState } from "react";
import NavigationBar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { NavLink } from "react-router-dom";
import { getCriminals, getCriminalBySearch } from "../redux/actions/criminals";
import { connect } from "react-redux";
import { Row, Col, Modal } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const Criminals = ({ criminals, getCriminals, getCriminalBySearch }) => {
  const [criminalSearch, setCriminalSearch] = useState({ q: "" });
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchLoading, setSearchLoading] = useState(false);

  const handleCriminalChange = (e) => {
    setCriminalSearch({
      ...criminalSearch.q,
      [e.target.name]: e.target.value,
    });
  };

  const handleCriminalSearch = (e) => {
    e.preventDefault();

    setSearchParams({ q: criminalSearch.q });
    setSearchLoading(true);
    getCriminalBySearch(criminalSearch.q).then(() => {
      setSearchLoading(false);
    });
  };

  useEffect(() => {
    if (searchParams.get("q")) {
      setSearchLoading(true);
      getCriminalBySearch(searchParams.get("q")).then(() => {
        setSearchLoading(false);
      });
    } else {
      getCriminals();
    }
  }, [getCriminals, getCriminalBySearch]);
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
            <div className="sidebar-item search-form my-4">
              <form className="w-25 d-flex" onSubmit={handleCriminalSearch}>
                <input
                  type="text"
                  placeholder="Search for criminal"
                  className="form-control"
                  name="q"
                  onChange={(e) => handleCriminalChange(e)}
                />
                <button type="submit" className="btn btn-danger btn-sm ml-1">
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>
            <Row xs={1} md={5} className="g-4">
              {criminals.criminals &&
              criminals.criminals.length > 0 &&
              !criminals.loading
                ? criminals.criminals.map((criminal, idx) => (
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
                : criminals.criminals.length === 0 && <h3>No Criminals</h3>}

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

        {searchLoading && (
          <Modal
            show={searchLoading}
            centered
            backdrop="static"
            keyboard={false}
          >
            <Modal.Body className="text-center">
              <h3
                id="contained-modal-title-vcenter"
                className="text-center  my-4"
              >
                Loading
              </h3>
              <div className="spinner-border text-center" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </Modal.Body>
          </Modal>
        )}
      </main>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  criminals: state.criminals,
});

export default connect(mapStateToProps, { getCriminals, getCriminalBySearch })(
  Criminals
);
