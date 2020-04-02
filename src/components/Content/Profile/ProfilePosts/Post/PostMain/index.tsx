import React from "react";
import css from "./style.module.css";

type Props = {
  postBody: string;
};

const PostMain: React.FC<Props> = ({ postBody }) => {
  return (
    <div className={css.container}>
      <span className={css.body}>{postBody}</span>
    </div>
  );
};

export default PostMain;
