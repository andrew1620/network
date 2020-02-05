import React from "react";
import "./style.css";

const AddPost = ({ textAreaValue, dispatch }) => {
  let textAreaRef = React.createRef();

  const handleBtnClick = () => {
    // addPost();
    dispatch({ type: "ADD_POST" });
  };
  const handleTextAreaChange = () => {
    // updateTextAreaValue(textAreaRef.current.value);
    const action = {
      type: "UPDATE-TEXTAREA-VALUE",
      payload: textAreaRef.current.value
    };
    dispatch(action);
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
