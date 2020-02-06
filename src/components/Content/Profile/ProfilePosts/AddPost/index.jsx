import React from "react";
import "./style.css";

import {
  updateTextareaValueActionCreator,
  addPostActionCreator
} from "../../../../../redux/profileReducer";

const AddPost = ({ textAreaValue, dispatch }) => {
  let textAreaRef = React.createRef();

  const handleBtnClick = () => {
    dispatch(addPostActionCreator());
  };
  const handleTextAreaChange = () => {
    dispatch(updateTextareaValueActionCreator(textAreaRef.current.value));
  };
  return (
    <div className="addPostBox">
      <div>
        <textarea
          ref={textAreaRef}
          value={textAreaValue}
          onChange={handleTextAreaChange}
        ></textarea>
      </div>
      <div>
        <button className="addPostBtn" onClick={handleBtnClick}>
          Опубликовать
        </button>
      </div>
    </div>
  );
};

export default AddPost;
