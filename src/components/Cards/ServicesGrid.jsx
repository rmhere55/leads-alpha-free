
import { FaTiktok, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiLink, FiVideo, FiMessageCircle } from "react-icons/fi";

const iconMap = {
  tiktok: <FaTiktok />,
  instagram: <FaInstagram />,
  facebook: <FaFacebookF />,
  link: <FiLink />,
  editing: <FiVideo />,
  chat: <FiMessageCircle />,
};

const services = [
  {
    title: "Reels",
    description:
      "High quality social media reels for your business’ TikTok and Instagram created for your brand by Leads Alpha’s top UGC creators.",
    icons: ["tiktok", "instagram", "facebook", "link"],
  },
  {
    title: "Edited Videos",
    description:
      "Elevate your social media videos with custom editing that clearly demonstrates your product & services",
    icons: ["editing"],
  },
  {
    title: "Social Media Content",
    description:
      "Hire top creators to create your monthly social media content for marketing. Keep your socials active & engaging!",
    icons: ["chat"],
  },
  {
    title: "Ship Your Product",
    description:
      "You can courier your product to the creator of your choice for them to create a more interactive product experience with your product to your target audience.",
    icons: [],
  },
];

const ServicesGrid = () => {
  return (
    <section className="services-section">
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            // className={`service-card ${index === 3 ? "wide" : ""}`}
            className="service-card"
            key={index}
          >
            <div className="service-icons">
              {service.icons.map((icon, i) => (
                <div className="icon-circle" key={i}>
                  {iconMap[icon]}
                </div>
              ))}
            </div>
            <div className="service-text">
              <h3>{service.title}</h3>
            </div>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
