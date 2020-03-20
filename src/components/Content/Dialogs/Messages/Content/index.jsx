import React, { useState, useEffect } from "react";
import css from "./style.module.css";

import MessageItem from "./MessageItem";

const MessagesContent = ({ conversation, ownerData, footerHeight }) => {
  const content = React.createRef();

  const [maxContentHeight, setMaxContentHeight] = useState("700px");

  useEffect(() => {
    content.current.scrollTo(0, content.current.scrollHeight);
    setMaxContentHeight(700 - footerHeight + "px");
  }, [conversation.messages.length, footerHeight, content]);
  //I don't know why esLint underlines the second useEffect argument. I don't want useEffect to work when content changes. It's necessary for me it to work if length of messages array changes.

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
    <div
      ref={content}
      className={css.container}
      style={{
        marginBottom: `${footerHeight}px`,
        maxHeight: maxContentHeight
      }}
    >
      {messagesList}
    </div>
  );
};

export default MessagesContent;
