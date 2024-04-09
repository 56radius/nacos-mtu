import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import bottomright from "../assets/img/bottomright.png";
import mtulogo from "../assets/img/mtulogo.png";
import nacoslogo from "../assets/img/nacoslogo.png";
import ".././assets/css/style.css";
import ".././assets/vendor/bootstrap/css/bootstrap.min.css";
import ".././assets/vendor/bootstrap-icons/bootstrap-icons.css";
import ".././assets/vendor/boxicons/css/boxicons.min.css";
import ".././assets/vendor/glightbox/css/glightbox.min.css";
import ".././assets/vendor/remixicon/remixicon.css";
import ".././assets/vendor/swiper/swiper-bundle.min.css";

function HomeScreen() {
  const navigate = useNavigate();
  return (
    <div>
      {/* first header */}
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <img src={logo} alt="logo" className="logo" />
            <button
              style={{
                borderWidth: 0,
                borderColor: "#fff",
                background: "#fff",
                color: "#083A00",
                fontWeight: "bold",
                fontSize: "60%",
              }}
              href="index.html"
            >
              NACOS MTU
            </button>
          </h1>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  <span id="Love"> Home </span>
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  Events
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#team">
                  Library
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Qhub
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Resources
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Alumni
                </a>
              </li>
              <li>
                <a
                  style={{ textDecoration: "none" }}
                  className="getstarted scrollto"
                  onClick={() => navigate("/login")}
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      {/* Second header */}
      <section id="hero" className="d-flex align-items-center position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-2 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 style={{ color: "#fff" }}>
                POWERED BY <br /> COMPUTER SCIENCE
              </h1>
              <ul>
                <h2 style={{ color: "#fff" }}> Empowered to Excel </h2>
              </ul>
              <div className="mt-3">
                <button
                  style={{
                    borderWidth: 0,
                  }}
                  onClick={() => navigate("/register")}
                  className="btn-get-started scrollto"
                >
                  {" "}
                  Learn About{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute bottom-0 start-0 d-flex align-items-center">
          <img src={nacoslogo} alt="nacoslogo" />
          <span style={{ fontSize: "420%", color: "#fff" }}> | </span>
          <img src={mtulogo} alt="mtulogo" />
          <h2 style={{ color: "#fff", marginLeft: "10px" }}>
            IN ASSOCIATION WITH
            <br />
            THE NIGERIAN ASSOCIATION OF COMPUTING STUDENTS
            <br />
            AND MOUNTAIN TOP UNIVERSITY
          </h2>
        </div>
        <div className="position-absolute bottom-0 end-0">
          <img src={bottomright} alt="bottomright" />
        </div>
      </section>

      {/* Third section */}
      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Services</h2>
          </div>

          <div className="row">
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bxl-dribbble"></i>
                </div>
                <h4>
                  <a href=""> Mindfulness Meditation </a>
                </h4>
                <p>
                  {" "}
                  Our Mindfulness meditation program utilizes AI technology to
                  deliver personalized guided meditations and regular meditation
                  practice that fits your lifestyle and supports your mental
                  health.{" "}
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-file"></i>
                </div>
                <h4>
                  <a href=""> Mindfulness-Based Cognitive Therapy </a>
                </h4>
                <p>
                  {" "}
                  Our mindfulness-based cognitive therapy program helps you
                  manage negative thoughts, emotions and behaviours.{" "}
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-tachometer"></i>
                </div>
                <h4>
                  <a href=""> Mindfulness-Based Stress Reduction </a>
                </h4>
                <p>
                  {" "}
                  Offers a holistic approach to stress management that
                  incorporates mindfulness practices, yoga and body awareness
                  techniques.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
          </div>
          <div className="row content">
            <div className="col-lg-6">
              <div className="col-lg-6 order-1 order-lg-2 hero-img">
                {/*}
                <img
                  src={health}
                  style={{width: 1350}}
                  className="img-fluid"
                  alt=""
                />

*/}
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
                <span style={{ fontWeight: "bold", fontSize: 50 }}>AVA's</span>
                distinctive edge lies in its dedication to simplicity and
                accessibility, mirroring the essence of mental health care. Just
                as AVA prioritizes ease of use and affordability in financial
                services, it champions these values in mental health support,
                ensuring that individuals facing mental health challenges can
                readily access the care they need. Our commitment extends to
                breaking down barriers for the underbanked and unbanked,
                aligning with the ethos of inclusivity crucial in mental health
                services.
              </p>

              <p className="fst-italic">
                Drawing parallels to our customer acquisition channels, which
                utilize community mobilization and social media outreach, we
                recognize the importance of community engagement and online
                platforms in mental health awareness. By leveraging these
                channels effectively, we can reach individuals who may be
                struggling silently, offering them avenues to seek support and
                guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* parallax effect */}
      <section style={{ position: "relative", height: 700 }}>
        <div class="p-one parallax-inner">
          <h2 style={{ fontWeight: "bold" }}>AVINX HEALTH</h2>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeScreen;
