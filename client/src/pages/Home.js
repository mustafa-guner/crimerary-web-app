import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Navbar from "../components/layout/Navbar";
import Carousel from "../components/layout/Carousel";
import "./App.css";
import SwipperSlider from "../components/layout/ClientsSlider";
import Footer from "../components/layout/Footer";
import HomeCategories from "../components/layout/HomeCategories";
import { getCategories } from "../redux/actions/category";
import { connect } from "react-redux";

const Home = ({ categories, getCategories }) => {
  useEffect(() => {
    getCategories();
  }, [getCategories]);
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
              {categories.categories && categories.loading ? (
                <div className="spinner-border " role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <HomeCategories categories={categories.categories} />
              )}
            </div>
          </div>
        </section>

        <section id="clients" className="clients">
          <div className="container">
            <div className="section-title">
              <h2>Our Supporters</h2>
            </div>
            <SwipperSlider />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

Home.propTypes = {
  getCategories: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  categories: state.category,
});

export default connect(mapStateToProps, { getCategories })(Home);
