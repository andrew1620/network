import React from "react";
import AddPost from "./AddPost";
import Post from "./Post";

const ProfilePosts = ({ postsData, dispatch }) => {
  return (
    <div className="profilePosts">
      <AddPost textAreaValue={postsData.textAreaValue} dispatch={dispatch} />
      <Post postsArr={postsData.postsArr} />
    </div>
  );
};
export default ProfilePosts;
