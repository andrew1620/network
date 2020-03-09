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
        updateUserStatus={props.updateUserStatus}
        isOwner={props.isOwner}
      />
      <PIMain profile={props.profile} />
      <PIFooter />
    </div>
  );
};

export default ProfileInfo;
