import React from "react";
import "./style.css";

import {
  addMessageActionCreator,
  updateMessagesTextareaValueActionCreator
} from "../../../../redux/dialogsReducer";

import MessageItem from "./MessageItem";
const textareaRef = React.createRef();

const Messages = ({ messagesId, messagesTextareaValue, dispatch }) => {
  const messagesList = messagesId.user_1.map(message => {
    return <MessageItem message={message} />;
  });

  const handleTextArea = () => {
    dispatch(
      updateMessagesTextareaValueActionCreator(textareaRef.current.value)
    );
  };

  const handleSendClick = () => {
    dispatch(addMessageActionCreator());
  };

  return (
    <div className="messagesBox">
      <div className="messagesHeader"></div>
      <div className="messagesContent">{messagesList}</div>
      <div className="messagesSendBox">
        <textarea
          ref={textareaRef}
          value={messagesTextareaValue}
          onChange={handleTextArea}
        ></textarea>
        <button
          onClick={handleSendClick}
          className="btnSend"
          style={{ alignSelf: "flex-end" }}
        >
          Send
        </button>
      </div>
    </div>
  );
};
export default Messages;
