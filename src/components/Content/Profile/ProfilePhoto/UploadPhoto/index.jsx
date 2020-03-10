import React from "react";
import css from "./style.module.css";

const UploadPhoto = ({ uploadPhoto }) => {
  const handleFile = event => {
    uploadPhoto(event.target.files[0]);
  };

  return (
    <div className={css.inputBox}>
      <label htmlFor="uploadPhoto">
        <div className={css.btnUpload}>
          <span className={css.arrow}></span>
          <span className={css.title}>Загрузить фото</span>
        </div>
      </label>
      <input
        id="uploadPhoto"
        type="file"
        onChange={handleFile}
        accept="image/png,image/jpg, image/jpeg"
      />
    </div>
  );
};
export default UploadPhoto;
