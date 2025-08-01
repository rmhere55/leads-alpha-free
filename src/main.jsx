import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../public/index.css'
import '../public/mobile.css'
import "../public/footer.css"
import "../public/navbar.css"
import "../public/home.css"
import "../public/ConnectCreators.css";
import "../public/Brands.css";
import "../public/Pricing.css";
import "../public/UGCSection.css";
import "../public/Videoviews.css";
import "../public/ServicesGrid.css";
import "../public/WhyChooseUs.css";
import "../public/CountrySelector.css";
import "../public/TrustSection.css";
import "../public/ResultsCard.css";
import "../public/ReelCarousel.css";



import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)