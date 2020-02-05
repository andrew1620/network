import React from "react";
import AddPost from "./AddPost";
import Post from "./Post";

const ProfilePosts = ({ postsData }) => {
  return (
    <div className="profilePosts">
      <AddPost />
      <Post postsData={postsData} />
    </div>
  );
};
export default ProfilePosts;
