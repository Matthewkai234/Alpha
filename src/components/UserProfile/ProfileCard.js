import React from 'react';
import './ProfileCard.css';
import userProfileImage from './img/user.png';  // Ensure this path is correct
import { FaGithub, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'; // Importing icons

const ProfileCard = () => {
  return (
    <div className="main-body">
      <div className="container d-flex justify-content-between">  {/* Flex container for layout */}
        <div> {/* Column for image and social links */}
          <div className="card text-center">
            <div className="card-body">
              <img src={userProfileImage} alt="John Doe" className="profile-image mb-3" />
              <h1>John Doe</h1>
              <p className="text-secondary mb-1">Full Stack Developer</p>
              <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
              <div className="social-links">
                <a href="https://github.com" aria-label="Github"><FaGithub /></a>
                <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
                <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
                <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
              </div>
            </div>
          </div>
        </div>
        <div> 
          <div className="personal-details">
            <h3>Full Name</h3>
            <p>Kenneth Valdez</p>
            <h3>Email</h3>
            <p>fip@jkmuh.al</p>
            <h3>Phone</h3>
            <p>(239) 816-9029</p>
            <h3>Mobile</h3>
            <p>(320) 380-4539</p>
            <h3>Address</h3>
            <p>Bay Area, San Francisco, CA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
