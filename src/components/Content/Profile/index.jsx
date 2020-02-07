import React from "react";
import "./style.css";

import ProfilePhoto from "./ProfilePhoto";
import ProfileInfo from "./ProfileInfo";
import ProfilePosts from "./ProfilePosts";
import ProfileFriends from "./ProfileFriends";

const Profile = ({ state, dispatch, store }) => {
  return (
    <div className="profile">
      <ProfilePhoto />
      <ProfileInfo />
      <ProfileFriends />
      <ProfilePosts />
    </div>
  );
};
export default Profile;
