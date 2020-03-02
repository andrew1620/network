import React from "react";
import ProfileStatus from "./ProfileStatus/indexWithHooks";
import css from "./style.module.css";

const PIHeader = ({ fullName, userStatus, updateUserStatusTC }) => {
  return (
    <div className={css.headerBox}>
      <span className={css.name}>{fullName}</span>
      <span className={css.isOnline}>Online</span>
      <ProfileStatus
        userStatus={userStatus}
        updateUserStatusTC={updateUserStatusTC}
      />
    </div>
  );
};

export default PIHeader;
