import React from "react";
import "./style.css";
import { reduxForm, Field } from "redux-form";
import { required, maxLength } from "../../../../../utils/validators";
import { TextAreaC } from "../../../../common/FormItems/Items";

const maxLength10 = maxLength(10);

const AddPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={TextAreaC}
          name="postBody"
          type="text"
          placeholder="Что у вас нового"
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button className="addPostBtn">Опубликовать</button>
      </div>
    </form>
  );
};

const AddPostReduxForm = reduxForm({ form: "addPostForm" })(AddPostForm);

const AddPost = ({ addPost }) => {
  const handleSubmit = values => {
    addPost(values.postBody);
  };
  return (
    <div className="addPostBox">
      <AddPostReduxForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddPost;
