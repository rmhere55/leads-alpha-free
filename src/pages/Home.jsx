import CountrySelector from "../components/CountrySelector";
import TrustSection from "../components/TrustSection.jsx";
import BrandLogos from "../assets/brands.svg"; // adjust path if needed
import Footer from '../components/footer/Footer'
import Videoviews from '../components/footer/Videoviews'
import Brands from '../components/Brands/Brands'
import WhyChooseUs from '../components/Brands/WhyChooseUs'
import ServicesGrid from '../components/Cards/ServicesGrid'
import ConnectCreators from '../components/Brands/ConnectCreators'
import UGCSection from '../components/UGCSection/UGCSection'
import Pricing from '../components/Pricing/Pricing'
import ReelCarousel from "../components/ReelsCarousel/ReelCarousel.jsx";
import BriefSection from "../components/BriefSection/BriefSection.jsx";
import ResultsCard from "../components/Cards/ResultsCard.jsx";


export default function Home() {
  return (
    <>
    <div className="home">
      <section id="s-1">
        <CountrySelector />

        <div className="hero-content">
          <h1 className="hero-title">
            Connecting <span className="highlight">Brands</span>
            <img src={BrandLogos} alt="Brand Logos" className="brand-logos" />
            <span className="highlight">To UGC</span>
          </h1>

          <h2 className="hero-subtitle">That Skyrockets Your Ads</h2>

          <p className="hero-description">
            Produce high-quality, authentic, and personalised user-generated content videos for your business<br />
            crafted by genuine creators from around the globe
          </p>
        </div>
              <TrustSection />

      </section>
    </div>
    <ReelCarousel/>
    <Brands/>
      <WhyChooseUs/>
      <ServicesGrid/>
      <UGCSection/>
      <ConnectCreators/>
      {/* <BriefSection/> */}
      <ResultsCard/>
      <Pricing/>
      <Videoviews/>
      {/* <Footer/> */}
      
    </>
  );
}
