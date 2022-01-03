import React, { useEffect, useState } from "react";
import NavigationBar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { NavLink } from "react-router-dom";
import Categories from "../components/layout/Categories";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CrimesListItem from "../components/layout/CrimesListItem";
import {
  getCrimes,
  getCrimesByCategory,
  getCrimesBySearch,
} from "../redux/actions/crimes";
import { getCategories } from "../redux/actions/category";
import Pagination from "../components/Pagination";
import { useSearchParams } from "react-router-dom";

const Crimes = ({
  getCrimes,
  crimes: { crimes, loading },
  getCategories,
  categories,
  getCrimesByCategory,
  getCrimesBySearch,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchByTitle, setSearchByTitle] = useState({ k: "" });

  const handleChangeTitle = (e) =>
    setSearchByTitle({
      ...searchByTitle.k,
      [e.target.name]: e.target.value,
    });

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ k: searchByTitle.k });
    getCrimesBySearch(searchByTitle.k);
  };

  useEffect(() => {
    getCategories();

    if (searchParams.get("category")) {
      getCrimesByCategory(searchParams.get("category"));
    } else if (searchParams.get("k")) {
      getCrimesByCategory(searchParams.get("k"));
    } else {
      getCrimes();
    }
  }, [
    getCrimes,
    getCategories,
    getCrimesByCategory,
    getCrimesBySearch,
    searchParams,
  ]);

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
            <div className="sidebar-item search-form">
              <form onSubmit={handleSearch} className="w-25 d-flex">
                <input
                  type="text"
                  onChange={(e) => handleChangeTitle(e)}
                  placeholder="Search for crime(s)"
                  className="form-control"
                  name="k"
                />
                <button type="submit" className="btn btn-danger btn-sm ml-1">
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>
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
                <div className="col-lg-9 entries">
                  {!loading && crimes && crimes.length ? (
                    <div className="row">
                      <Pagination
                        data={crimes}
                        RenderComponent={CrimesListItem}
                        dataLimit={4}
                      />
                    </div>
                  ) : (
                    <h3>No Crimes</h3>
                  )}
                </div>
              )}

              <div className="col-lg-3  mt-4">
                <div className="sidebar">
                  <h3 className="sidebar-title">Search</h3>

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
  getCrimesByCategory: PropTypes.func.isRequired,
  getCrimesBySearch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  crimes: state.crimes,
  categories: state.category,
});

export default connect(mapStateToProps, {
  getCrimes,
  getCategories,
  getCrimesByCategory,
  getCrimesBySearch,
})(Crimes);
