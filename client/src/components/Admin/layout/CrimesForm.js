import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";
import { createCrime } from "../../../redux/actions/crimes";
import { connect } from "react-redux";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { getCriminals } from "../../../redux/actions/criminals";

const CrimesForm = ({
  createCrime,
  getCriminals,
  criminals: { criminals, loading },
}) => {
  useEffect(() => {
    getCriminals();
  }, [getCriminals]);

  //Make animated things when removing select option data
  const animatedComponents = makeAnimated();

  const [image, setImage] = useState({ photo: "" });
  const [datas, setDatas] = useState({
    title: "Galatya",
    description: "Galatya",
    location: "Galatya",
    commitedAt: "",
    criminals: [],
    photo: "",
    category: "Murder",
  });

  const [selectedCriminals, setSelectedCriminals] = useState([]);

  const handleChange = (e) => {
    setDatas({
      ...datas,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[e.target.files.length - 1];

    setImage({
      ...image,
      photo: file,
    });
  };

  const handleCriminalsChange = (criminal) => {
    return setSelectedCriminals([...criminal]);
  };

  // let criminalsOptions = [
  //   // { value: "jack", label: "Jack Daniel" },
  //   // { value: "mike", label: "Mike Star" },
  //   // { value: "steve", label: "Steve Floor" },
  // ];

  // criminals &&
  //   criminals.forEach((criminal) => {
  //     criminalsOptions.push({
  //       value: criminal._id,
  //       label: `${criminal.firstName} ${criminal.lastName}`,
  //     });
  //   });

  const { title, description, location, commitedAt, category } = datas;

  const handleSubmit = (e) => {
    e.preventDefault();

    datas.criminals = [...selectedCriminals];
    datas.photo = image.photo;

    const formData = new FormData();

    // Object.keys(datas).forEach((data) => {
    //   formData.append(data, datas[data]);
    // });

    formData.append("photo", datas.photo);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("commitedAt", commitedAt);
    formData.append("category", category);
    formData.append("criminals", JSON.stringify(datas.criminals));

    // console.log(formData);
    // console.log(formData.get("title"));
    // console.log(formData.get("description"));
    // console.log(formData.get("location"));
    // console.log(formData.get("category"));
    // console.log(formData.get("commitedAt"));
    // console.log(formData.get("photo"));
    // console.log(formData.get("criminals"));

    createCrime(formData);

    //Empty inputs after submit

    // setDatas({
    //   title: "",
    //   description: "",
    //   location: "",
    //   commitedAt: "",
    //   criminals: "",
    //   category: "",
    // });
  };

  return (
    <div>
      <Link to="/dashboard/crimes" className="mb-3 nav-link pl-0">
        <i className="fas fa-long-arrow-alt-left"></i> Back
      </Link>
      <h1 className="lead mb-4" style={{ fontSize: "2rem" }}>
        Crimes Form
      </h1>
      <Form onSubmit={handleSubmit}>
        <Row xs={1} md={3}>
          <Col className="my-2">
            <Form.Label>Enter Title of Crime</Form.Label>
            <Form.Control
              placeholder="Title"
              name="title"
              value={title}
              onChange={(e) => handleChange(e)}
            />
          </Col>
          <Col className="my-2">
            <Form.Label>Enter Location of Crime</Form.Label>
            <Form.Control
              placeholder="Location"
              name="location"
              value={location}
              onChange={(e) => handleChange(e)}
            />
          </Col>
          <Col className="my-2">
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload Image of Crime</Form.Label>
              <Form.Control
                type="file"
                name="photo"
                onChange={(e) => handleImageChange(e)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="my-4" xs={1} md={3}>
          <Col className="my-2">
            <Form.Label>Choose Criminals</Form.Label>
            <Select
              isDisabled={loading}
              placeholder="Choose criminal(s)"
              isSearchable
              value={criminals.label}
              options={
                criminals &&
                criminals.map((criminal) => {
                  return {
                    value: criminal._id,
                    label: `${criminal.firstName} ${criminal.lastName}`,
                  };
                })
              }
              components={animatedComponents}
              isMulti
              onChange={(criminal) => handleCriminalsChange(criminal)}
            />
          </Col>
          <Col className="my-2">
            <Form.Group controlId="dob">
              <Form.Label>Choose Crime Commited Date</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                placeholder="Date of Birth"
                name="commitedAt"
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Col>

          <Col className="my-2">
            <Form.Label>Select Crime Category</Form.Label>
            <Form.Control
              name="category"
              className="me-sm-2"
              value={category}
              id="inlineFormCustomSelect"
            >
              {/* <option value="0">Choose...</option>
              <option value="rape">Rape</option>
              <option value="murder">Kill</option>
              <option value="fight">Fight</option> */}
            </Form.Control>
          </Col>
        </Row>

        <Row xs={1} md={1} className="my-4">
          <Col className="my-2">
            <Form.Control
              as="textarea"
              placeholder="Leave description here"
              style={{ height: "100px" }}
              name="description"
              value={description}
              onChange={(e) => handleChange(e)}
            />
          </Col>
        </Row>
        <Row xs={1} md={4}>
          <Col className="my-2">
            <button className="btn btn-success  w-100 text-center">Save</button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

CrimesForm.propTypes = {
  createCrime: PropTypes.func.isRequired,
  criminals: PropTypes.object,
};

const mapStateToProps = (state) => ({
  criminals: state.criminals,
});
export default connect(mapStateToProps, { createCrime, getCriminals })(
  CrimesForm
);
