import React from "react";
import { reduxForm, Field } from "redux-form";
import css from "./style.module.css";

import { maxLength } from "../../../../../../utils/validators";
import { TextArea } from "./Textarea";
import Avatar from "../../../../../common/Avatar";

const maxLength500 = maxLength(500);

const AddPostForm = ({ handleSubmit, focused, setFocused }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={css.addPostBox}>
        <span className={css.addPostPhoto}>
          <Avatar size="small" img="owner" />
        </span>
        <Field
          component={TextArea}
          name="postBody"
          type="text"
          placeholder="Что у вас нового?"
          validate={[maxLength500]}
          onClick={e => setFocused(true)}
        />
      </div>
      {focused && (
        <>
          <hr className={css.hr} />
          <div className={css.btnPublishBox}>
            <button className={css.addPostBtn}>Опубликовать</button>
          </div>
        </>
      )}
    </form>
  );
};

export default reduxForm({ form: "addPostForm" })(AddPostForm);
