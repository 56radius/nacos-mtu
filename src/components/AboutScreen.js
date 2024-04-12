import React from "react";

import ".././assets/css/style.css";
import ".././assets/vendor/bootstrap/css/bootstrap.min.css";
import ".././assets/vendor/bootstrap-icons/bootstrap-icons.css";
import ".././assets/vendor/boxicons/css/boxicons.min.css";
import ".././assets/vendor/glightbox/css/glightbox.min.css";
import ".././assets/vendor/remixicon/remixicon.css";
import ".././assets/vendor/swiper/swiper-bundle.min.css";

import NavbarScreen from "../elements/NavbarScreen";

function AboutScreen() {
    return(
        <div>
                {/* first header */}
      <NavbarScreen />

         <h2 
            style={{
                marginTop: "160px", 
                textAlign: "center", 
                fontFamily: "Cabinet Grotesk", 
                fontWeight: 'bold', 
                color: "#000000", 
                lineHeight: "45px"
            }}
         > 
         About NACOS 
        </h2>
        </div>
    );
}

export default AboutScreen;