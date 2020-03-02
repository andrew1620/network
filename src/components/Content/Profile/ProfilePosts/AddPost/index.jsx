import React from "react";
import css from "./style.module.css";
import { reduxForm, Field } from "redux-form";
import { maxLength } from "../../../../../utils/validators";
import { TextAreaC } from "../../../../common/FormItems/Items";
import Avatar from "../../../../common/Avatar";
import { useState } from "react";

const maxLength500 = maxLength(500);

const AddPostForm = ({ handleSubmit, focused, setFocused }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={css.addPostBox}>
        <span className={css.addPostPhoto}>
          <Avatar size="small" />
        </span>
        <Field
          component={TextAreaC}
          name="postBody"
          type="text"
          placeholder="Что у вас нового"
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

const AddPostReduxForm = reduxForm({ form: "addPostForm" })(AddPostForm);

const AddPost = ({ addPost }) => {
  const [focused, setFocused] = useState(false);

  const handleSubmit = values => {
    addPost(values.postBody);
    setFocused(false);
  };
  return (
    <div className={css.container}>
      <AddPostReduxForm
        onSubmit={handleSubmit}
        focused={focused}
        setFocused={setFocused}
      />
    </div>
  );
};

export default AddPost;
// textarea doesn't return it's prev height because I can't access
//  textarea's ref. It's because AddPost contains sub-component that contains
//  sub-component etc. As a result we've got a structure like: AddPost-->
//  -->AddPostReduxForm-->Field-->ComponentWithTextarea
// I can't use forwardRef because I send ref to Field and Idon't know the way to
//  resend it to ComponentWithTextarea from Field
