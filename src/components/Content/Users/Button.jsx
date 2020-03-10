import React from "react";

const Button = ({ isDisabled, handleClick, title }) => {
  return (
    <button disabled={isDisabled} onClick={handleClick}>
      {title}
    </button>
  );
};

export default Button;
