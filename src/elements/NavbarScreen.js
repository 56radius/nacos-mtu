import React from "react";

import logo from "../assets/img/logo.png";

import ".././assets/css/style.css";
import ".././assets/vendor/bootstrap/css/bootstrap.min.css";
import ".././assets/vendor/bootstrap-icons/bootstrap-icons.css";
import ".././assets/vendor/boxicons/css/boxicons.min.css";
import ".././assets/vendor/glightbox/css/glightbox.min.css";
import ".././assets/vendor/remixicon/remixicon.css";
import ".././assets/vendor/swiper/swiper-bundle.min.css";

function NavbarScreen(navigate) {
    return(
        <div>
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
        </div>
    );
}

export default NavbarScreen;