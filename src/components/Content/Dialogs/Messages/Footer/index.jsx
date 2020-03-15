import React from "react";
import css from "./style.module.css";

import MessageForm from "./MessageForm";

const MessagesFooter = ({ addMessage, setFooterHeight }) => {
  const handleSubmit = values => {
    addMessage(values.message);
  };

  return (
    <div className={css.container}>
      <MessageForm onSubmit={handleSubmit} setFooterHeight={setFooterHeight} />
    </div>
  );
};

export default MessagesFooter;
