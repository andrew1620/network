import React from "react";
import ProfileStatus from "./ProfileStatus/indexWithHooks";
import css from "./style.module.css";

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
