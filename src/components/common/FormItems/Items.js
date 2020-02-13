// C - Creator

import React from "react";
import css from "./style.module.css";

export const TextAreaC = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div>
      <div>
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
