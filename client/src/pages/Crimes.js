import React from "react";
import NavigationBar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { NavLink } from "react-router-dom";
const Crimes = () => {
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
              <li>Crimes</li>
            </ol>
            <h2>Crimes</h2>
          </div>
        </section>

        <section id="blog" className="blog">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-8 entries">
                <article className="entry">
                  <div className="entry-img">
                    <img
                      src="assets/img/crimes/crime-img1.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>

                  <h2 className="entry-title">
                    <NavLink to="crimes-single.html">
                      Dolorum optio tempore voluptas dignissimos cumque fuga qui
                      quibusdam quia
                    </NavLink>
                  </h2>

                  <div className="entry-meta">
                    <ul>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-person"></i>{" "}
                        <NavLink to="crimes-single.html">John Doe</NavLink>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-clock"></i>{" "}
                        <NavLink to="crimes-single.html">
                          <time dateTime="2020-01-01">Jan 1, 2020</time>
                        </NavLink>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-chat-dots"></i>{" "}
                        <NavLink to="crimes-single.html">12 Comments</NavLink>
                      </li>
                    </ul>
                  </div>

                  <div className="entry-content">
                    <p>
                      Similique neque nam consequuntur ad non maxime aliquam
                      quas. Quibusdam animi praesentium. Aliquam et laboriosam
                      eius aut nostrum quidem aliquid dicta. Et eveniet enim.
                      Qui velit est ea dolorem doloremque deleniti aperiam unde
                      soluta. Est cum et quod quos aut ut et sit sunt. Voluptate
                      porro consequatur assumenda perferendis dolore.
                    </p>
                    <div className="read-more">
                      <NavLink to="crimes-single.html">Read More</NavLink>
                    </div>
                  </div>
                </article>

                <article className="entry">
                  <div className="entry-img">
                    <img
                      src="assets/img/crimes/crime-img2.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>

                  <h2 className="entry-title">
                    <NavLink to="crimes-single.html">
                      Non rem rerum nam cum quo minus. Dolor distinctio deleniti
                      explicabo eius exercitationem.
                    </NavLink>
                  </h2>

                  <div className="entry-meta">
                    <ul>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-person"></i>{" "}
                        <NavLink to="crimes-single.html">John Doe</NavLink>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-clock"></i>{" "}
                        <NavLink to="crimes-single.html">
                          <time dateTime="2020-01-01">Jan 1, 2020</time>
                        </NavLink>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-chat-dots"></i>{" "}
                        <NavLink to="crimes-single.html">12 Comments</NavLink>
                      </li>
                    </ul>
                  </div>

                  <div className="entry-content">
                    <p>
                      Aspernatur rerum perferendis et sint. Voluptates
                      cupiditate voluptas atque quae. Rem veritatis rerum enim
                      et autem. Saepe atque cum eligendi eaque iste omnis a qui.
                      Quia sed sunt. Ea asperiores expedita et et delectus
                      voluptates rerum. Id saepe ut itaque quod qui voluptas
                      nobis porro rerum. Quam quia nesciunt qui aut est non
                      omnis. Inventore occaecati et quaerat magni itaque nam
                      voluptas. Voluptatem ducimus sint id earum ut nesciunt sed
                      corrupti nemo.
                    </p>
                    <div className="read-more">
                      <NavLink to="crimes-single.html">Read More</NavLink>
                    </div>
                  </div>
                </article>

                <div className="blog-pagination">
                  <ul className="justify-content-center">
                    <li>
                      <NavLink to="#">1</NavLink>
                    </li>
                    <li className="active">
                      <NavLink to="#">2</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">3</NavLink>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="sidebar">
                  <h3 className="sidebar-title">Search</h3>
                  <div className="sidebar-item search-form">
                    <form action="">
                      <input type="text" />
                      <button type="submit">
                        <i className="bi bi-search"></i>
                      </button>
                    </form>
                  </div>

                  <h3 className="sidebar-title">Categories</h3>
                  <div className="sidebar-item categories">
                    <ul>
                      <li>
                        <NavLink to="#">
                          Accident <span>(25)</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#">
                          Murder <span>(12)</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#">
                          Theft <span>(5)</span>
                        </NavLink>
                      </li>
                      <li>
                        <a to="#">
                          Sexual Asssault <span>(22)</span>
                        </a>
                      </li>
                      <li>
                        <NavLink to="#">
                          Violence <span>(8)</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#">
                          Assault <span>(14)</span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Crimes;
