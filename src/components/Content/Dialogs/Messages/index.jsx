import React from "react";
import "./style.css";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { addMessage } from "../../../../redux/dialogsReducer";
import MessageItem from "./MessageItem";
import { getMessagesId } from "../../../../redux/dialogsSelectors";

let MessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={"textarea"}
        name="message"
        type="text"
        placeholder="Введите сообщние"
      />
      <button>Send</button>
    </form>
  );
};
MessageForm = reduxForm({ form: "messageForm" })(MessageForm);

const Messages = ({ messagesId, addMessage }) => {
  const messagesList = messagesId.user_1.map(message => {
    return <MessageItem message={message} key={message.id} />;
  });

  const handleSubmit = values => {
    addMessage(values.message);
  };

  return (
    <div className="messagesBox">
      <div className="messagesHeader"></div>
      <div className="messagesContent">{messagesList}</div>
      <div className="messagesSendBox">
        <MessageForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    messagesId: getMessagesId(state)
  };
};

export default connect(mapStateToProps, { addMessage })(Messages);
