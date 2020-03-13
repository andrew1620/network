import React from "react";
import css from "./style.module.css";

import MessageItem from "./MessageItem";

const MessagesContent = ({ conversation, ownerData }) => {
  const {
    id,
    fullName: name,
    photos: { small: avatar }
  } = ownerData;

  const owner = { id, name, avatar };
  const { interlocutor } = conversation;

  const messagesList = conversation.messages.map(message => {
    return (
      <MessageItem
        key={message.id}
        message={message}
        userData={message.whose === interlocutor.id ? interlocutor : owner}
      />
    );
  });

  return <div className={css.container}>{messagesList}</div>;
};

export default MessagesContent;
