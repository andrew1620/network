import React, { useState } from "react";
import css from "./style.module.css";
import { reduxForm, Field } from "redux-form";

const PIMain = ({ profile, updateProfileInfo }) => {
  const [toggleDetails, setToggleDetails] = useState(false);

  return (
    <div className={css.mainBox}>
      <div className={css.item}>
        <div className={css.left}>
          <div>День рождения</div>
          <div>Город</div>
          <div>Место учебы</div>
        </div>
        <div className={css.right}>
          <div>Санкт-Петербург</div>
          <div>3 декабря 1984 г.</div>
          <div>ГУАП</div>
        </div>
      </div>
      <div
        className={css.showDetails}
        onClick={() => setToggleDetails(!toggleDetails)}
      >
        <span>
          {toggleDetails
            ? "Скрыть подробную информацию"
            : "Показать подробную информацию"}
        </span>
      </div>

      {toggleDetails && (
        <MoreInfo profile={profile} updateProfileInfo={updateProfileInfo} />
      )}
    </div>
  );
};

export default PIMain;

const MoreInfo = ({ profile, updateProfileInfo }) => {
  const [editMode, setEditMode] = useState(false);

  const handleSubmit = formData => {
    const data = { ...formData, aboutMe: "Good", fullName: "andrew" };
    updateProfileInfo(data);
    setEditMode(false);
  };
  return (
    <div>
      {!editMode && (
        <div className={css.itemBox}>
          <div className={css.itemName}>
            <span>Личная информация</span>
            <span onClick={() => setEditMode(true)} className={css.btnEdit}>
              Редактировать
            </span>
          </div>
          <div className={css.itemMore}>
            <div className={css.left}>
              <div>lookingForAJob</div>
              <div>lookingForAJobDescription</div>
            </div>
            <div className={css.right}>
              <div>{profile.lookingForAJob ? "Да" : "Нет"}</div>
              <div>
                {profile.lookingForAJobDescription
                  ? profile.lookingForAJobDescription
                  : "Description"}
              </div>
            </div>
          </div>
        </div>
      )}
      {//initialValues работает потому что свойства объекта profile совпадают с атрибутами name в Fields, в итоге ставятся дефолтные значения из стора
      editMode && (
        <EditPIForm onSubmit={handleSubmit} initialValues={profile} />
      )}
    </div>
  );
};

//EditProfileInfoForm
let EditPIForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>lookingForAJob</label>
        <Field component={"input"} name="lookingForAJob" type="checkbox" />
      </div>
      <div>
        <label>lookingForAJobDescription</label>
        <Field
          component={"textarea"}
          name="lookingForAJobDescription"
          type="text"
        />
      </div>
      <button>Сохранить</button>
    </form>
  );
};
EditPIForm = reduxForm({ form: "editPIForm" })(EditPIForm);
