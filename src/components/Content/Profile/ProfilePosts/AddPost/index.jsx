import React from "react";
import "./style.css";

const AddPost = () => {
  return (
    <div className="addPostBox">
      <div>
        <textarea id="addPost"></textarea>
      </div>
      <div>
        <button className="addPostBtn">Опубликовать</button>
      </div>
    </div>
  );
};

export default AddPost;
