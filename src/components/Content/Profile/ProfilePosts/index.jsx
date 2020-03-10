import React from "react";

import Post from "./Post";
import AddPost from "./AddPost";

const ProfilePosts = ({ posts, profile, addPost }) => {
  return (
    <div className="profilePosts">
      <AddPost addPost={addPost} />
      <Post posts={posts} profile={profile} />
    </div>
  );
};
export default ProfilePosts;
