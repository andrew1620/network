import React from "react";
import css from "./style.module.css";
import { NavLink } from "react-router-dom";

const MenuItem = ({ iconClass, pageRef, navlinkInner }) => {
  return (
    <div className={css.refContainer}>
      <div className={css[iconClass]}></div>
      <NavLink to={pageRef} className={css.navLink}>
        {navlinkInner}
      </NavLink>
    </div>
  );
};

export default MenuItem;
