import React from "react";
import AddPost from "./AddPost";
import Post from "./Post";
import AddPostContainer from "./AddPostContainer/index";

const ProfilePosts = ({ postsData, dispatch, store }) => {
  return (
    <div className="profilePosts">
      {/* <AddPost textAreaValue={postsData.textAreaValue} dispatch={dispatch} /> */}
      <AddPostContainer />
      <Post />
    </div>
  );
};
export default ProfilePosts;
