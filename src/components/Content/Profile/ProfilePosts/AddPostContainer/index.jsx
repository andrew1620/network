import React from "react";
import "./style.css";

import {
  updateTextareaValueActionCreator,
  addPostActionCreator
} from "../../../../../redux/profileReducer";
import AddPost from "../AddPost/index";

import StoreContext from "../../../../../StoreContext";

const AddPostContainer = ({ textAreaValue, dispatch, store }) => {
  const handleBtnClick = () => {
    store.dispatch(addPostActionCreator());
  };
  const handleTextAreaChange = newValue => {
    store.dispatch(updateTextareaValueActionCreator(newValue));
  };
  return (
    <StoreContext.Consumer>
      {store => (
        <AddPost
          textAreaValue={store.getState().postsData.textAreaValue}
          handleBtnClick={handleBtnClick}
          handleTextAreaChange={handleTextAreaChange}
        />
      )}
    </StoreContext.Consumer>
  );
};

export default AddPostContainer;
