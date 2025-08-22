import React from "react";
import "./WelcomeBanner.css";

const WelcomeBanner: React.FC = () => (
  <section className="welcome-banner-section">
    <div className="welcome-banner-marquee-container">
      <div className="welcome-banner-marquee welcome-banner-marquee-left">
        {"BLESSED & SAVED       ".repeat(20)}
      </div>
    </div>
    {/* <div className="welcome-banner-marquee-container">
      <div className="welcome-banner-marquee welcome-banner-marquee-right">
        {"SAVED       ".repeat(20)}
      </div>
    </div> */}
  </section>
);

export default WelcomeBanner;
