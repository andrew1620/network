import React from "react";
import "./style.css";

import ProfilePhoto from "./ProfilePhoto";
import ProfileInfo from "./ProfileInfo";
import ProfilePosts from "./ProfilePosts";
import ProfileFriends from "./ProfileFriends";

const Profile = () => {
  return (
    <div className="profile">
      <ProfilePhoto />
      <ProfileInfo />
      <ProfilePosts />
      <ProfileFriends />
    </div>
  );
};
export default Profile;
