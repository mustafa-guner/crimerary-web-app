import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { getCrimeByID } from "../redux/actions/crimes";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import SingleCrime from "../components/layout/SingleCrime";

const Crime = ({ getCrimeByID, crime }) => {
  const { crimeID } = useParams();

  useEffect(() => {
    getCrimeByID(crimeID);
  }, [crime.loading, getCrimeByID]);

  return crime.loading ? (
    <div className="container">
      <h1 className="text-center">Loading</h1>
    </div>
  ) : (
    !crime.loading && crime.crime && <SingleCrime crime={crime.crime} />
  );
};

Crime.propTypes = { crime: PropTypes.object };

const mapStateToProps = (state) => ({
  crime: state.crimes,
  crimes: state.crimes.crimes,
});
export default connect(mapStateToProps, { getCrimeByID })(Crime);
