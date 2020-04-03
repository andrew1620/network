import React from "react";
import css from "./style.module.css";
import { NavLink } from "react-router-dom";

type Props = {
  iconClass: string;
  pageRef: string;
  navlinkInner: string;
};

const MenuItem: React.FC<Props> = ({ iconClass, pageRef, navlinkInner }) => {
  return (
    <div>
      <NavLink to={pageRef} className={`${css.navLink}`}>
        <span className={`${css[iconClass]} ${css.icon}`}></span>
        <span className={css.linkName}>{navlinkInner}</span>
      </NavLink>
    </div>
  );
};

export default MenuItem;
