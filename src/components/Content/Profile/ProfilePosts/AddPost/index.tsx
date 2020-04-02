import React, { useState } from "react";
import css from "./style.module.css";

import AddPostForm from "./AddPostForm";

type Props = {
  addPost: (postBody: string) => void;
};

const AddPost: React.FC<Props> = ({ addPost }) => {
  const [focused, setFocused] = useState(false);

  const handleSubmit = (formData: FormData) => {
    addPost(formData.postBody);
    setFocused(false);
  };
  return (
    <div className={css.container}>
      <AddPostForm
        onSubmit={handleSubmit}
        focused={focused}
        setFocused={setFocused}
      />
    </div>
  );
};

export default AddPost;

type FormData = {
  postBody: string;
};

// textarea doesn't return it's prev height because I can't access
//  textarea's ref. It's because AddPost contains sub-component that contains
//  sub-component etc. As a result we've got a structure like: AddPost-->
//  -->AddPostReduxForm-->Field-->ComponentWithTextarea
// I can't use forwardRef because I send ref to Field and I don't know the way to
//  resend it to ComponentWithTextarea from Field
