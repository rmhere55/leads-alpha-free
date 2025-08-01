import React from "react";
import logo1 from "../assets/logo1.jpg";
import logo2 from "../assets/logo2.jpg";
import logo3 from "../assets/logo3.jpg";
import logo4 from "../assets/logo4.jpg";
// import logo5 from '../assets/logo5.jpg';

const TrustSection = () => {
  return (
    <div className="trust-container">
      {/* <button className="get-started-btn">
        Get Started <span className="arrow">↗</span>
      </button> */}
      <button className="get-started-btn">
        Get Started
        <span className="arrow-circle">↗</span>
      </button>

      <div className="client-info">
        <div className="client-logos">
          <img src={logo1} alt="logo1" />
          <img src={logo2} alt="logo2" />
          <img src={logo3} alt="logo3" />
          <img src={logo4} alt="logo4" />
          {/* <img src={logo5} alt="logo5" /> */}
        </div>

        <div className="trusted-text">
          <span> ★★★★★ </span>
          <br />
          Trusted by 40+ clients
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
