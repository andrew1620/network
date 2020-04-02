import React from "react";
import css from "./style.module.css";

import MessageForm from "./MessageForm";

type Props = {
  addMessage: (messageBody: string) => void;
  setFooterHeight: (height: number) => void;
};

type MessageFormValues = {
  message: string | null;
};

const MessagesFooter: React.FC<Props> = ({ addMessage, setFooterHeight }) => {
  const handleSubmit = (formData: MessageFormValues) => {
    if (formData.message !== null) addMessage(formData.message);
  };

  return (
    <div className={css.container}>
      <MessageForm onSubmit={handleSubmit} setFooterHeight={setFooterHeight} />
    </div>
  );
};

export default MessagesFooter;
