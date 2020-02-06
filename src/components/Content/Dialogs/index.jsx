import React from "react";
import "./style.css";
import { Route } from "react-router-dom";

import DialogItem from "./DialogItem";
import DialogsNav from "./DialogsNav";
import Messages from "./Messages";

const Dialogs = ({ dialogsPage, dispatch }) => {
  return (
    <div className="dialogsBox">
      <DialogItem dialogsData={dialogsPage.dialogsData} />
      <Route
        path="/dialogs/1"
        render={() => (
          <Messages
            messagesId={dialogsPage.messagesId}
            messagesTextareaValue={dialogsPage.messagesTextareaValue}
            dispatch={dispatch}
          />
        )}
      />
      <DialogsNav />
    </div>
  );
};

export default Dialogs;
