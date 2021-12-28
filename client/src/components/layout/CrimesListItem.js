import React from "react";
import { NavLink } from "react-router-dom";
import Moment from "react-moment";
import { getCrimeByID } from "../../redux/actions/crimes";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
const CrimesListItem = ({ crime, getCrimeByID }) => {
  const navigate = useNavigate();
  const [loadingModal, setLoadingModal] = React.useState(false);
  return (
    <article className="entry " key={crime._id}>
      <div className="entry-img">
        <img src={`${crime.photo}`} alt="" className="img-fluid" />
      </div>

      <h2 className="entry-title">
        <NavLink to="crimes-single.html">{crime.title}</NavLink>
      </h2>

      <div className="entry-meta">
        <ul>
          <li className="d-flex align-items-center">
            <i className="fas fa-users text-danger align-self-center"></i>{" "}
            {crime.criminals.length} criminal(s)
          </li>
          <li className="d-flex align-items-center">
            <Moment format="YYYY/MM/DD">{crime.commitedAt}</Moment>
          </li>
          <li className="d-flex align-items-center">{crime.location}</li>
          <li className="d-flex align-items-center">
            {crime.category.category}
          </li>
        </ul>
      </div>

      <div className="entry-content">
        <p>
          {crime.description.length > 20
            ? crime.description.substring(0, 120) + "..."
            : crime.description}
        </p>
        <div className="read-more">
          {/* <NavLink to="crimes-single.html">Read More</NavLink> */}
          <button
            onClick={() => {
              setLoadingModal(true);
              getCrimeByID(crime._id).then(() => {
                setLoadingModal(false);

                return navigate(`/crimes/crime/${crime._id}`);
              });
            }}
          >
            Read More
          </button>
        </div>
      </div>

      {loadingModal && (
        <Modal show={loadingModal} centered backdrop="static" keyboard={false}>
          <Modal.Body className="text-center">
            <h3
              id="contained-modal-title-vcenter"
              className="text-center  my-4"
            >
              Loading
            </h3>
            <div className="spinner-border text-center" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </article>
  );
};

export default connect(null, { getCrimeByID })(CrimesListItem);
