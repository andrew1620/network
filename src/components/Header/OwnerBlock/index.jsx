import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import css from "./style.module.css";
import Preloader from "../../common/Preloader";
import Avatar from "../../common/Avatar";
import SubMenu from "./SubMenu";

const OwnerBlock = ({ isAuth, logoutTC, ownerData }) => {
  const [isShownSubMenu, setIsShownSubMenu] = useState(false);

  if (!ownerData)
    return (
      <div className={css.ownerBlock}>
        <Preloader />
      </div>
    );

  let {
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
          <span style={{ marginRight: "10px" }}>{fullName} </span>
          <Avatar size={"small"} img={small} />{" "}
          <div className={css.arrow}></div>
          {isShownSubMenu && <SubMenu logoutTC={logoutTC} />}
        </>
      )}
      {!isAuth && <NavLink to="/login">Login</NavLink>}
    </div>
  );
};

export default OwnerBlock;
