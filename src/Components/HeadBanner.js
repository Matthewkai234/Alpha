import React from "react";
import "./Styling/HeadBanner.css"; // Import the CSS file

const headBannerData = {
  title: "Find the Autopart for You",
  description: "Discover which part is best for you based on your budget, driving habits, and lifestyle.",
  backgroundImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/469b461b34b6efcbdb8d500cad10827b2b701b46b4511b19b5c6dabc8730f829?apiKey=0830991684b94f42bd968d44e66e6dd0&",
  buttons: [
    { text: "Shop Now", variant: "primary" },
    { text: "Explore More", variant: "secondary" },
  ],
};

function HeadBanner() {
  return (
    <section className="head-banner-section">
      <img className="head-banner-background" src={headBannerData.backgroundImage} alt="HeadBanner background" />
      <div className="head-banner-content">
        <h1 className="head-banner-title">{headBannerData.title}</h1>
        <p className="head-banner-description">{headBannerData.description}</p>
        <div className="head-banner-button-container">
          {headBannerData.buttons.map((button, index) => (
            <button key={index} className={`head-banner-button ${button.variant}`}>              
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeadBanner;
