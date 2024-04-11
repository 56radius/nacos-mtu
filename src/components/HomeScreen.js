import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import bottomright from "../assets/img/bottomright.png";
import mtulogo from "../assets/img/mtulogo.png";
import nacoslogo from "../assets/img/nacoslogo.png";
import aboutlogo from "../assets/img/aboutlogo.png";
import secondabout from "../assets/img/secondabout.png";
import question from "../assets/img/question.png";
import background from "../assets/img/frame.jpg"; // Path to your background image
import user from "../assets/img/user.png";
import rightarrow from "../assets/img/rightarrow.png";
import picture from "../assets/img/picture.jpg";

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
    <div className="wrapper" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
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
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
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
              <h1 style={{ color: "#fff", fontSize: "340%" }}>
                POWERED BY <br /> COMPUTER SCIENCE
              </h1>
              <ul>
                <h2 style={{ color: "#fff", fontSize: "240%" }}> Empowered to Excel </h2>
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
        <div className="position-absolute bottom-0 start-0 d-flex align-items-center" style={{ marginLeft: "250px" , marginBottom: "20px"}}>
          <img src={nacoslogo} alt="nacoslogo" />
          <span style={{ fontSize: "420%", color: "#fff" }}> | </span>
          <img src={mtulogo} alt="mtulogo" />
          <h2 style={{ color: "#fff", marginLeft: "10px", fontSize: "100%" }}>
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

      {/* First About */}
      <section id="about" style={{marginTop: "90px"}} className="about">
        <div className="container">
          <div className="section-title"></div>
          <div className="row content">
            <div className="col-lg-6">
              <div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={question} alt="question" style={{ marginRight: "20px" }} />
                  <div>
                    <h2 style={{ color: "#000000", fontSize: "230%"}}> About NACOS </h2>
                    <h3 style={{ fontFamily: "Cabinet Grotesk",  marginTop: "-6%", fontSize: "150%"  }}> Brief History of NACOS National </h3>
                  </div>
                </div> <br/>
                <p style={{ fontFamily: "Cabinet Grotesk", fontSize: "140%" }}>
                  The Nigerian Association of Computing Students (NACOS) is a student professional body with presence in almost all tertiary institutions in Nigeria (both private and government owned). NACOS was founded by groups of students in July 1993 with the backing of Nigerian Computer Society (NCS) as its parent body. It provides avenues for students (in any IT related field) to highlight and champion issues of interest in a coordinated and organized manner.
                </p>
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <div className="col-lg-6 order-1 order-lg-2 hero-img">
                <img src={aboutlogo} style={{ width: 1350 }} className="img-fluid" alt="aboutlogo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second About section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-title"></div>
          <div className="row content">
            <div className="col-lg-6 order-lg-1">
              <div className="col-lg-6 hero-img">
                <img
                  src={secondabout}
                  style={{width: 1350}}
                  className="img-fluid"
                  alt="aboutlogo"
                />
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-lg-2">
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                  <div style={{ textAlign: "right" }}>
                    <h2 style={{color: "black"}}> NACOS MTU </h2>
                    <h3 style={{ fontFamily: "Cabinet Grotesk",  marginTop: "-6%", fontSize: "150%"  }}> Brief History of NACOS MTU CHAPTER </h3>
                  </div>
                  <img src={question} alt="question" style={{ marginLeft: "20px" }} />
                </div>
              </div> <br />
              <p style={{fontFamily: "Cabinet Grotesk", fontSize: "140%"}}>
                The Nigerian Association of Computing Students (NACOS) is a student professional body that is now present in almost every tertiary institution in Nigeria. The primary aim is to connect all students and alumna of the college of computing to each other. NACOS came to Mountain Top University in 2021 and the MTU Chapter has grown rapidly since then. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executives section */}
      <section id="about" style={{marginTop: "60px"}} className="about">
        <div className="container">
          <div className="section-title"></div>
          <div className="row content">
            <div className="col-lg-6">
              <div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={user} alt="question" style={{ marginRight: "20px" }} />
                  <div>
                    <h2 style={{ color: "#000000", fontSize: "230%"}}> Executives </h2>
                    <h3 style={{ fontFamily: "Cabinet Grotesk",  marginTop: "-6%", fontSize: "150%"  }}> Meet the Executtive Committee </h3>
                  </div>
                </div> <br/>
              </div>
            </div>
            <div className="col-lg-6 order-lg-2 d-flex justify-content-end">
              <img src={rightarrow} alt="rightarrow" style={{ cursor: "pointer", height: "80px",  width: "80px" }} />
            </div>
          </div>

          <div class="container-block container">
  <div class="responsive-container-block teamcard-container">
    <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container">
      <div class="team-card">
        <div class="team-img-wrapper">
          <img class="team-img" src={picture} />
        </div>
        <div class="team-card-content">
          <p class="text-blk name">
            Roger Lubin
          </p>
          <p class="text-blk position">
            CEO
          </p>
        </div>
      </div>
    </div>
    <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container">
      <div class="team-card">
        <div class="team-img-wrapper">
          <img class="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft13.svg" />
        </div>
        <div class="team-card-content">
          <p class="text-blk name">
            Roger Lubin
          </p>
          <p class="text-blk position">
            CEO
          </p>
        </div>
      </div>
    </div>
    <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container">
      <div class="team-card">
        <div class="team-img-wrapper">
          <img class="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft14.svg" />
        </div>
        <div class="team-card-content">
          <p class="text-blk name">
            Roger Lubin
          </p>
          <p class="text-blk position">
            CEO
          </p>
        </div>
      </div>
    </div>
    <div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container">
      <div class="team-card">
        <div class="team-img-wrapper">
          <img class="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft12.svg" />
        </div>
        <div class="team-card-content">
          <p class="text-blk name">
            Roger Lubin
          </p>
          <p class="text-blk position">
            CEO
          </p>
        </div>
      </div>
    </div>
  
  </div>
</div>
        </div>
      </section>

      {/* Events */}
    </div>
  );
}

export default HomeScreen;
