import React from "react";
import "./style.css";

const ProfilePhoto = () => {
  return (
    <div className="profilePhotoBox">
      <div className="profilePhoto">
        <div className="uploadProfilePhoto">Загрузить фотографию</div>
        <img
          // src="https://www.samogonashop.ru/upload/iblock/94f/94fb0858065d619ee8c8210915cc67ff.jpg"
          src="https://vk.com/images/camera_200.png?ava=1"
          alt="photo"
        />
      </div>
    </div>
  );
};
export default ProfilePhoto;
