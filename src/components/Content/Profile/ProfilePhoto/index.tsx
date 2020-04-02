import React from "react";
import css from "./style.module.css";

import userPhoto from "../../../../assets/img/userPhoto.png";
import Preloader from "../../../common/Preloader";
import UploadPhoto from "./UploadPhoto";
import { PhotosType } from "../../../../redux/commonTypes";

type Props = {
  photos: PhotosType;
  uploadPhoto: (photo: any) => void;
  isOwner: boolean | null;
};

const ProfilePhoto: React.FC<Props> = ({ photos, uploadPhoto, isOwner }) => {
  if (!photos) return <Preloader />;
  return (
    <div className={css.profilePhoto}>
      <div className={css.photo}>
        <img
          className={css.img}
          src={photos.large ? photos.large : userPhoto}
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
