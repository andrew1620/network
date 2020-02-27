import React from "react";
import { NavLink } from "react-router-dom";
import css from "./style.module.css";
import Preloader from "../../common/Preloader";
import Avatar from "../../common/Avatar";

const OwnerBlock = ({ isAuth, login, logoutTC, ownerData }) => {
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
    <div className={css.ownerBlock}>
      {isAuth && (
        <>
          <span style={{ marginRight: "10px" }}>{fullName} </span>
          <Avatar size={"small"} img={small} />{" "}
          <div className={css.arrow}></div>
          {/* <button onClick={logoutTC}>Log Out</button> */}
        </>
      )}
      {!isAuth && <NavLink to="/login">Login</NavLink>}
    </div>
  );
};

export default OwnerBlock;
