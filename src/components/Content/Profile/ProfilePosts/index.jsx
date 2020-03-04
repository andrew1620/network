import React from "react";

import Post from "./Post";
import AddPostContainer from "./AddPostContainer/index";

const ProfilePosts = ({ posts, profile }) => {
  return (
    <div className="profilePosts">
      <AddPostContainer />
      <Post posts={posts} profile={profile} />
    </div>
  );
};
export default ProfilePosts;
