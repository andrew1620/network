import React from "react";
import "./style.css";
import { connect } from "react-redux";

import {
  addMessageActionCreator,
  updateMessagesTextareaValueActionCreator
} from "../../../../redux/dialogsReducer";

import MessageItem from "./MessageItem";

const Messages = ({
  messagesId,
  messagesTextareaValue,
  handleTextArea,
  handleSendClick
}) => {
  const textareaRef = React.createRef();

  const messagesList = messagesId.user_1.map(message => {
    return <MessageItem message={message} />;
  });

  const handleTextAreaChange = () => {
    handleTextArea(textareaRef.current.value);
  };

  const handleBtnSendClick = () => {
    handleSendClick();
  };

  return (
    <div className="messagesBox">
      <div className="messagesHeader"></div>
      <div className="messagesContent">{messagesList}</div>
      <div className="messagesSendBox">
        <textarea
          ref={textareaRef}
          value={messagesTextareaValue}
          onChange={handleTextAreaChange}
        ></textarea>
        <button
          onClick={handleBtnSendClick}
          className="btnSend"
          style={{ alignSelf: "flex-end" }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    messagesId: state.dialogsPage.messagesId,
    messagesTextareaValue: state.dialogsPage.messagesTextareaValue
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleTextArea: newValue => {
      dispatch(updateMessagesTextareaValueActionCreator(newValue));
    },
    handleSendClick: () => {
      dispatch(addMessageActionCreator());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
