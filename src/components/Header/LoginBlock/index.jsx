import React from "react";
import { NavLink } from "react-router-dom";
import css from "./style.module.css";
import Preloader from "../../common/Preloader";

const LoginBlock = ({ isAuth, login, logoutTC, ownerData }) => {
  if (!ownerData) return <Preloader />;
  //Надо попробоватьс деструктуризацией, почему то раньше рендерит чем делает строчку ниже
  // const { fullName, photos = { small: null } } = ownerData;
  return (
    <div className={css.loginBlock}>
      {isAuth && (
        <>
          {/* {ownerData.fullName}
          {ownerData.photos ? ownerData.photos.small : "qqqqw"} */}
          {login} <button onClick={logoutTC}>Log Out</button>
        </>
      )}
      {!isAuth && <NavLink to="/login">Login</NavLink>}
    </div>
  );
};

export default LoginBlock;
