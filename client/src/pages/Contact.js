import React, { useEffect, useState } from "react";
import NavigationBar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { NavLink } from "react-router-dom";
import { getAllMissingPeople } from "../redux/actions/missingPerson";
import { connect } from "react-redux";
import {
  createExistedMissingPersonReport,
  createNewMissingPersonReport,
} from "../redux/actions/form";

const Contact = ({
  getAllMissingPeople,
  missingPeople,
  createNewMissingPersonReport,
  createExistedMissingPersonReport,
}) => {
  useEffect(() => {
    getAllMissingPeople();
  }, [getAllMissingPeople]);

  //Documentation
  //1- ->Report new missing people
  //2- ->Report existed missing people
  const [contactTopic, setContactTopic] = useState({ topic: "1" });
  const [submitLoading, setSubmitLoading] = useState(false);
  const [photo, setPhoto] = useState(null);
  const handleTopicChange = (e) => {
    setContactTopic({ ...contactTopic.topic, topic: e.target.value });
  };

  //Form Sender Credentials
  const [senderCredentials, setSenderCredentials] = useState({
    senderName: "",
    senderEmail: "",
  });

  //Reporting new missing person
  const [newMissingPerson, setNewMissingPerson] = useState({
    missingPersonName: "",
    missingPersonLastName: "",
    missingPersonDob: "",
    missingPersonMissingFromDate: "",
    missingPersonLastLocation: "",
    missingPersonBio: "",
    missingPersonGender: "",
  });

  const [reportExistedPerson, setReportExistedPerson] = useState({
    seenLocation: "",
    notes: "",
    missingPerson: "",
  });

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleChangeExistedPerson = (e) => {
    setReportExistedPerson({
      ...reportExistedPerson,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeNewPerson = (e) => {
    setNewMissingPerson({
      ...newMissingPerson,
      [e.target.name]: e.target.value,
    });
  };

  const handleSenderChange = (e) => {
    setSenderCredentials({
      ...senderCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("senderName", senderCredentials.senderName);
    formData.append("senderEmail", senderCredentials.senderEmail);
    if (contactTopic.topic === "1") {
      newMissingPerson.photo = photo;
      formData.append("missingPersonName", newMissingPerson.missingPersonName);
      formData.append(
        "missingPersonLastName",
        newMissingPerson.missingPersonLastName
      );
      formData.append("missingPersonDob", newMissingPerson.missingPersonDob);
      formData.append(
        "missingPersonMissingFromDate",
        newMissingPerson.missingPersonMissingFromDate
      );
      formData.append(
        "missingPersonLastLocation",
        newMissingPerson.missingPersonLastLocation
      );
      formData.append("photo", newMissingPerson.photo);
      formData.append("missingPersonBio", newMissingPerson.missingPersonBio);
      formData.append(
        "missingPersonGender",
        newMissingPerson.missingPersonGender
      );

      setSubmitLoading(true);
      return createNewMissingPersonReport(formData).then(() => {
        setSubmitLoading(false);
      });
    } else {
      reportExistedPerson.senderName = senderCredentials.senderName;
      reportExistedPerson.senderEmail = senderCredentials.senderEmail;

      setSubmitLoading(true);
      return createExistedMissingPersonReport(reportExistedPerson).then(() => {
        setSubmitLoading(false);
      });
    }
  };

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
              <li>Contact</li>
            </ol>
            <h2>Contact</h2>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="info-box mb-4">
                  <i className="bx bx-map"></i>
                  <h3>Our Address</h3>
                  <p>İsmet İnönü Bulvarı, Gazimağusa</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="info-box  mb-4">
                  <i className="bx bx-envelope"></i>
                  <h3>Email Us</h3>
                  <p>contact@cypsoft.com</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="info-box  mb-4">
                  <i className="bx bx-phone-call"></i>
                  <h3>Call Us</h3>
                  <p>+90 392 630 1398</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <form
                  role="form"
                  className="php-email-form"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <label>Your Name</label>
                      <input
                        type="text"
                        name="senderName"
                        className="form-control"
                        placeholder="Enter Name"
                        required
                        onChange={(e) => handleSenderChange(e)}
                        disabled={submitLoading}
                      />
                    </div>
                    <div className="col-md-6 form-group  mt-md-0">
                      <label>Your Email </label>
                      <input
                        type="email"
                        name="senderEmail"
                        className="form-control"
                        placeholder="Enter Email"
                        onChange={(e) => handleSenderChange(e)}
                        disabled={submitLoading}
                        required
                      />
                    </div>
                  </div>

                  <div className="row my-3">
                    <div className="form-group">
                      <label>Select the topic</label>
                      <select
                        className="form-control"
                        onChange={(e) => handleTopicChange(e)}
                      >
                        <option value={"1"}>Report New Missing Person</option>
                        <option value={"2"}>
                          Report Existed Missing Person{" "}
                        </option>
                      </select>
                    </div>
                  </div>
                  {contactTopic.topic === "1" ? (
                    <>
                      <div className="row my-3">
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                          <label>Victim's Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="missingPersonName"
                            placeholder="Firstname"
                            onChange={(e) => handleChangeNewPerson(e)}
                            required
                            disabled={
                              contactTopic.topic === "2" || submitLoading
                            }
                          />
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0 ">
                          <label>Victim's Surname</label>
                          <input
                            type="text"
                            className="form-control"
                            name="missingPersonLastName"
                            placeholder="Lastname"
                            required
                            onChange={(e) => handleChangeNewPerson(e)}
                            disabled={
                              contactTopic.topic === "2" || submitLoading
                            }
                          />
                        </div>
                      </div>
                      <div className="row my-3">
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                          <label>Dob of the Victim</label>
                          <input
                            type="date"
                            className="form-control"
                            name="missingPersonDob"
                            required
                            onChange={(e) => handleChangeNewPerson(e)}
                            disabled={
                              contactTopic.topic === "2" || submitLoading
                            }
                          />
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0 ">
                          <label>Last Seen Location</label>
                          <input
                            type="text"
                            className="form-control"
                            name="missingPersonLastLocation"
                            placeholder="Location"
                            required
                            onChange={(e) => handleChangeNewPerson(e)}
                            disabled={
                              contactTopic.topic === "2" || submitLoading
                            }
                          />
                        </div>
                      </div>
                      <div className="row my-3">
                        <div className="col-md-4 form-group mt-3 mt-md-0 ">
                          <label className="d-block">
                            Picture of the Victim
                          </label>
                          <input
                            type="file"
                            onChange={(e) => handlePhotoChange(e)}
                            name="photo "
                            placeholder="Lastname"
                            required
                            disabled={
                              contactTopic.topic === "2" || submitLoading
                            }
                          />
                        </div>

                        <div className="col-md-4 form-group mt-3 mt-md-0 ">
                          <label className="d-block">
                            Date of Disappearance (From)
                          </label>
                          <input
                            type="date"
                            name="missingPersonMissingFromDate"
                            className="form-control"
                            placeholder="From Date"
                            required
                            onChange={(e) => handleChangeNewPerson(e)}
                            disabled={
                              contactTopic.topic === "2" || submitLoading
                            }
                          />
                        </div>
                        <div className="col-md-4 form-group mt-3 mt-md-0 ">
                          <label className="d-block">Gender</label>
                          <input
                            type="radio"
                            name="missingPersonGender"
                            required
                            value={"female"}
                            onChange={(e) => handleChangeNewPerson(e)}
                            disabled={
                              contactTopic.topic === "2" || submitLoading
                            }
                          />
                          <span className="mx-2">Female</span>
                          <input
                            type="radio"
                            name="missingPersonGender"
                            required
                            className="ml-2"
                            value={"male"}
                            onChange={(e) => handleChangeNewPerson(e)}
                            disabled={
                              contactTopic.topic === "2" || submitLoading
                            }
                          />
                          <span className="mx-2">Male </span>
                        </div>
                      </div>
                      <div className="row my-3">
                        <div className="col-md-12 form-group mt-3 mt-md-0">
                          <textarea
                            className="form-control"
                            name="missingPersonBio"
                            rows="5"
                            onChange={(e) => handleChangeNewPerson(e)}
                            placeholder="Brief details about victim"
                            required
                            disabled={
                              contactTopic.topic === "2" || submitLoading
                            }
                          ></textarea>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="row my-3">
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                          <label>Select The Victim</label>
                          {missingPeople.missingPeople &&
                            missingPeople.loading &&
                            missingPeople.length === 0 && (
                              <p className="text-danger">
                                No Missing People Found
                              </p>
                            )}

                          <select
                            className="form-control"
                            name="missingPerson"
                            onChange={(e) => handleChangeExistedPerson(e)}
                            disabled={
                              contactTopic.topic === "1" || submitLoading
                            }
                          >
                            {missingPeople &&
                              missingPeople.missingPeople.length > 0 &&
                              !missingPeople.loading &&
                              missingPeople.missingPeople.map(
                                (missingPerson) => {
                                  return (
                                    <option
                                      value={missingPerson._id}
                                      key={missingPerson._id}
                                    >
                                      {missingPerson.firstName}{" "}
                                      {missingPerson.lastName}
                                    </option>
                                  );
                                }
                              )}
                          </select>
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0 ">
                          <label>Seen Location</label>
                          <input
                            type="text"
                            className="form-control"
                            name="seenLocation"
                            placeholder="Location"
                            required
                            onChange={(e) => handleChangeExistedPerson(e)}
                            disabled={
                              contactTopic.topic === "1" || submitLoading
                            }
                          />
                        </div>
                      </div>

                      <div className="row my-3">
                        <div className="col-md-12 form-group mt-3 mt-md-0">
                          <textarea
                            className="form-control"
                            name="notes"
                            rows="5"
                            onChange={(e) => handleChangeExistedPerson(e)}
                            placeholder="Your notes"
                            required
                            disabled={
                              contactTopic.topic === "1" || submitLoading
                            }
                          ></textarea>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="text-center">
                    <button disabled={submitLoading} type="submit">
                      Contact Us
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  missingPeople: state.missingPerson,
});
export default connect(mapStateToProps, {
  getAllMissingPeople,
  createNewMissingPersonReport,
  createExistedMissingPersonReport,
})(Contact);
