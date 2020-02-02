import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="nav">
      <div className="refContainer">
        <NavLink to="/profile">My profile</NavLink>
      </div>
      <div className="refContainer">
        <NavLink to="/dialogs">Messages</NavLink>
      </div>
      <div className="refContainer">
        <NavLink to="/news">News</NavLink>
      </div>
    </nav>
  );
};

export default Menu;
