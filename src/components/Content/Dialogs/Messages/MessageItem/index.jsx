import React from "react";
import css from "./style.module.css";

const MessageItem = ({ message }) => {
  return (
    <div className={css.itemBox}>
      <div className="messageItemPhoto">photo</div>
      <div>
        <div className={css.name}>{message.name}</div>
        <div className="messageItemBody">
          <div className="messageItemText">{message.text}</div>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
