import React from "react";
import css from "./style.module.css";

import Avatar from "../../../../../common/Avatar";

type Props = {
  date: string;
  fullName: string | null;
};

const PostHeader: React.FC<Props> = ({ date, fullName }) => {
  return (
    <div className={css.postHeader}>
      <div className={css.avaBox}>
        <Avatar size={"large"} img="profile" />
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
