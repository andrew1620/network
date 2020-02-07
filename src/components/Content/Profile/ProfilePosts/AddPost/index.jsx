import React from "react";
import "./style.css";

const AddPost = ({
  textAreaValue,
  dispatch,
  handleBtnClick,
  handleTextAreaChange
}) => {
  let textAreaRef = React.createRef();

  // const handleBtnClick = () => {
  //   dispatch(addPostActionCreator());
  // };
  // const handleTextAreaChange = () => {
  //   dispatch(updateTextareaValueActionCreator(textAreaRef.current.value));
  // };
  const btnClick = () => {
    handleBtnClick();
  };
  const textAreaChange = () => {
    handleTextAreaChange(textAreaRef.current.value);
  };
  return (
    <div className="addPostBox">
      <div>
        <textarea
          ref={textAreaRef}
          value={textAreaValue}
          onChange={textAreaChange}
        ></textarea>
      </div>
      <div>
        <button className="addPostBtn" onClick={btnClick}>
          Опубликовать
        </button>
      </div>
    </div>
  );
};

export default AddPost;
