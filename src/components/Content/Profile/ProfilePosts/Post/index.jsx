import React from "react";
import "./style.css";

const Post = ({ postsData = [] }) => {
  const postsList = postsData.map(post => {
    return (
      <div className="postBox">
        <img src={post.img} alt="postPic" />
        <span>{post.name}</span>
        <div className="post">{post.body}</div>
        <div>
          <span>
            <b>like</b>{" "}
          </span>
          <span>
            <b>repost</b>
          </span>
        </div>
      </div>
    );
  });

  return <div>{postsList}</div>;
};

export default Post;
