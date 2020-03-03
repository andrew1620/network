import React from "react";
import css from "./style.module.css";

const PostFooter = ({ likes }) => {
  return (
    <div className={css.container}>
      <div className={css.like}>
        <span className={css.likesAmount}>{likes}</span>
      </div>
      <div className={css.comment}></div>
      <div className={css.share}></div>
    </div>
  );
};

export default PostFooter;
