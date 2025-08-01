// import React from "react";
// import "./HeroSection.css";

// const HeroSection = () => {
//   return (
//     <section className="hero-section">
//       {/* I'm based in */}
//       <div className="region-selector">
//         <span>I’m based in:</span>
//         <button className="region-btn">
//           🇬🇧 United Kingdom
//         </button>
//         <button className="region-btn">
//           🇿🇦 South Africa
//         </button>
//         <button className="region-btn">
//           🇿🇲 Zambia
//         </button>
//       </div>

//       {/* Main Text */}
//       <div className="hero-text">
//         <h1>
//           Connecting <span className="highlight">Brands</span>{" "}
//           <span className="icons">🎵 📘 🔴</span> To{" "}
//           <span className="highlight">UGC</span>
//         </h1>
//         <h2>That Skyrockets Your Ads</h2>
//       </div>

//       {/* Paragraph */}
//       <p className="hero-description">
//         Produce high-quality, authentic, and personalised user-generated
//         content videos for your business crafted by genuine creators from
//         around the globe
//       </p>

//       {/* Get Started CTA */}
//       <div className="hero-cta">
//         <button className="cta-button">
//           Get Started <span className="arrow">↗</span>
//         </button>
//         <div className="trust-section">
//           <img src="/logos.png" alt="trusted clients" className="trust-logos" />
//           <span className="trust-text">★ ★ ★ ★ ★<br />Trusted by 40+ clients</span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import BrandsLogoGroup from '../../assets/brands.svg';

export default function HeroSection() {
  return (
    <section className="hero">
      <h1 className="hero-heading">
        Connecting <span className="highlight">Brands</span>
        <img src={BrandsLogoGroup} alt="Brand Logos" className="brand-logos" />
        <span className="highlight">To UGC</span>
      </h1>
      <h2 className="sub-heading">That Skyrockets Your Ads</h2>
      <p className="hero-desc">
        Produce high-quality, authentic, and personalised user-generated content videos for your business<br />
        crafted by genuine creators from around the globe
      </p>
    </section>
  );
}