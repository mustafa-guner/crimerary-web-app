import React from "react";
import PropTypes from "prop-types";
import Navbar from "../components/layout/Navbar";
import Carousel from "../components/layout/Carousel";
import "./App.css";
import SwipperSlider from "../components/layout/ClientsSlider";
import Footer from "../components/layout/Footer";

const Home = (props) => {
  return (
    <>
      <Navbar />

      <Carousel />

      <main id="main">
        <section id="featured" className="featured">
          <div className="container"></div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <h2 className="text-center mb-4">Crime Categories</h2>
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon">
                    <i className="fas fa-balance-scale"></i>
                  </div>
                  <h4>
                    <a href="">Accident</a>
                  </h4>
                  <p>
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="icon-box">
                  <div className="icon">
                    <i className="fas fa-balance-scale"></i>
                  </div>
                  <h4>
                    <a href="">Murder</a>
                  </h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="icon-box">
                  <div className="icon">
                    <i className="fas fa-balance-scale"></i>
                  </div>
                  <h4>
                    <a href="">Theft</a>
                  </h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon">
                    <i className="fas fa-balance-scale"></i>
                  </div>
                  <h4>
                    <a href="">Sexual Assault</a>
                  </h4>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon">
                    <i className="fas fa-balance-scale"></i>
                  </div>
                  <h4>
                    <a href="">Violence</a>
                  </h4>
                  <p>
                    Quis consequatur saepe eligendi voluptatem consequatur dolor
                    consequuntur
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon">
                    <i className="fas fa-balance-scale"></i>
                  </div>
                  <h4>
                    <a href="">Assault</a>
                  </h4>
                  <p>
                    Modi nostrum vel laborum. Porro fugit error sit minus
                    sapiente sit aspernatur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="clients" className="clients">
          <div className="container">
            <div className="section-title">
              <h2>Our Supporters</h2>
            </div>
            <SwipperSlider />

            {/* <div className="clients-slider swiper">
              <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide">
                  <img src={deneme} className="img-fluid" alt="fbi" />
                </div>
                <div className="swiper-slide">
                  <img src={deneme} className="img-fluid" alt="cia" />
                </div>
                <div className="swiper-slide">
                  <img src={deneme} className="img-fluid" alt="mit" />
                </div>
                <div className="swiper-slide">
                  <img src={deneme} className="img-fluid" alt="interpol" />
                </div>
                <div className="swiper-slide">
                  <img src={deneme} className="img-fluid" alt="turkteam" />
                </div>
                <div className="swiper-slide">
                  <img src={deneme} className="img-fluid" alt="national" />
                </div>
                <div className="swiper-slide kgb-logo">
                  <img src={deneme} className="img-fluid" alt="" />
                </div>
                <div className="swiper-slide">
                  <img src={deneme} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div> */}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

Home.propTypes = {};

export default Home;
