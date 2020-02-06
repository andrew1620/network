import React from "react";
import "./style.css";

const Messages = () => {
  return (
    <div className="messagesBox">
      <div className="messagesHeader"></div>
      <div className="messagesContent">
        <div className="message">Привет</div>
        <div className="message">Как дела</div>
        <div className="message">Все ок</div>
      </div>
      <div className="messagesSendBox">
        <textarea></textarea>
        <button className="btnSend">Send</button>
      </div>
    </div>
  );
};
export default Messages;
