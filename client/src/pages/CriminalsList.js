import React from "react";
import NavigationBar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { NavLink } from "react-router-dom";
const Criminals = () => {
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
              <li>Criminals</li>
            </ol>
            <h2>Criminals</h2>
          </div>
        </section>
        <section id="team" className="team">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch criminals-card">
                <NavLink to="./criminal-single.html">
                  <div className="member">
                    <div className="img-container">
                      <img
                        src="assets/img/criminals/women-criminal.png"
                        alt=""
                      />
                    </div>
                    <h4>Jane Doe</h4>
                    <span>Murder</span>
                    <div className="mpcard-desc criminals-card-desc">
                      <ul className="">
                        <div>
                          <li>Age: 42</li>
                          <li>Gender: Female</li>
                        </div>
                      </ul>
                    </div>
                    <span className="text-danger border border-danger rounded p-2 d-inline-block span-caught">
                      <h4>Wanted</h4>
                    </span>
                  </div>
                </NavLink>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch criminals-card">
                <NavLink to="./criminal-single.html">
                  <div className="member">
                    <img
                      src="assets/img/criminals/criminal-modified.png"
                      alt=""
                    />
                    <h4>John Doe</h4>
                    <span>Sexual Assault</span>
                    <div className="mpcard-desc criminals-card-desc">
                      <ul className="">
                        <div>
                          <li>Age: 28</li>
                          <li>Gender: Male</li>
                        </div>
                      </ul>
                    </div>
                    <span className="text-primary border border-primary rounded p-2 d-inline-block span-caught">
                      <h4>Busted</h4>
                    </span>
                  </div>
                </NavLink>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch criminals-card">
                <NavLink to="./criminal-single.html">
                  <div className="member">
                    <div className="img-container">
                      <img
                        src="assets/img/criminals/women-criminal.png"
                        alt=""
                      />
                    </div>
                    <h4>Jane Doe</h4>
                    <span>Murder</span>
                    <div className="mpcard-desc criminals-card-desc">
                      <ul className="">
                        <div>
                          <li>Age: 42</li>
                          <li>Gender: Female</li>
                        </div>
                      </ul>
                    </div>
                    <span className="text-danger border border-danger rounded p-2 d-inline-block span-caught">
                      <h4>Wanted</h4>
                    </span>
                  </div>
                </NavLink>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch criminals-card">
                <NavLink to="./criminal-single.html">
                  <div className="member">
                    <img
                      src="assets/img/criminals/criminal-modified.png"
                      alt=""
                    />
                    <h4>John Doe</h4>
                    <span>Sexual Assault</span>
                    <div className="mpcard-desc criminals-card-desc">
                      <ul className="">
                        <div>
                          <li>Age: 28</li>
                          <li>Gender: Male</li>
                        </div>
                      </ul>
                    </div>
                    <span className="text-primary border border-primary rounded p-2 d-inline-block span-caught">
                      <h4>Busted</h4>
                    </span>
                  </div>
                </NavLink>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch criminals-card">
                <NavLink to="./criminal-single.html">
                  <div className="member">
                    <div className="img-container">
                      <img
                        src="assets/img/criminals/women-criminal.png"
                        alt=""
                      />
                    </div>
                    <h4>Jane Doe</h4>
                    <span>Murder</span>
                    <div className="mpcard-desc criminals-card-desc">
                      <ul className="">
                        <div>
                          <li>Age: 42</li>
                          <li>Gender: Female</li>
                        </div>
                      </ul>
                    </div>
                    <span className="text-danger border border-danger rounded p-2 d-inline-block span-caught">
                      <h4>Wanted</h4>
                    </span>
                  </div>
                </NavLink>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch criminals-card">
                <NavLink to="./criminal-single.html">
                  <div className="member">
                    <img
                      src="assets/img/criminals/criminal-modified.png"
                      alt=""
                    />
                    <h4>John Doe</h4>
                    <span>Sexual Assault</span>
                    <div className="mpcard-desc criminals-card-desc">
                      <ul className="">
                        <div>
                          <li>Age: 28</li>
                          <li>Gender: Male</li>
                        </div>
                      </ul>
                    </div>
                    <span className="text-primary border border-primary rounded p-2 d-inline-block span-caught">
                      <h4>Busted</h4>
                    </span>
                  </div>
                </NavLink>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch criminals-card">
                <NavLink to="./criminal-single.html">
                  <div className="member">
                    <div className="img-container">
                      <img
                        src="assets/img/criminals/women-criminal.png"
                        alt=""
                      />
                    </div>
                    <h4>Jane Doe</h4>
                    <span>Murder</span>
                    <div className="mpcard-desc criminals-card-desc">
                      <ul className="">
                        <div>
                          <li>Age: 42</li>
                          <li>Gender: Female</li>
                        </div>
                      </ul>
                    </div>
                    <span className="text-danger border border-danger rounded p-2 d-inline-block span-caught">
                      <h4>Wanted</h4>
                    </span>
                  </div>
                </NavLink>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch criminals-card">
                <NavLink to="./criminal-single.html">
                  <div className="member">
                    <img
                      src="assets/img/criminals/criminal-modified.png"
                      alt=""
                    />
                    <h4>John Doe</h4>
                    <span>Sexual Assault</span>
                    <div className="mpcard-desc criminals-card-desc">
                      <ul className="">
                        <div>
                          <li>Age: 28</li>
                          <li>Gender: Male</li>
                        </div>
                      </ul>
                    </div>
                    <span className="text-primary border border-primary rounded p-2 d-inline-block span-caught">
                      <h4>Busted</h4>
                    </span>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Criminals;
