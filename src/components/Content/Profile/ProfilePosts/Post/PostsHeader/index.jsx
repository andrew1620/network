import React from "react";
import css from "./style.module.css";

import Avatar from "../../../../../common/Avatar";

const PostHeader = ({ fullName = "User", date }) => {
  return (
    <div className={css.postHeader}>
      <div className={css.avaBox}>
        <Avatar size={"large"} />
      </div>
      <div className={css.postInfo}>
        <div className={css.name}>{fullName}</div>
        <div className={css.date}>{date}</div>
      </div>
      <div className={css.postActions}></div>
    </div>
  );
};

export default PostHeader;
