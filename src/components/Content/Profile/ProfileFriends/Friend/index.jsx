import React from "react";
import css from "./style.module.css";

import Avatar from "../../../../common/Avatar";

const Friend = ({ friend }) => {
  return (
    <div className={css.container}>
      <div className={css.avaBox}>
        <Avatar size={"large"} img={friend.img} />
      </div>
      <div className={css.nameBox}>
        <span className={css.name}>{friend.name}</span>
      </div>
    </div>
  );
};

export default Friend;
