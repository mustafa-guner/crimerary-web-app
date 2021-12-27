import React from "react";
import { NavLink } from "react-router-dom";
import NavigationBar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
const Team = () => {
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
              <li>Team</li>
            </ol>
            <h2>Our Team</h2>
          </div>
        </section>

        <section id="team" className="team">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-6 d-flex align-items-stretch"></div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <img src="assets/img/bort.png" alt="" />
                  <h4>Borte Avsaroglu</h4>
                  <span>Frontend Developer</span>
                  <p>
                    Magni qui quod omnis unde et eos fuga et exercitationem.
                    Odio veritatis perspiciatis quaerat qui aut aut aut
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <img src="assets/img/musdi.png" alt="" />
                  <h4>Mustafa Guner</h4>
                  <span>Full Stack Developer</span>
                  <p>
                    Repellat fugiat adipisci nemo illum nesciunt voluptas
                    repellendus. In architecto rerum rerum temporibus
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 d-flex align-items-stretch"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-6 d-flex align-items-stretch"></div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <img src="assets/img/akil.png" alt="" />
                  <h4>Akil Evlat</h4>
                  <span>System Analyzer & UML Designer</span>
                  <p>
                    Voluptas necessitatibus occaecati quia. Earum totam
                    consequuntur qui porro et laborum toro des clara
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <img src="assets/img/ufuk.png" alt="" />
                  <h4>Ufuk Cem Delice</h4>
                  <span>System Analyzer & UI Designer</span>
                  <p>
                    Voluptas necessitatibus occaecati quia. Earum totam
                    consequuntur qui porro et laborum toro des clara
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 d-flex align-items-stretch"></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Team;
