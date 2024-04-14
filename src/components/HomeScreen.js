import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarScreen from "../elements/NavbarScreen";
import background from "../assets/img/frame.jpg";
import nacoslogo from "../assets/img/nacoslogo.png";
import mtulogo from "../assets/img/mtulogo.png";
import question from "../assets/img/question.png";
import user from "../assets/img/user.png";
import rightarrow from "../assets/img/rightarrow.png";
import bottomright from "../assets/img/bottomright.png";
import aboutlogo from "../assets/img/aboutlogo.png";
import secondabout from "../assets/img/secondabout.png";
import merit from "../assets/img/merit.jpeg";
import events from "../assets/img/events.png";

import ".././assets/css/style.css";
import ".././assets/vendor/bootstrap/css/bootstrap.min.css";
import ".././assets/vendor/bootstrap-icons/bootstrap-icons.css";
import ".././assets/vendor/boxicons/css/boxicons.min.css";
import ".././assets/vendor/glightbox/css/glightbox.min.css";
import ".././assets/vendor/remixicon/remixicon.css";
import ".././assets/vendor/swiper/swiper-bundle.min.css";

function HomeScreen() {
  const navigate = useNavigate();
  const [expandedImg, setExpandedImg] = useState(null);

  const handleImgClick = (img) => {
    setExpandedImg(img === expandedImg ? null : img); // Toggle expanded image
  };

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
                <img src={aboutlogo} style={{ width: "523px", transition: "all 0.5s ease-in-out" }} className="img-fluid" alt="aboutlogo" />
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
                    <h3 style={{ fontFamily: "Cabinet Grotesk",  marginTop: "-6%", fontSize: "150%"  }}> Brief History of the MTU chapter </h3>
                  </div>
                  <img src={question} alt="question" style={{ marginLeft: "20px" }} />
                </div>
              </div> <br />
              <p style={{fontFamily: "Cabinet Grotesk", fontSize: "140%"}}>
              The Nigerian Association of Computing Students (NACOS) is a student professional body that is now present in almost every tertiary institution in Nigeria. The primary aim is to connect all students and alumni of the college of computing to each other. NACOS came to Mountain Top University in 2021 and the MTU Chapter has grown rapidly since then. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executives section */}
      <section id="executives" style={{ marginTop: "60px" }}>
        <div className="container">

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
              <img src={rightarrow} alt="rightarrow" style={{ cursor: "pointer", height: "70px", width: "70px" }} />
            </div>
          </div>

          <div className="row no-gutters"> {/* Added class 'no-gutters' */}
            {/* First Image */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="team-card-container">
                <div className="team-card">
                  <div className="team-img-wrapper" style={{ position: "relative" }}>
                    <img
                      className="team-img"
                      src={merit}
                      style={{
                        width: expandedImg === 'merit' ? "226.5px" : "523px",
                        height: "690px",
                        borderRadius: "5px",
                        transition: "all 0.5s ease-in-out"
                      }}
                      onClick={() => handleImgClick('merit')}
                    />
                    <div style={{ position: "absolute", bottom: "10px", left: "10px", color: "white", backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "5px" }}>
                      <p className="text-white name">Merit Mohammed</p>
                      <p className="text-white position">PRESIDENT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Image */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="team-card-container">
                <div className="team-card">
                  <div className="team-img-wrapper" style={{ position: "relative" }}>
                    <img
                      className="team-img"
                      src={merit}
                      style={{
                        width: expandedImg === 'events' ? "523px" : "226.5px",
                        height: "690px",
                        borderRadius: "5px",
                        transition: "all 0.5s ease-in-out"
                      }}
                      onClick={() => handleImgClick('events')}
                    />
                    <div style={{ position: "absolute", bottom: "10px", left: "10px", color: "white", backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "5px" }}>
                      <p className="text-white name">Events</p>
                      <p className="text-white position">Stay up to date</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Image */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="team-card-container">
                <div className="team-card">
                  <div className="team-img-wrapper" style={{ position: "relative" }}>
                    <img
                      className="team-img"
                      src={merit}
                      style={{
                        width: expandedImg === 'user' ? "523px" : "226.5px",
                        height: "690px",
                        borderRadius: "5px",
                        transition: "all 0.5s ease-in-out"
                      }}
                      onClick={() => handleImgClick('user')}
                    />
                    <div style={{ position: "absolute", bottom: "10px", left: "10px", color: "white", backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "5px" }}>
                      <p className="text-white name">User</p>
                      <p className="text-white position">Description</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Fourth Image */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="team-card-container">
                <div className="team-card">
                  <div className="team-img-wrapper" style={{ position: "relative" }}>
                    <img
                      className="team-img"
                      src={merit}
                      style={{
                        width: expandedImg === 'rightarrow' ? "523px" : "226.5px",
                        height: "690px",
                        borderRadius: "5px",
                        transition: "all 0.5s ease-in-out"
                      }}
                      onClick={() => handleImgClick('rightarrow')}
                    />
                    <div style={{ position: "absolute", bottom: "10px", left: "10px", color: "white", backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "5px" }}>
                      <p className="text-white name">Right Arrow</p>
                      <p className="text-white position">Description</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/*Events section */}
        <section id="executives" style={{ marginTop: "60px" }}>
        <div className="container">

          <div className="row content">
            <div className="col-lg-6">
              <div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={events} alt="user" style={{ marginRight: "20px" }} />
                  <div>
                    <h2 style={{ color: "#000000", fontSize: "230%" }}> Events </h2> <br />
                    <h3 style={{ fontFamily: "Cabinet Grotesk", marginTop: "-6%", fontSize: "150%" }}> Stay up to date</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-2 d-flex justify-content-end">
              <img src={rightarrow} alt="rightarrow" style={{ cursor: "pointer", height: "70px", width: "70px" }} />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
  
export default HomeScreen;
