import React, { useRef } from "react";
import css from "./style.module.css";

export const TextArea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;

  const textArea = useRef(null);

  const changeHeight = () => {
    textArea.current.style.height = "auto";
    textArea.current.style.height = textArea.current.scrollHeight + 2 + "px";
  };

  return (
    <div className={css.container}>
      <div className={css.textareaBox}>
        <textarea
          className={css.textarea + " " + (hasError ? css.error : "")}
          {...input}
          {...props}
          ref={textArea}
          onInput={changeHeight}
        ></textarea>
      </div>
      <div>
        {hasError && <span className={css.errorSpan}>{meta.error}</span>}
      </div>
    </div>
  );
};
