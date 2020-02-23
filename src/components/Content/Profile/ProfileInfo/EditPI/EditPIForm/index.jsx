import React from "react";
import { reduxForm, Field } from "redux-form";

//EditProfileInfoForm
let EditPIForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Ищу работу</label>
        <Field component={"input"} name="lookingForAJob" type="checkbox" />
      </div>
      <div>
        <label>Описание</label>
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

export default EditPIForm;
