import React from "react";
import "./style.css";

import DialogItem from "./DialogItem";
import DialogsNav from "./DialogsNav";

const Dialogs = () => {
  return (
    <div className="dialogsBox">
      <DialogItem />
      <DialogsNav />
    </div>
  );
};

export default Dialogs;
