import React from "react";
import css from "./style.module.css";

import userPhoto from "../../../../assets/img/userPhoto.png";
import Preloader from "../../../common/Preloader";
import UploadPhoto from "./UploadPhoto";

const ProfilePhoto = ({ photos, uploadPhoto, isOwner }) => {
  if (!photos) return <Preloader />;
  return (
    <div className={css.profilePhoto}>
      <div className={css.photo}>
        <img
          className={css.img}
          src={photos.large === null ? userPhoto : photos.large}
          alt="profilePhoto"
        />
        {isOwner && (
          <div className={css.uploadMenu}>
            <UploadPhoto uploadPhoto={uploadPhoto} />
          </div>
        )}
      </div>
    </div>
  );
};
export default ProfilePhoto;
