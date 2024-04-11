import React, { useEffect, useState } from "react";
import ".././assets/css/SplashScreen.css";

//importing the logo
import logo from "../assets/img/secondabout.png";

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
      <img src={logo} alt="logo" style={{width: "30%"}} />
      
    </div>
  );
}

export default SplashScreen;
