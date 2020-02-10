import React from "react";
import "./style.css";
import Preloader from "../../../common/Preloader";

const ProfileInfo = props => {
  if (!props.profile) return <Preloader />;

  return (
    <div className="profileInfoBox">
      <div className="headerInfo">
        <span className="name">{props.profile.fullName}</span>
        <span className="isOnline">online</span>
        <hr />
      </div>
      <span>День рождения</span>
      <span>Город</span>
      <span>Место учебы</span>
    </div>
  );
};

export default ProfileInfo;
