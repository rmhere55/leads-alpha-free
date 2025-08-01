import { Link, useParams } from "react-router-dom";
// import "./CountrySelector.css";


import ukIcon from "../assets/uk.svg"
import zaIcon from "../assets/za.svg"
import zmIcon from "../assets/zm.svg"
import ZwIcon from "../assets/Zim.svg"

const countries = [
  { name: "United Kingdom", slug: "uk", flag: ukIcon },
  { name: "South Africa", slug: "za", flag: zaIcon },
  { name: "Zambia", slug: "zm", flag: zmIcon },
  { name: "Zimbabwe", slug: "zw", flag: ZwIcon },
];

export default function CountrySelector() {
  const { slug } = useParams(); // extracts slug from /home/:slug



  return (
    <div className="country-selector">
      <span className="label">I'm based in:</span>
      <div className="country-buttons">
        {countries.map((country) => (
          <Link
            key={country.slug}
            to={`/home/${country.slug}`}
            className={`country-btn ${slug === country.slug ? "active" : ""}`}
          >
            <img src={country.flag} alt={country.slug} />
           
            {country.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
