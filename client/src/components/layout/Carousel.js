import React from "react";
import { Carousel } from "react-bootstrap";
import Moment from "react-moment";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
const Carousels = ({ missingPeople }) => {
  return (
    <>
      <Carousel
        variant="dark"
        className="h-100 py-4"
        style={{
          height: "100vh !important",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage:
            "url('https://bloximages.chicago2.vip.townnews.com/globegazette.com/content/tncms/assets/v3/editorial/9/7d/97decab0-8486-5a32-9527-b04994d33156/5bf4617461652.image.jpg?crop=1209%2C907%2C72%2C0&resize=1209%2C907&order=crop%2Cresize')",
        }}
      >
        {missingPeople.map((person, index) => {
          console.log(person);
          return (
            <Carousel.Item className="h-100" style={{ height: "100vh" }}>
              <div className="row d-flex " style={{ justifyContent: "center" }}>
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <div
                    style={{
                      width: "400px",
                      height: "50vh",
                      margin: "1rem auto",
                    }}
                  >
                    {" "}
                    <img
                      className="d-block w-100 h-100"
                      src={`${person.photo}`}
                      alt={`${index + 1}_image`}
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 align-self-center">
                  <Carousel.Caption
                    className="d-block position-static my-4 text-white bg-dark p-3 text-left rounded-2"
                    style={{ opacity: ".8" }}
                  >
                    <h2 className="mb-4">
                      {person.firstName} {person.lastName}{" "}
                      <span>
                        ({" "}
                        {new Date().getFullYear() -
                          new Date(person.dob).getFullYear()}{" "}
                        )
                      </span>
                    </h2>
                    <div className="row mt-2">
                      <div className="col-4">
                        <p>
                          Missing Since:{" "}
                          <Moment format="YYYY/DD/MM">{person.fromDate}</Moment>
                        </p>
                      </div>
                      <div className="col-4">
                        <p>Last Seen At: {person.lastSeenLocation}</p>
                      </div>
                      <div className="col-4">
                        <p>Sex: {person.gender}</p>
                      </div>
                    </div>
                    <p>{person.bio}</p>

                    <button className="btn btn-danger">Let us know</button>
                  </Carousel.Caption>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>

      {/* <section
        id="hero"
        style={{
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover",
          backgroundPosition:"center",
          backgroundImage:
            "url('https://bloximages.chicago2.vip.townnews.com/globegazette.com/content/tncms/assets/v3/editorial/9/7d/97decab0-8486-5a32-9527-b04994d33156/5bf4617461652.image.jpg?crop=1209%2C907%2C72%2C0&resize=1209%2C907&order=crop%2Cresize')",
        }}
      >
        <div className="hero-container">
          <div
            id="heroCarousel"
            data-bs-interval="5000"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <ol
              className="carousel-indicators"
              id="hero-carousel-indicators"
            ></ol>

            <div className="carousel-inner" role="listbox">
              <div
                className="carousel-item active"
                //style="background: url(assets/img/slide/slide.jpg)"
              >
                <div className="carousel-container d-flex flex-column">
                  <div className="missing-people-header">
                    <h1>Missing People</h1>
                  </div>
                  <div className="carousel-content">
                    <section id="team" className="team">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                              <img src="../images/bort.png" alt="" />
                              <h4 className="mpcard-header">Borte Avsaroglu</h4>
                              <div className="mpcard-desc">
                                <ul className="d-flex justify-content-around">
                                  <div>
                                    <li>Age: 31</li>
                                    <li>Gender: Male</li>
                                  </div>
                                  <div>
                                    <li>Weight: 70kg</li>
                                    <li>Height: 1.80m</li>
                                  </div>
                                </ul>
                              </div>
                              <h5 className="mpcard-location">
                                Last Location: New Jersey
                              </h5>
                              <p className="p-0 my-0 mx-auto text-center ">
                                If you have seen this person;
                              </p>
                              <a
                                href="./contact.html"
                                className="btn-get-started main-red"
                              >
                                Let Us Know!
                              </a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                              <img src="../images/bort.png" alt="" />
                              <h4 className="mpcard-header">Borte Avsaroglu</h4>
                              <div className="mpcard-desc">
                                <ul className="d-flex justify-content-around">
                                  <div>
                                    <li>Age: 31</li>
                                    <li>Gender: Male</li>
                                  </div>
                                  <div>
                                    <li>Weight: 70kg</li>
                                    <li>Height: 1.80m</li>
                                  </div>
                                </ul>
                              </div>
                              <h5 className="mpcard-location">
                                Last Location: New Jersey
                              </h5>
                              <p className="p-0 my-0 mx-auto text-center ">
                                If you have seen this person;
                              </p>
                              <a
                                href="./contact.html"
                                className="btn-get-started main-red"
                              >
                                Let Us Know!
                              </a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                              <img src="../images/bort.png" alt="" />
                              <h4 className="mpcard-header">Borte Avsaroglu</h4>
                              <div className="mpcard-desc">
                                <ul className="d-flex justify-content-around">
                                  <div>
                                    <li>Age: 31</li>
                                    <li>Gender: Male</li>
                                  </div>
                                  <div>
                                    <li>Weight: 70kg</li>
                                    <li>Height: 1.80m</li>
                                  </div>
                                </ul>
                              </div>
                              <h5 className="mpcard-location">
                                Last Location: New Jersey
                              </h5>
                              <p className="p-0 my-0 mx-auto text-center ">
                                If you have seen this person;
                              </p>
                              <a
                                href="./contact.html"
                                className="btn-get-started main-red"
                              >
                                Let Us Know!
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#heroCarousel"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bi bi-chevron-left"
                aria-hidden="true"
              ></span>
            </a>

            <a
              className="carousel-control-next"
              href="#heroCarousel"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bi bi-chevron-right"
                aria-hidden="true"
              ></span>
            </a>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Carousels;
