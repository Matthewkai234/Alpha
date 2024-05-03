import React from "react";
import { MaskGroup } from "./MaskGroup";
import "./style.css";

export const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <div className="div">
        <div className="overlap-group">
          <div className="rectangle" />
          <img className="background" alt="Background" src="https://c.animaapp.com/ZgDZ3AY7/img/background-.svg" />
          <img className="line" alt="Line" src="https://c.animaapp.com/ZgDZ3AY7/img/line-1.svg" />
          <img className="img" alt="Rectangle" src="https://c.animaapp.com/ZgDZ3AY7/img/rectangle-51.svg" />
          <img className="image" alt="Image" src="https://c.animaapp.com/ZgDZ3AY7/img/image-5@2x.png" />
          <img
            className="DALLE"
            alt="Dalle"
            src="https://c.animaapp.com/ZgDZ3AY7/img/dall-e-2024-04-08-16-44-02---create-another-sophisticated-image-.png"
          />
          <img className="line-2" alt="Line" src="https://c.animaapp.com/ZgDZ3AY7/img/line-2.svg" />
          <div className="text-wrapper">About Us</div>
          <div className="text-wrapper-2">Profile</div>
          <MaskGroup
            className="mask-group-instance"
            property1="default"
            propertyDefault="https://c.animaapp.com/ZgDZ3AY7/img/mask-group.svg"
          />
          <div className="text-wrapper-3">Home</div>
          <div className="text-wrapper-4">Products</div>
          <div className="text-wrapper-5">Payment</div>
          <div className="text-wrapper-6">About Us</div>
          <div className="support-contact-us">Support &amp; Contact us</div>
          <p className="welcome-to-lopo">
            Welcome to Lopo MotorSport, where we fuel the journey of car enthusiasts and professionals alike.
            <br />
            <br /> With our heritage of precision, we offer a wide range of high-quality auto parts that meet or exceed
            industry standards.
            <br />
            <br /> Our commitment is to ensure your vehicle performs at its best, with every component we offer made
            from durable materials and the latest automotive innovations. Whether you&#39;re tuning up a classic beauty
            or keeping your daily ride in top condition, we&#39;re here to supply the parts that keep your engine and
            wheels purring. At Lopo Motorsport, we&#39;re not just about parts; We&#39;re talking about the passion, the
            people, and the drive that keeps the world going.
          </p>
        </div>
        <div className="text">{""}</div>
      </div>
    </div>
  );
};
