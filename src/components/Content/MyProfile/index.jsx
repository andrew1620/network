import React from "react";

import ProfilePhoto from "./ProfilePhoto";
import ProfileInfo from "./ProfileInfo";
import ProfilePosts from "./ProfilePosts";

const MyProfile = () => {
  return (
    <div className="myProfile">
      <ProfilePhoto />
      <ProfileInfo />
      <ProfilePosts />
    </div>
  );
};
export default MyProfile;
