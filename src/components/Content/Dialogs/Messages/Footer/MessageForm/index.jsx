import React, { useEffect } from "react";
import css from "./style.module.css";
import { reduxForm, Field } from "redux-form";

let MessageForm = props => {
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
export default reduxForm({ form: "messageForm" })(MessageForm);

const Textarea = ({ input, meta, setFooterHeight, ...props }) => {
  const textArea = React.createRef();

  useEffect(() => {
    setFooterHeight(textArea.current.offsetHeight + 23);
  }, [textArea]);

  const changeHeight = () => {
    textArea.current.style.height = "auto";
    textArea.current.style.height = textArea.current.scrollHeight + 2 + "px";
  };
  const returnHeight = () => {
    textArea.current.style.height = "35px";
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
