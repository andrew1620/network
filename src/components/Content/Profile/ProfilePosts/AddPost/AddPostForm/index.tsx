import React from "react";
import { reduxForm, Field, InjectedFormProps } from "redux-form";
import css from "./style.module.css";

import { maxLength } from "../../../../../../utils/validators";
import { TextArea } from "./Textarea";
import Avatar from "../../../../../common/Avatar";

const maxLength500 = maxLength(500);

type FormData = {
  postBody: string;
};

type Props = {
  onSubmit: (formData: FormData) => void;
  focused: boolean;
  setFocused: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddPostForm: React.FC<InjectedFormProps<FormData, Props> & Props> = ({
  handleSubmit,
  focused,
  setFocused
}) => {
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
          onClick={() => setFocused(true)}
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

export default reduxForm<FormData, Props>({ form: "addPostForm" })(AddPostForm);
