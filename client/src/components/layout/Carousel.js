import React from "react";
import { Carousel } from "react-bootstrap";

const Carousels = () => {
  return (
    <>
      {/* <Carousel className="h-100" variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/2015338.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpapercave.com/wp/wp5351153.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mocah.org/uploads/posts/1174804-street-night-motorcycle-evening-Ryan-Gosling-midnight-infrastructure-The-Place-Beyond-the-Pines-crime-darkness-screenshot-pc-game.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     */}

      <section id="hero">
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
      </section>
    </>
  );
};

export default Carousels;
