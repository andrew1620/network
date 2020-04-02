import React from "react";

import Post from "./Post";
import AddPost from "./AddPost";
import { ProfileType, PostType } from "../../../../redux/profileReducer";

type Props = {
  posts: Array<PostType>;
  profile: ProfileType;
  addPost: (postBody: string) => void;
};

const ProfilePosts: React.FC<Props> = ({ posts, profile, addPost }) => {
  return (
    <div className="profilePosts">
      <AddPost addPost={addPost} />
      <Post posts={posts} profile={profile} />
    </div>
  );
};
export default ProfilePosts;
