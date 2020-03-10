import React from "react";
import css from "./style.module.css";

import Avatar from "../../../../../common/Avatar";

const PostHeader = ({ date, profile }) => {
  return (
    <div className={css.postHeader}>
      <div className={css.avaBox}>
        <Avatar size={"large"} img="profile" />
      </div>
      <div className={css.postInfo}>
        <div className={css.name}>{profile.fullName}</div>
        <div className={css.date}>{date}</div>
      </div>
      <div className={css.postActions}></div>
    </div>
  );
};

export default PostHeader;
