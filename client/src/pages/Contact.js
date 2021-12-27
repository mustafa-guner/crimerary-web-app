import React from "react";
import NavigationBar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { NavLink } from "react-router-dom";

export const Contact = () => {
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
              <div className="col-lg-6 ">
                <iframe
                  className="mb-4 mb-lg-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.570764219215!2d33.90945921608166!3d35.142383666940475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dfc9de2ec388ab%3A0x90b5c9b9584b6f10!2sDo%C4%9Fu%20Akdeniz%20%C3%9Cniversitesi!5e0!3m2!1str!2s!4v1640303308871!5m2!1str!2s"
                  frameBorder="0"
                  style={{ border: "0", width: "100%", height: "384px" }}
                  allowFullScreen
                ></iframe>
              </div>

              <div className="col-lg-6">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
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
