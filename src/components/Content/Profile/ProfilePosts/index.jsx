import React from "react";

import Post from "./Post";
import AddPostContainer from "./AddPostContainer/index";

const ProfilePosts = ({ posts, fullName }) => {
  return (
    <div className="profilePosts">
      <AddPostContainer />
      <Post posts={posts} fullName={fullName} />
    </div>
  );
};
export default ProfilePosts;
