import React from "react";
import { useNavigate } from "react-router-dom";

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

import NavbarScreen from "../elements/NavbarScreen";


function HomeScreen() {
  const navigate = useNavigate();
  return (
    <div className="wrapper" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      {/* first header */}
      <NavbarScreen />

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
{/* Executives pictures section */}
<section id="executives" style={{ marginTop: "60px" }}>
  <div className="container">
    <div className="section-title"></div>
    <div className="row content">
      <div className="col-lg-6">
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={user} alt="user" style={{ marginRight: "20px" }} />
            <div>
              <h2 style={{ color: "#000000", fontSize: "230%" }}> Executives </h2> <br />
              <h3 style={{ fontFamily: "Cabinet Grotesk", marginTop: "-6%", fontSize: "150%" }}> Meet the Executive Committee </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 order-lg-2 d-flex justify-content-end">
        <img src={rightarrow} alt="rightarrow" style={{ cursor: "pointer", height: "80px", width: "80px" }} />
      </div>
    </div>

    <div style={{marginTop: "5%"}} className="row">
      <div className="col-lg-6">
        <div className="team-card-container">
          <div className="team-card">
            <div className="team-img-wrapper">
              <img className="team-img" src={picture} style={{ maxHeight: "20%", maxWidth: "90%", borderRadius: "5px" }} />
            </div>
            <div className="team-card-content">
              <p className="text-blk name">Merit Mohammed</p>
              <p className="text-blk position">PRESIDENT</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-2">
        <div className="team-card-container">
          <div className="team-card">
            <div className="team-img-wrapper">
              <img className="team-img" src={picture} style={{ height: "auto", maxWidth: "100%", borderRadius: "5px" }} />
            </div>
            <div className="team-card-content">
              <p className="text-blk name">Roger Lubin</p>
              <p className="text-blk position">CEO</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-2">
        <div className="team-card-container">
          <div className="team-card">
            <div className="team-img-wrapper">
              <img className="team-img" src={picture} style={{ height: "auto", maxWidth: "100%", borderRadius: "5px" }} />
            </div>
            <div className="team-card-content">
              <p className="text-blk name">Roger Lubin</p>
              <p className="text-blk position">CEO</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-2">
        <div className="team-card-container">
          <div className="team-card">
            <div className="team-img-wrapper">
              <img className="team-img" src={picture} style={{ height: "auto", maxWidth: "100%", borderRadius: "5px" }} />
            </div>
            <div className="team-card-content">
              <p className="text-blk name">Roger Lubin</p>
              <p className="text-blk position">CEO</p>
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
