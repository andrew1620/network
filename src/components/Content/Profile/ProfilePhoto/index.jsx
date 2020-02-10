import React from "react";
import "./style.css";
import userPhoto from "../../../../assets/img/userPhoto.png";
import Preloader from "../../../common/Preloader";

const ProfilePhoto = ({ photos }) => {
  if (!photos) return <Preloader />;
  return (
    <div className="profilePhotoBox">
      <div className="profilePhoto">
        <img
          src={photos.large === null ? userPhoto : photos.large}
          alt="profilePhoto"
        />
      </div>
    </div>
  );
};
export default ProfilePhoto;
