import React from "react";
import css from "./style.module.css";
import PostHeader from "./PostsHeader";
import PostMain from "./PostMain";
import PostFooter from "./PostFooter";

const Post = ({ posts = [], fullName }) => {
  const postsList = posts.map(post => {
    return (
      <div className={css.postBox} key={post.id}>
        <PostHeader fullName={fullName} date={post.date} />
        <PostMain postBody={post.body} />
        <PostFooter likes={post.likes} />
      </div>
    );
  });

  return <div>{postsList}</div>;
};

export default Post;
