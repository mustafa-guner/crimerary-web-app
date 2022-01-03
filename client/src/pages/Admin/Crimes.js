import React, { useEffect } from "react";
import PropTypes from "prop-types";
import CrimesList from "../../components/Admin/layout/CrimesList";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCrimes } from "../../redux/actions/crimes";
import noData from "../../images/no data.svg";
import { useSearchParams } from "react-router-dom";

const Crimes = ({ getCrimes, crimes: { crimes, loading } }) => {
  const getQueryParams = (query = null) =>
    (query || window.location.search.replace("?", ""))
      .split("&")
      .map((e) => e.split("=").map(decodeURIComponent))
      .reduce((r, [k, v]) => ((r[k] = v), r), {});

  useEffect(() => {
    getCrimes();
    console.log(window.location.href);
  }, [getCrimes]);

  return (
    <div>
      <Link to="/dashboard/add-crime-post" className="mb-3 nav-link pl-0">
        Add New Crime
      </Link>

      {loading ? (
        <div className="text-center mx-auto">
          <div className="spinner-border text-center" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : crimes.length ? (
        <CrimesList crimes={crimes} />
      ) : (
        <div className="text-center">
          {" "}
          <h1 className="display-4 text-center text-black-50 p-4">
            No Crimes Found
          </h1>
          <img
            style={{ width: "80px", height: "80px" }}
            src={noData}
            alt="No Data Found"
          />{" "}
        </div>
      )}
    </div>
  );
};

Crimes.propTypes = {
  crimes: PropTypes.object,
};
const mapStateToProps = (state) => ({
  crimes: state.crimes,
});
export default connect(mapStateToProps, { getCrimes })(Crimes);
