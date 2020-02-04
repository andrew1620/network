import React from "react";
import "./style.css";

const ProfileInfo = () => {
  return (
    <div className="profileInfoBox">
      <div className="headerInfo">
        <span className="name">Vasya Pupkin</span>
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
