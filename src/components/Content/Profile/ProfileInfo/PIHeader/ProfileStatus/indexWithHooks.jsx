import React, { useState, useEffect } from "react";

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
    <div className="statusBox">
      {!editMode && (
        <div onClick={activateEditMode}>
          <span>{props.userStatus}</span>
        </div>
      )}

      {editMode && (
        <div>
          <input
            autoFocus={true}
            onChange={handleStatusChange}
            value={statusValue}
            type="text"
            placeholder="Введите статус"
          />
          <button onClick={deactivateEditMode}>Сохранить</button>
        </div>
      )}
    </div>
  );
};
export default ProfileStatus;
