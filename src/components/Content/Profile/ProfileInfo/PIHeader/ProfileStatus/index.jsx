import React, { useState, useEffect } from "react";
import css from "./style.module.css";

const ProfileStatus = ({ userStatus, updateUserStatus, isOwner }) => {
  const [editMode, setEditMode] = useState(false);
  const [statusValue, setStatusValue] = useState(userStatus);

  useEffect(() => {
    setStatusValue(userStatus);
  }, [userStatus]);

  const handleStatusChange = event => {
    setStatusValue(event.target.value);
  };
  const activateEditMode = () => {
    isOwner && setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    updateUserStatus(statusValue);
  };

  return (
    <div className={css.container}>
      {!editMode && (
        <div
          onClick={activateEditMode}
          className={isOwner ? css.statusBox : css.withoutHover}
        >
          <span>{userStatus || (isOwner && "Изменить статус")}</span>
        </div>
      )}

      {isOwner && editMode && (
        <div className={css.inputBox}>
          <input
            autoFocus={true}
            onChange={handleStatusChange}
            value={statusValue}
            type="text"
            placeholder="Введите статус"
            className={css.input}
          />
          <br />
          <button onClick={deactivateEditMode} className={css.btnSave}>
            Сохранить
          </button>
        </div>
      )}
    </div>
  );
};
export default ProfileStatus;
