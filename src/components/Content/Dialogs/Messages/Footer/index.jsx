import React from "react";
import css from "./style.module.css";
import { reduxForm, Field } from "redux-form";

let MessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component="textarea"
        name="message"
        type="text"
        placeholder="Введите сообщние"
      />
      <button>Send</button>
    </form>
  );
};
MessageForm = reduxForm({ form: "messageForm" })(MessageForm);

const MessagesFooter = ({ addMessage }) => {
  const handleSubmit = values => {
    addMessage(values.message);
    console.log(values.message);
  };

  return (
    <div className={css.container}>
      <MessageForm onSubmit={handleSubmit} />
    </div>
  );
};

export default MessagesFooter;
