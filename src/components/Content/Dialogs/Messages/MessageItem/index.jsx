import React from "react";
import "./style.css";

const MessageItem = ({ message }) => {
  return (
    <div className="messageItemBox">
      <div className="messageItemPhoto">photo</div>
      <div>
        <div className="messageItemName">{message.name}</div>
        <div className="messageItemBody">
          <div className="messageItemText">{message.text}</div>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
