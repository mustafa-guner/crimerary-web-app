import React, { useEffect } from "react";
import PropTypes from "prop-types";
import CrimesList from "../../components/Admin/layout/CrimesList";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCrimes, removeCrime } from "../../redux/actions/crimes";

const Crimes = ({ getCrimes, crimes: { crimes, loading } }) => {
  useEffect(() => {
    getCrimes();
  }, [getCrimes]);
  return (
    <div>
      <Link to="/dashboard/add-crime-post" className="mb-3 nav-link pl-0">
        Add New Crime
      </Link>

      {loading ? (
        <h1>Loading</h1>
      ) : (
        <CrimesList crimes={crimes} loading={loading} />
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
