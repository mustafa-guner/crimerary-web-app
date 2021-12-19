import React from "react";
import NavigationBar from "../../components/Admin/layout/Navbar";
import { logout } from "../../redux/actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Menu from "../../components/Admin/layout/Menu";
import Summary from "./Summary";

const Dashboard = ({ children }) => {
  return (
    <>
      <div className="container">
        <div id="content-wrapper " className="d-flex flex-column">
          <div id="content" className="my-2">
            <hr />
            {children}
          </div>
          <footer className="sticky-footer bg-white p-3 m">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright © CrimeRary 2021</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

Dashboard.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Dashboard);
