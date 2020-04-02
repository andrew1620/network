import React, { useState, useEffect, ChangeEvent } from "react";
import css from "./style.module.css";

type Props = {
  userStatus: string;
  isOwner: boolean | null;
  updateUserStatus: (newStatus: string) => void;
};

const ProfileStatus: React.FC<Props> = ({
  userStatus,
  updateUserStatus,
  isOwner
}) => {
  const [editMode, setEditMode] = useState(false);
  const [statusValue, setStatusValue] = useState(userStatus);

  useEffect(() => {
    setStatusValue(userStatus);
  }, [userStatus]);

  const handleStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
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
