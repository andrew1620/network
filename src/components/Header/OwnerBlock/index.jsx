import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import css from "./style.module.css";

import Preloader from "../../common/Preloader";
import Avatar from "../../common/Avatar";
import SubMenu from "./SubMenu";

const OwnerBlock = ({ isAuth, logout, ownerData }) => {
  const [isShownSubMenu, setIsShownSubMenu] = useState(false);

  if (!ownerData)
    return (
      <div className={css.ownerBlock}>
        <Preloader />
      </div>
    );

  const {
    photos: { small = null },
    fullName
  } = ownerData;

  return (
    <div
      className={css.ownerBlock}
      onClick={() => setIsShownSubMenu(!isShownSubMenu)}
    >
      {isAuth && (
        <>
          <span className={css.fullname}>{fullName}</span>
          <Avatar size={"small"} img={small} />
          <div className={css.arrow}></div>
          {isShownSubMenu && <SubMenu logout={logout} />}
        </>
      )}
      {!isAuth && (
        <NavLink to="/login" className={css.toLogin}>
          Login
        </NavLink>
      )}
    </div>
  );
};

export default OwnerBlock;
