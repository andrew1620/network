import React, { useState, useEffect } from "react";
import css from "./style.module.css";

const ProfileStatus = props => {
  const [editMode, setEditMode] = useState(false);
  const [statusValue, setStatusValue] = useState(props.userStatus);

  useEffect(() => {
    setStatusValue(props.userStatus);
  }, [props.userStatus]);

  const handleStatusChange = event => {
    setStatusValue(event.target.value);
  };
  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatusTC(statusValue);
  };

  return (
    <div className={css.container}>
      {!editMode && (
        <div onClick={activateEditMode} className={css.statusBox}>
          <span>{props.userStatus}</span>
        </div>
      )}

      {editMode && (
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
