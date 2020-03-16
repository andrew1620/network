// C - Creator

import React from "react";
import css from "./style.module.css";

export const TextArea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={css.container}>
      <div className={css.textareaBox}>
        <textarea
          className={css.textarea + " " + (hasError ? css.error : "")}
          {...input}
          {...props}
        ></textarea>
      </div>
      <div>
        {hasError && <span className={css.errorSpan}>{meta.error}</span>}
      </div>
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div>
      <div>
        <input
          className={css.login + " " + (hasError ? css.error : "")}
          {...input}
          {...props}
        ></input>
      </div>
      <div>
        {hasError && <span className={css.errorSpan}>{meta.error}</span>}
      </div>
    </div>
  );
};
