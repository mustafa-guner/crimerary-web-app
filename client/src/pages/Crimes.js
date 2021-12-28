import React, { useEffect } from "react";
import NavigationBar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { NavLink } from "react-router-dom";
import Categories from "../components/layout/Categories";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Crime from "../components/layout/Crime";
import { getCrimes } from "../redux/actions/crimes";
import { getCategories } from "../redux/actions/category";
import Pagination from "../components/Pagination";

const Crimes = ({
  getCrimes,
  crimes: { crimes, loading },
  getCategories,
  categories,
}) => {
  useEffect(() => {
    getCrimes();
    getCategories();
  }, [getCrimes, getCategories]);

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
              <li>Crimes</li>
            </ol>
            <h2>Crimes</h2>
          </div>
        </section>

        <section id="blog" className="blog">
          <div className="container" data-aos="fade-up">
            <div className="row">
              {loading ? (
                <div className="col-lg-8 entries text-center">
                  <div
                    className="spinner-border text-center mx-auto "
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : (
                <div className="col-lg-8 entries">
                  {!loading && crimes && crimes.length ? (
                    <Pagination
                      data={crimes}
                      RenderComponent={Crime}
                      pageLimit={5}
                      dataLimit={3}
                    />
                  ) : (
                    <h3>No Crimes</h3>
                  )}
                </div>
              )}

              <div className="col-lg-4">
                <div className="sidebar">
                  <h3 className="sidebar-title">Search</h3>
                  <div className="sidebar-item search-form">
                    <form action="">
                      <input type="text" />
                      <button type="submit">
                        <i className="bi bi-search"></i>
                      </button>
                    </form>
                  </div>

                  <h3 className="sidebar-title">Categories</h3>
                  <div className="sidebar-item categories">
                    {categories.categories && categories.loading ? (
                      <div className="w-100 text-center">
                        <div
                          className="spinner-border text-center mx-auto "
                          role="status"
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    ) : (
                      <Categories categories={categories.categories} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

Crimes.propTypes = {
  crimes: PropTypes.object.isRequired,
  getCrimes: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  crimes: state.crimes,
  categories: state.category,
});

export default connect(mapStateToProps, { getCrimes, getCategories })(Crimes);
