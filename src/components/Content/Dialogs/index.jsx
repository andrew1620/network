import React from "react";
import "./style.css";
import { Route } from "react-router-dom";

import DialogItem from "./DialogItem";
import DialogsNav from "./DialogsNav";
import Messages from "./Messages";

const Dialogs = () => {
  return (
    <div className="dialogsBox">
      <DialogItem />
      <Route path="/dialogs/1" render={() => <Messages />} />
      <DialogsNav />
    </div>
  );
};

export default Dialogs;
