import React from "react";
import css from "./style.module.css";

import Avatar from "../../../../common/Avatar";
import { NavLink } from "react-router-dom";

const MessagesHeader = ({ img, userId, name = "name" }) => {
  return (
    <div className={css.container}>
      <NavLink to="/dialogs" className={css.goBack}>
        <span className={css.backArrow}></span>{" "}
        <span className={css.goBackCaption}>Назад</span>
      </NavLink>

      <div className={css.info}>
        <NavLink to={`/profile/${userId}`} className={css.nameLink}>
          <span className={css.name}>{name}</span>
        </NavLink>
      </div>
      <div className={css.photoBox}>
        <Avatar size="36,36" img={img} />
      </div>
    </div>
  );
};

export default MessagesHeader;
