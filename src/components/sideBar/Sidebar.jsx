import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-section">
      <div className="sidebar-subsection">
        <spna className="sidebar-title">about me</spna>
        <img
          className="sidebar-img"
          src="https://images.pexels.com/photos/4132651/pexels-photo-4132651.jpeg?auto=compress&cs=tinysrgb&w=940&h=650&dpr=4"
          alt="sidebar"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam eum
          laudantium dolore nulla deserunt voluptatibus temporibus repellendus
          placeat asperiores vitae repudiandae voluptas quos accusamus delectus
          aspernatur, sequi doloremque incidunt exercitationem!
        </p>
      </div>
      <div className="sidebar-subsection">
        <spna className="sidebar-title">categoriies</spna>
        <ul className="sidebar-categories">
          <li className="sidebar-category">Buy</li>
          <li className="sidebar-category">Sell</li>
          <li className="sidebar-category">Rent</li>
          <li className="sidebar-category">Residential</li>
          <li className="sidebar-category">B & B</li>
          <li className="sidebar-category">Hotel</li>
        </ul>
      </div>
      <div className="sidebar-subsection">
        <span className="sidebar-title">follow us</span>
        <div className="sidebar-social-icons">
          <i className="sidebar-social-icon fa-brands fa-instagram" />
          <i className="sidebar-social-icon fa-brands fa-facebook" />
          <i className="sidebar-social-icon fa-brands fa-linkedin" />
          <i className="sidebar-social-icon fa-brands fa-twitter" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
