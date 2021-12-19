import React from "react";
import PropTypes from "prop-types";
import Navbar from "../components/layout/Navbar";
import Carousel from "../components/layout/Carousel";
const Home = (props) => {
  return (
    <>
      <Navbar />
      <Carousel />
    </>
  );
};

Home.propTypes = {};

export default Home;
