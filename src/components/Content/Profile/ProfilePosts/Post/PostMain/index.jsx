import React from "react";
import css from "./style.module.css";

const PostMain = ({ postBody }) => {
  return (
    <div className={css.container}>
      <span className={css.body}>{postBody}</span>
    </div>
  );
};

export default PostMain;
