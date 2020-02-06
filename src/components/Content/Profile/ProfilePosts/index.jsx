import React from "react";
import AddPost from "./AddPost";
import Post from "./Post";
import AddPostContainer from "./AddPostContainer/index";

const ProfilePosts = ({ postsData, dispatch, store }) => {
  return (
    <div className="profilePosts">
      {/* <AddPost textAreaValue={postsData.textAreaValue} dispatch={dispatch} /> */}
      <AddPostContainer store={store} />
      <Post postsArr={postsData.postsArr} />
    </div>
  );
};
export default ProfilePosts;
