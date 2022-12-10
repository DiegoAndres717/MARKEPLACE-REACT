import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-section">
      <div className="hero-text">
        <span className="hero-text-title">MarketPlace</span>
        <span className="hero-text-subtitle">Property Listing</span>
      </div>
      <img
        className="hero-img"
        src="https://images.pexels.com/photos/941195/pexels-photo-941195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="imagen"
      />
    </div>
  );
};

export default Header;
