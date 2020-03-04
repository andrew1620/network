import React from "react";
import css from "./style.module.css";

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
          isOwner={props.profilePage.isOwner}
          uploadPhoto={props.uploadPhoto}
        />
        <ProfileFriends />
      </div>
      <div className={css.right}>
        <ProfileInfo
          profile={props.profilePage.profile}
          userStatus={props.userStatus}
          isOwner={props.profilePage.isOwner}
          updateUserStatusTC={props.updateUserStatusTC}
          updateProfileInfo={props.updateProfileInfo}
        />

        <ProfilePosts
          posts={props.profilePage.posts}
          profile={props.profilePage.profile}
        />
      </div>
    </div>
  );
};
export default Profile;
