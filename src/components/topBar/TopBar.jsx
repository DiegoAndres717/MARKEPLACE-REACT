import React from "react";
import { NavLink } from "react-router-dom";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <div>
          <i className="topbar-social-icon fa-brands fa-instagram" />
          <i className="topbar-social-icon fa-brands fa-facebook" />
          <i className="topbar-social-icon fa-brands fa-linkedin" />
          <i className="topbar-social-icon fa-brands fa-twitter" />
        </div>
      </div>
      <div className="topbar-center">
        <ul className="topbar-list">
          <li className="topbar-list-item">
            <NavLink className="topbar-list-item" to={"/"}>
              HOME
            </NavLink>
          </li>
          <li className="topbar-list-item">ABOUT</li>
          <li className="topbar-list-item">CONTACT</li>
          <li className="topbar-list-item">
            <NavLink className="topbar-list-item" to={"/create"}>
              CREATE PROPERTY
            </NavLink>
          </li>
          <li className="topbar-list-item">LOGOUT</li>
        </ul>
      </div>
      <div className="topbar-right">
        <img
          className="topbar-profile-pic"
          src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="perfil"
        />
        <i className="topbar-search fas fa-search"></i>
      </div>
    </div>
  );
};

export default TopBar;
