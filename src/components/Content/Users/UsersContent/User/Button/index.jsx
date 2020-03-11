import React from "react";
import css from "./style.module.css";

const Button = ({ isDisabled, handleClick, title }) => {
  return (
    <button disabled={isDisabled} onClick={handleClick} className={css.btn}>
      {title}
    </button>
  );
};

export default Button;
