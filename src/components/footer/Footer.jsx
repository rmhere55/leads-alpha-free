import React from "react";
import  "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        {/* Services */}
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>Apps</li>
            <li>Agencies</li>
            <li>eCommerce</li>
            <li><strong>By Platform</strong></li>
            <li>TikTok</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Other</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>Help</li>
            <li>What is UGC?</li>
            <li>Case Studies</li>
            <li>Blogs</li>
            <li>Affiliate program</li>
          </ul>
        </div>

        {/* Socials */}
        <div className="footer-column">
          <h4>Socials</h4>
          <ul>
            <li>Instagram</li>
            <li>TikTok</li>
            <li>Facebook</li>
            <li>Linked In</li>
            <li>X</li>
            <li>Snapchat</li>
            <li>Masterclass</li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Site Notice</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Credit Expiration Policy</li>
            <li>T & Cs - Creators</li>
            <li>T & Cs - Brands</li>
          </ul>
        </div>

        {/* FAQs */}
        <div className="footer-column">
          <h4>FAQ’s</h4>
          <ul>
            <li>FAQ’s Brands</li>
            <li>FAQ’s Creators</li>
          </ul>
        </div>

        {/* Brand/Right Side */}
        <div className="footer-brand">
          <div className="brand-logo">
            <img src="/logo.png" alt="Leads Alpha" />
            <h3>Leads Alpha</h3>
          </div>
          <p>Excel on paid social with authentic creator videos.</p>
          <div className="google-review">
            <img src="/google-logo.png" alt="Google" />
            <div>
              <span>★★★★★</span>
              <p>4.9/5 From 3,602 Customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="footer-bottom">
        © 2025 By Leads Alpha. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
