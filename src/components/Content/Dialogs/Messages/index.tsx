import React, { useState } from "react";
import css from "./style.module.css";

import MessagesHeader from "./Header";
import MessagesContent from "./Content";
import MessagesFooter from "./Footer";
import { ConversationType } from "../../../../redux/dialogsReducer";
import { OwnerDataType } from "../../../../redux/ownerReducer";

type Props = {
  conversation: ConversationType;
  ownerData: OwnerDataType;
  addMessage: (messageBody: string) => void;
};

const Messages: React.FC<Props> = ({ conversation, addMessage, ownerData }) => {
  const [footerHeight, setFooterHeight] = useState(0);

  return (
    <div className={css.container}>
      <div className={css.header}>
        <MessagesHeader interlocutor={conversation.interlocutor} />
      </div>
      <div className={css.content}>
        <MessagesContent
          conversation={conversation}
          ownerData={ownerData}
          footerHeight={footerHeight}
        />
      </div>
      <div className={css.footer}>
        <MessagesFooter
          addMessage={addMessage}
          setFooterHeight={setFooterHeight}
        />
      </div>
    </div>
  );
};

export default Messages;
