import React, { useEffect, RefObject } from "react";
import css from "./style.module.css";
import {
  reduxForm,
  Field,
  InjectedFormProps,
  WrappedFieldInputProps,
  WrappedFieldMetaProps
} from "redux-form";

type FormProps = {
  setFooterHeight: (height: number) => void;
  onSubmit: (formData: MessageFormValues) => void;
};
type MessageFormValues = {
  message: string | null;
};

let MessageForm: React.FC<InjectedFormProps<MessageFormValues, FormProps> &
  FormProps> = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={css.container}>
        <div className={css.textareaBox}>
          <Field
            component={Textarea}
            name="message"
            type="text"
            placeholder="Напишите сообщние..."
            setFooterHeight={props.setFooterHeight}
          />
        </div>
        <button className={css.btnSend}></button>
      </div>
    </form>
  );
};
export default reduxForm<MessageFormValues, FormProps>({ form: "messageForm" })(
  MessageForm
);

// -----TEXTAREA-----

type TextareaProps = {
  input: WrappedFieldInputProps;
  meta: WrappedFieldMetaProps;
  setFooterHeight: (height: number) => void;
};

const Textarea: React.FC<TextareaProps> = ({
  input,
  meta,
  setFooterHeight,
  ...props
}) => {
  const textArea: RefObject<HTMLTextAreaElement> = React.createRef();

  useEffect(() => {
    if (textArea.current) setFooterHeight(textArea.current.offsetHeight + 23);
  }, [textArea, setFooterHeight]);

  const changeHeight = () => {
    if (textArea.current) {
      textArea.current.style.height = "auto";
      textArea.current.style.height = textArea.current.scrollHeight + 2 + "px";
    }
  };
  const returnHeight = () => {
    if (textArea.current) textArea.current.style.height = "35px";
  };

  return (
    <div className={css.textareaContainer}>
      <textarea
        {...input}
        {...props}
        className={css.textarea}
        ref={textArea}
        onInput={changeHeight}
        onBlur={returnHeight}
      ></textarea>
    </div>
  );
};
