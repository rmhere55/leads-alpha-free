// import flipbox from "../../assets/brands/flipbox.png";
// import sustain from "../../assets/brands/sustain.png";
// import lohana from "../../assets/brands/lohana.png";
// import nobhill from "../../assets/brands/nobhill.png";
// import knightfrank from "../../assets/brands/knightfrank.png";
// import zamaronge from "../../assets/brands/zamaronge.png";
// import elevatebody from "../../assets/brands/elevatebody.png";
// import rumax from "../../assets/brands/rumax.png";
// import alcon from "../../assets/brands/alcon.png";
// import marvelous from "../../assets/brands/marvelous.png";

// const brandLogos = [
//   flipbox,
//   sustain,
//   lohana,
//   nobhill,
//   knightfrank,
//   zamaronge,
//   elevatebody,
//   rumax,
//   alcon,
//   marvelous,
// ];

// const Brands = () => {
//   return (
//     <div className="brands-section">
//       <h3 className="brands-heading">Editing that grows brand audiences</h3>
//       <div className="brands-logos">
//         {brandLogos.map((src, idx) => (
//           <img src={src} alt={`Brand ${idx}`} key={idx} className="brand-logo" />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Brands;
import React from "react";
import Marquee from "react-fast-marquee";

import flipbox from "../../assets/brands/flipbox.png";
import sustain from "../../assets/brands/sustain.png";
import lohana from "../../assets/brands/lohana.png";
import nobhill from "../../assets/brands/nobhill.png";
import knightfrank from "../../assets/brands/knightfrank.png";
import zamaronge from "../../assets/brands/zamaronge.png";
import elevatebody from "../../assets/brands/elevatebody.png";
import rumax from "../../assets/brands/rumax.png";
import alcon from "../../assets/brands/alcon.png";
import marvelous from "../../assets/brands/marvelous.png";

const brandLogos = [
  flipbox,
  sustain,
  lohana,
  nobhill,
  knightfrank,
  zamaronge,
  elevatebody,
  rumax,
  alcon,
  marvelous,
];

const Brands = () => {
  return (
    <div className="brands-section">
      <h3 className="brands-heading">Editing that grows brand audiences</h3>
      <div className="marquee-container">
        <Marquee
          speed={50}
          direction="right"
          gradient={false}
          pauseOnHover={true}
          className="marquee-track"
        >
          {brandLogos.map((src, idx) => (
            <img src={src} alt={`Brand ${idx}`} key={idx} className="brand-logo" />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Brands;
