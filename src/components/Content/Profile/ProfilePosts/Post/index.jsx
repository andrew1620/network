import React from "react";
import css from "./style.module.css";
import PostHeader from "./PostsHeader";
import PostMain from "./PostMain";
import PostFooter from "./PostFooter";

const Post = ({ posts = [], profile }) => {
  const postsList = posts.map(post => {
    return (
      <div className={css.postBox} key={post.id}>
        <PostHeader date={post.date} profile={profile} />
        <PostMain postBody={post.body} />
        <PostFooter likes={post.likes} />
      </div>
    );
  });

  return <div>{postsList}</div>;
};

export default Post;
