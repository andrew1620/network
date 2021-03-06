import React from "react";
import css from "./style.module.css";

import ProfilePhoto from "./ProfilePhoto";
import ProfileInfo from "./ProfileInfo";
import ProfilePosts from "./ProfilePosts";
import ProfileFriends from "./ProfileFriends";
import { Props as ProfileProps } from "./indexContainer";

const Profile: React.FC<ProfileProps> = props => {
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
          userStatus={props.profilePage.userStatus}
          isOwner={props.profilePage.isOwner}
          updateUserStatus={props.updateUserStatus}
        />

        <ProfilePosts
          posts={props.profilePage.posts}
          profile={props.profilePage.profile}
          addPost={props.addPost}
        />
      </div>
    </div>
  );
};
export default Profile;
