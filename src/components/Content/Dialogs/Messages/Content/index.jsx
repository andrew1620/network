import React from "react";
import css from "./style.module.css";

import MessageItem from "./MessageItem";
import { useEffect } from "react";

const MessagesContent = ({ conversation, ownerData }) => {
  const content = React.createRef();
  useEffect(() => {
    content.current.scrollTo(0, content.current.scrollHeight);
    console.log("rerender");
  }, [conversation.messages, content]);

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

  return (
    <div ref={content} className={css.container}>
      {messagesList}
    </div>
  );
};

export default MessagesContent;
