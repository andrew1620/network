import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import css from "./style.module.css";

import Preloader from "../../common/Preloader";
import Avatar from "../../common/Avatar";
import SubMenu from "./SubMenu";
import { OwnerDataType } from "../../../redux/ownerReducer";

type Props = {
  isAuth: boolean | null;
  ownerData: OwnerDataType;
  logout: () => void;
};

const OwnerBlock: React.FC<Props> = ({ isAuth, logout, ownerData }) => {
  const [isShownSubMenu, setIsShownSubMenu] = useState(false);

  if (!ownerData)
    return (
      <div className={css.ownerBlock}>
        <Preloader />
      </div>
    );

  const { fullName } = ownerData;

  const toggleShowSubMenu = () => {
    setIsShownSubMenu(!isShownSubMenu);
  };

  return (
    <div className={css.ownerBlock} onClick={toggleShowSubMenu}>
      {isAuth && (
        <>
          <span className={css.fullname}>{fullName}</span>
          <Avatar size="small" img={"owner"} />
          <div className={css.arrow}></div>
          {isShownSubMenu && (
            <SubMenu logout={logout} toggleShowSubMenu={toggleShowSubMenu} />
          )}
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
