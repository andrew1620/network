import React from "react";

const UploadPhoto = ({ uploadPhoto }) => {
  const handleFile = event => {
    uploadPhoto(event.target.files[0]);
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleFile}
        accept="image/png,image/jpg, image/jpeg"
      />
    </div>
  );
};
export default UploadPhoto;
