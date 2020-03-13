import React from "react";
import css from "./style.module.css";

import MessagesHeader from "./Header";
import MessagesContent from "./Content";
import MessagesFooter from "./Footer";

const Messages = ({ conversation, addMessage, ownerData }) => {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <MessagesHeader interlocutor={conversation.interlocutor} />
      </div>
      <div className={css.content}>
        <MessagesContent conversation={conversation} ownerData={ownerData} />
      </div>
      <div className={css.footer}>
        <MessagesFooter addMessage={addMessage} />
      </div>
    </div>
  );
};

export default Messages;
