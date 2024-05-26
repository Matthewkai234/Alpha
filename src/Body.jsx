import React, { useState, useRef, useEffect } from "react";
import "./style.css";

export const AboutUsPage = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const videoRef = useRef(null);

  const sections = [
    "Welcome to LopoMotor Sport. At LopoMotor Sport, we specialize in providing high-quality auto parts for car enthusiasts and professionals. Explore our wide range of products and enjoy the journey with us.",
    "About Lopo MotorSport. Welcome to Lopo MotorSport, where precision and excellence drive us. We offer top-tier auto parts for all car lovers, ensuring every component meets the highest industry standards. Whether you're maintaining a classic car or a modern marvel, we provide the quality parts you need to keep your vehicle performing optimally. Partner with us on your automotive journey and experience the difference with LopoMotor Sport.",
  ];

  useEffect(() => {
    const video = videoRef.current;
    video.play();
  }, []);

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handleBack = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <div className="about-us-page">
      <div className="content">
        <div className="video-section">
          <video ref={videoRef} className="video" autoPlay loop muted>
            <source src="/carpart.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="description-overlay">
            <h1 className="title">Welcome to LopoMotor Sport</h1>
            <p className={`description ${currentSection > 0 ? 'show' : ''}`}>
              {sections[currentSection]}
            </p>
            <div className="navigation-buttons">
              {currentSection > 0 && <button onClick={handleBack}>Back</button>}
              {currentSection < sections.length - 1 && <button onClick={handleNext}>Next</button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

