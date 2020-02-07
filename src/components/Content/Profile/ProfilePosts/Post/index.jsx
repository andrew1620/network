import React from "react";
import "./style.css";
import { connect } from "react-redux";

const Post = ({ postsArr = [] }) => {
  const postsList = postsArr.map(post => {
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

const mapStateToProps = state => {
  return {
    postsArr: state.postsData.postsArr
  };
};

export default connect(mapStateToProps)(Post);
