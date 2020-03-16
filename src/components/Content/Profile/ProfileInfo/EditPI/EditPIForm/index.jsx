import React from "react";
import { reduxForm, Field } from "redux-form";
import css from "./style.module.css";

//EditProfileInfoForm
let EditPIForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={css.editForm}>
      <div className={css.checkContainer}>
        <span className={css.caption}>Ищу работу:</span>
        <Field component={"input"} name="lookingForAJob" type="checkbox" />
      </div>
      <div className={css.textareaBox}>
        <span className={css.caption}>Описание:</span>
        <Field
          component={"textarea"}
          name="lookingForAJobDescription"
          type="text"
          className={css.textarea}
        />
      </div>
      <div className={css.btnSaveBox}>
        <button className={css.btnSave}>Сохранить</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "editPIForm" })(EditPIForm);
