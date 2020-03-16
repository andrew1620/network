import React from "react";
import css from "./style.module.css";

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={css.fieldBox}>
      <div className={css.inputBox}>
        <input
          className={css.login + " " + (hasError ? css.error : "")}
          {...input}
          {...props}
        ></input>
      </div>
    </div>
  );
};
