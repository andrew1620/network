import React from "react";
import "./style.css";
import css from "./style.module.css";
import { connect } from "react-redux";

const Post = ({ postsArr = [] }) => {
  const postsList = postsArr.map(post => {
    return (
      <div className={css.postBox} key={post.id}>
        <img src={post.img} alt="postPic" className={css.img} />
        <span>{post.name}</span>
        <div className={css.postBody}>{post.body}</div>
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
    postsArr: state.profilePage.postsArr
  };
};

export default connect(mapStateToProps)(Post);
