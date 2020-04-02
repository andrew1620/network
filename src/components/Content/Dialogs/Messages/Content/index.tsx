import React, { useState, useEffect, RefObject } from "react";
import css from "./style.module.css";

import MessageItem from "./MessageItem";
import { ConversationType } from "../../../../../redux/dialogsReducer";
import { OwnerDataType } from "../../../../../redux/ownerReducer";

type Props = {
  conversation: ConversationType;
  ownerData: OwnerDataType;
  footerHeight: number;
};

const MessagesContent: React.FC<Props> = ({
  conversation,
  ownerData,
  footerHeight
}) => {
  const content: RefObject<HTMLDivElement> = React.createRef();

  const [maxContentHeight, setMaxContentHeight] = useState("750px");

  useEffect(() => {
    if (content.current)
      content.current.scrollTo(0, content.current.scrollHeight);
    setMaxContentHeight(750 - footerHeight + "px");
  }, [conversation.messages.length, footerHeight, content]);

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
