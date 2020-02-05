import React from "react";
import "./style.css";

import ProfilePhoto from "./ProfilePhoto";
import ProfileInfo from "./ProfileInfo";
import ProfilePosts from "./ProfilePosts";
import ProfileFriends from "./ProfileFriends";

const Profile = ({ profilePage, dispatch }) => {
  return (
    <div className="profile">
      <ProfilePhoto />
      <ProfileInfo />
      <ProfileFriends />
      <ProfilePosts postsData={profilePage.postsData} dispatch={dispatch} />
    </div>
  );
};
export default Profile;
