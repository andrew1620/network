import React from "react";
import "./style.css";

import DialogItem from "./DialogItem";
import DialogsNav from "./DialogsNav";
import Messages from "./Messages";

const Dialogs = ({ dialogsData }) => {
  return (
    <div className="dialogsBox">
      <DialogItem dialogsData={dialogsData} />
      <Messages />
      <DialogsNav />
    </div>
  );
};

export default Dialogs;
