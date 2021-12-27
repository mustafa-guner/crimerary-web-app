import React from "react";
import PropTypes from "prop-types";
import { Table, Modal, Button } from "react-bootstrap";
import { getCrimeByID, removeCrime } from "../../../redux/actions/crimes";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import Moment from "react-moment";
import Preview from "./Preview";
import { useNavigate, Link } from "react-router-dom";

const CrimesList = ({ crimes, removeCrime, getCrimeByID, crime, history }) => {
  const navigate = useNavigate();

  const handleRemove = (crimeID) => {
    Swal.fire({
      title: "Confirm your password",
      html: `
      <input type="password" id="password"  autocomplete="off" class="p-2 rounded " placeholder="Password">`,
      confirmButtonText: "Confirm",
      confirmButtonColor: "#212529",
      focusConfirm: false,
      preConfirm: () => {
        const password = Swal.getPopup().querySelector("#password").value;
        if (!password) {
          Swal.showValidationMessage(`Please enter your password.`);
        }
        return { password: password };
      },
    }).then((result) => {
      return removeCrime(crimeID, result.value.password);
    });
  };
  const [loadingModal, setLoadingModal] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Table responsive>
      <thead className="text-center">
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Criminals</th>
          <th>Location</th>
          <th>Category</th>
          <th>Commited At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {crimes.map((crime) => {
          console.log(crime);
          return (
            <tr key={crime._id}>
              <td>{crime.title}</td>
              <td>
                {crime.description.length > 20
                  ? crime.description.substring(0, 15) + "..."
                  : crime.description}
              </td>
              <td>{crime.criminals.length}</td>
              <td>{crime.location}</td>

              <td className="d-flex justify-content-center">
                <p
                  className="border border-danger text-danger  rounded  mr-1"
                  style={{ fontSize: "12px", padding: "4px" }}
                >
                  {crime.category.category}
                </p>
              </td>
              <td>
                {" "}
                <Moment format="YYYY/MM/DD">{crime.commitedAt}</Moment>
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm mr-1"
                  onClick={() => handleRemove(crime._id)}
                >
                  Remove
                </button>
                <Button
                  className="btn btn-dark btn-sm  mr-1"
                  onClick={() => {
                    setLoadingModal(true);
                    getCrimeByID(crime._id).then(() => {
                      setLoadingModal(false);
                      return navigate(`/dashboard/edit-crime/${crime._id}`);
                    });
                  }}
                >
                  Edit
                </Button>
                <button
                  className="btn btn-dark btn-sm"
                  onClick={() => {
                    setLoadingModal(true);
                    getCrimeByID(crime._id).then(() => {
                      setModalShow(true);
                      setLoadingModal(false);
                    });
                  }}
                >
                  Preview
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>

      {loadingModal ? (
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
      ) : (
        modalShow && (
          <Preview
            show={modalShow}
            crime={crime}
            onHide={() => {
              setModalShow(false);
            }}
          />
        )
      )}
    </Table>
  );
};

CrimesList.propTypes = {
  crimes: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  crime: state.crimes.crime,
});

export default connect(mapStateToProps, { removeCrime, getCrimeByID })(
  CrimesList
);
