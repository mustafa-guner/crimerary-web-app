import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Row, Col, Card, Table } from "react-bootstrap";
import { removeCrime } from "../../../redux/actions/crimes";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import Moment from "react-moment";
import noData from "../../../images/no data.svg";

const CrimesList = ({ crimes, removeCrime }) => {
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

  return crimes.length === 0 ? (
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
  ) : (
    <Table responsive>
      <thead className="text-center">
        <tr>
          <th>Image</th>
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
        {crimes.map((crime, idx) => {
          console.log(crime.photo);
          return (
            <tr key={crime._id}>
              <td>
                <img
                  src={`${crime.photo}`}
                  alt={`${crime.title}_image`}
                  style={{
                    width: "30px",
                    height: "30px",
                    objectFit: "cover",
                    borderRadius: "100%",
                  }}
                />
              </td>
              <td>{crime.title}</td>
              <td>{crime.description}</td>
              <td>{crime.criminals.length}</td>
              <td>{crime.location}</td>

              <td className="d-flex justify-content-center">
                {crime.category.map((category) => (
                  <p
                    className="border border-danger text-danger  rounded  mr-1"
                    style={{ fontSize: "12px", padding: "4px" }}
                    key={category._id}
                  >
                    {category.category}
                  </p>
                ))}
                <p
                  className="border border-danger text-danger  rounded  mr-1"
                  style={{ fontSize: "12px", padding: "4px" }}
                >
                  Deneme
                </p>
                <p
                  className="border border-danger text-danger  rounded  mr-1"
                  style={{ fontSize: "12px", padding: "4px" }}
                >
                  Deneme
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
                <button className="btn btn-dark btn-sm">Edit</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );

  // <Row xs={1} md={4} className="g-4">
  //   {crimes.map((crime, idx) => (
  //     <Col key={crime._id}>
  //       <Card className=" position-relative w-100 h-100">
  //         <Card.Img
  //           variant="top"
  //           src="https://cdn.discordapp.com/attachments/701763657285238864/701780807911604274/40524105_386128695256218_1388852467722092544_n.jpg"
  //         />
  //         {crime.category.map((ctg) => {
  //           return (
  //             <div
  //               key={ctg._id}
  //               className="btn btn-light btn-sm position-absolute"
  //               style={{ top: "10px", left: "10px" }}
  //             >
  //               {ctg.category}
  //             </div>
  //           );
  //         })}

  //         <Card.Body>
  //           <Card.Title>{crime.title}</Card.Title>
  //           <small className="text-muted cat">
  //             <i className="fas fa-users text-danger"></i>{" "}
  //             <span>{crime.criminals.length} criminals</span>
  //           </small>

  //           <Card.Text className="my-2 py-3">{crime.description}</Card.Text>
  //           <button className="btn btn-dark mr-2">Edit</button>
  //           <button
  //             className="btn btn-danger "
  //             onClick={() => handleRemove(crime._id)}
  //           >
  //             Remove
  //           </button>
  //         </Card.Body>
  //         <Card.Footer className="text-muted d-flex justify-content-between bg-transparent border-top-0">
  //           <div className="views">
  //             Commited At:{" "}
  //             <Moment format="YYYY/MM/DD">{crime.commitedAt}</Moment>
  //           </div>
  //         </Card.Footer>
  //       </Card>
  //     </Col>
  //   ))}
  // </Row>
};

CrimesList.propTypes = {
  crimes: PropTypes.array.isRequired,
};

export default connect(null, { removeCrime })(CrimesList);
