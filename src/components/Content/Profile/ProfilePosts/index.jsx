import React from "react";
import AddPost from "./AddPost";
import Post from "./Post";

const ProfilePosts = () => {
  return (
    <div className="profilePosts">
      <AddPost />
      <Post />
    </div>
  );
};
export default ProfilePosts;
