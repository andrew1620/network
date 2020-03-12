import React from "react";
import css from "./style.module.css";

import { reduxForm, Field } from "redux-form";
import MessageItem from "./MessageItem";
import MessagesHeader from "./Header";

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

const Messages = ({ conversation, addMessage }) => {
  const messagesList = conversation.messages.map(message => {
    return <MessageItem message={message} key={message.id} />;
  });

  const handleSubmit = values => {
    addMessage(values.message);
  };

  return (
    <div className={css.container}>
      <div className={css.header}>
        <MessagesHeader />
      </div>
      <div className={css.content}>{messagesList}</div>
      <div className={css.footer}>
        <MessageForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Messages;
