import React from "react";
import "./style.css";

import ProfilePhoto from "./ProfilePhoto";
import ProfileInfo from "./ProfileInfo";
import ProfilePosts from "./ProfilePosts";
import ProfileFriends from "./ProfileFriends";

const Profile = props => {
  return (
    <div className="profile">
      <ProfilePhoto photos={props.profile.photos} />
      <ProfileInfo profile={props.profile} />
      <ProfileFriends />
      <ProfilePosts />
    </div>
  );
};
export default Profile;
