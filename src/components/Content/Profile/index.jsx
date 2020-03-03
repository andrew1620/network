import React from "react";
import css from "./style.module.css";
// import "./style.css";

import ProfilePhoto from "./ProfilePhoto";
import ProfileInfo from "./ProfileInfo";
import ProfilePosts from "./ProfilePosts";
import ProfileFriends from "./ProfileFriends";

const Profile = props => {
  return (
    <div className={css.profile}>
      <div className={css.left}>
        <ProfilePhoto
          photos={props.profilePage.profile.photos}
          uploadPhoto={props.uploadPhoto}
        />
        <ProfileFriends />
      </div>
      <div className={css.right}>
        <ProfileInfo
          profile={props.profilePage.profile}
          userStatus={props.userStatus}
          updateUserStatusTC={props.updateUserStatusTC}
          updateProfileInfo={props.updateProfileInfo}
        />

        <ProfilePosts
          posts={props.profilePage.posts}
          fullName={props.owner.ownerData.fullName}
        />
      </div>
    </div>
  );
};
export default Profile;
