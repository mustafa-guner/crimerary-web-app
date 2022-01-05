import React, { useEffect, useState } from "react";
import NavigationBar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { NavLink } from "react-router-dom";

export const Contact = () => {
  //Documentation
  //1- ->Report new missing people
  //2- ->Report existed missing people
  const [contactTopic, setContactTopic] = useState({ topic: "1" });

  const handleTopicChange = (e) => {
    console.log(e.target.value);
    setContactTopic({ ...contactTopic.topic, topic: e.target.value });
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
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <label>Your Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group  mt-md-0">
                      <label>Your Email </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter Email"
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
                  {contactTopic.topic == "1" ? (
                    <>
                      <div className="row my-3">
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                          <label>Victim's Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            placeholder="Firstname"
                            required
                          />
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0 ">
                          <label>Victim's Surname</label>
                          <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            placeholder="Lastname"
                            required
                          />
                        </div>
                      </div>
                      <div className="row my-3">
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                          <label>Dob of the Victim</label>
                          <input
                            type="date"
                            className="form-control"
                            name="dob"
                            required
                          />
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0 ">
                          <label>Last Seen Location</label>
                          <input
                            type="text"
                            className="form-control"
                            name="location"
                            placeholder="Location"
                            required
                          />
                        </div>
                      </div>
                      <div className="row my-3">
                        <div className="col-md-6 form-group mt-3 mt-md-0 ">
                          <label className="d-block">
                            Picture of the Victim
                          </label>
                          <input
                            type="file"
                            name="photo "
                            placeholder="Lastname"
                            required
                          />
                        </div>

                        <div className="col-md-6 form-group mt-3 mt-md-0 ">
                          <label className="d-block">
                            Date of Disappearance (From)
                          </label>
                          <input
                            type="date"
                            name="from "
                            className="form-control"
                            placeholder="From Date"
                            required
                          />
                        </div>
                      </div>
                      <div className="row my-3">
                        <div className="col-md-12 form-group mt-3 mt-md-0">
                          <textarea
                            className="form-control"
                            name="information"
                            rows="5"
                            placeholder="Brief details about victim"
                            required
                          ></textarea>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="row my-3">
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                          <label>Select The Victim</label>
                          <select className="form-control">
                            <option>Jeffrey Dahrem</option>
                            <option>Jeffrey Dahrem</option>
                            <option>Jeffrey Dahrem</option>
                            <option>Jeffrey Dahrem</option>
                          </select>
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0 ">
                          <label>Seen Location</label>
                          <input
                            type="text"
                            className="form-control"
                            name="location"
                            placeholder="Location"
                            required
                          />
                        </div>
                      </div>

                      <div className="row my-3">
                        <div className="col-md-12 form-group mt-3 mt-md-0">
                          <textarea
                            className="form-control"
                            name="information"
                            rows="5"
                            placeholder="Your notes"
                            required
                          ></textarea>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Contact Us</button>
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
