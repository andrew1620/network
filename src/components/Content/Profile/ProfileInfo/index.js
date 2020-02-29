import React from "react";
import css from "./style.module.css";
import Preloader from "../../../common/Preloader";
import PIHeader from "./PIHeader";
import PIMain from "./PIMain";
import PIFooter from "./PIFooter";

const ProfileInfo = props => {
  if (!props.profile) return <Preloader />;

  return (
    <div className={css.profileInfo}>
      <PIHeader
        fullName={props.profile.fullName}
        userStatus={props.userStatus}
        updateUserStatusTC={props.updateUserStatusTC}
      />
      <PIMain
        profile={props.profile}
        updateProfileInfo={props.updateProfileInfo}
      />
      <PIFooter />
    </div>
  );
};

export default ProfileInfo;
