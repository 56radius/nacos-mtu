import React, { useEffect, useState } from "react";
import ".././assets/css/SplashScreen.css";

//importing the logo
import logo from "../assets/img/logo.png"

function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`splash-screen ${showSplash ? "show" : "hide"}`}>
      <img src={logo} alt="logo" />
      <h2> Welcome To NACOS MTU </h2>
    </div>
  );
}

export default SplashScreen;
