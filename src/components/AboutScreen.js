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

        <div>
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

        {/* First header in the about screen */} <br />
        <div>
            <h2> History </h2>
            <p> The Nigerian Association of Computing Students (NACOS) is a student professional body with presence in almost all tertiary institutions in Nigeria (both private and government owned). NACOS was founded by groups of students in July 1993 with the backing of Nigerian Computer Society (NCS) as its parent body. It provides avenues for students (in any IT related field) to highlight and champion issues of interest in a coordinated and organized manner. </p>
            <p> 
      NACOS members (NACOSites) are students studying in tertiary institutions in computer related disciplines including: Computer Science, Computer Engineering, Software Engineering, Cybersecurity, Information Technology, etc. Each member is essentially a member of the Association’s local chapter in his or her institution. As at April 2012, NACOS stated that it is the largest and most organized student body in West Africa, with registered members of about Two Hundred and Fifty thousand (250 000) in well over One Hundred and fifty local chapters (and more unregistered) in different Institutions (Universities, Polytechnics and Colleges of Education) across the six (6) Geo-political zones of Nigeria at the time. </p>
        </div>
        </div>
    );
}

export default AboutScreen;