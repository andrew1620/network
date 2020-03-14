import React from "react";
import css from "./style.module.css";
import { reduxForm, Field } from "redux-form";

let MessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={css.container}>
        <div className={css.textareaBox}>
          <Field
            component={textarea}
            name="message"
            type="text"
            placeholder="Напишите сообщние..."
          />
        </div>
        <button className={css.btnSend}></button>
      </div>
    </form>
  );
};
export default reduxForm({ form: "messageForm" })(MessageForm);

const textarea = ({ input, meta, ...props }) => {
  const textArea = React.createRef();

  // const changeHeight = () => {
  //   textArea.current.style.height = "auto";
  //   textArea.current.style.height = textArea.current.scrollHeight + 2 + "px";
  // };

  return (
    <div className={css.textareaContainer}>
      <textarea
        {...input}
        {...props}
        className={css.textarea}
        ref={textArea}
        // onInput={changeHeight}
      ></textarea>
    </div>
  );
};
