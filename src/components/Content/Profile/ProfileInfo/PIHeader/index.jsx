import React from "react";
import css from "./style.module.css";

import ProfileStatus from "./ProfileStatus";

const PIHeader = ({ fullName, userStatus, updateUserStatus, isOwner }) => {
  return (
    <div className={css.headerBox}>
      <span className={css.name}>{fullName}</span>
      <span className={css.isOnline}>Online</span>
      <ProfileStatus
        userStatus={userStatus}
        updateUserStatus={updateUserStatus}
        isOwner={isOwner}
      />
    </div>
  );
};

export default PIHeader;
