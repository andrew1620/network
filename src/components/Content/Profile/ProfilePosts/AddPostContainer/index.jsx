import React from "react";
import "./style.css";

import {
  updateTextareaValueActionCreator,
  addPostActionCreator
} from "../../../../../redux/profileReducer";
import AddPost from "../AddPost/index";

const AddPostContainer = ({ textAreaValue, dispatch, store }) => {
  const handleBtnClick = () => {
    store.dispatch(addPostActionCreator());
  };
  const handleTextAreaChange = newValue => {
    store.dispatch(updateTextareaValueActionCreator(newValue));
  };
  return (
    <AddPost
      textAreaValue={store.getState().postsData.textAreaValue}
      handleBtnClick={handleBtnClick}
      handleTextAreaChange={handleTextAreaChange}
    />
  );
};

export default AddPostContainer;
