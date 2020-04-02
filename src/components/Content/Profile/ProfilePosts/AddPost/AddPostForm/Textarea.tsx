import React, { useRef } from "react";
import css from "./style.module.css";
import { WrappedFieldInputProps, WrappedFieldMetaProps } from "redux-form";

type Props = {
  input: WrappedFieldInputProps;
  meta: WrappedFieldMetaProps;
};

export const TextArea: React.FC<Props> = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;

  const textArea = useRef<HTMLTextAreaElement>(null);

  const changeHeight = () => {
    if (textArea.current !== null) {
      textArea.current.style.height = "auto";
      textArea.current.style.height = textArea.current.scrollHeight + 2 + "px";
    }
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
