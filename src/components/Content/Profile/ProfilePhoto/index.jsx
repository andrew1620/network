import React from "react";
import "./style.css";
import userPhoto from "../../../../assets/img/userPhoto.png";
import Preloader from "../../../common/Preloader";
import UploadPhoto from "./UploadPhoto";

const ProfilePhoto = ({ photos, uploadPhoto }) => {
  if (!photos) return <Preloader />;
  return (
    <div className="profilePhotoBox">
      <div className="profilePhoto">
        <img
          src={photos.large === null ? userPhoto : photos.large}
          alt="profilePhoto"
        />
        <div className="uploadMenu">
          <UploadPhoto uploadPhoto={uploadPhoto} />
        </div>
      </div>
    </div>
  );
};
export default ProfilePhoto;
