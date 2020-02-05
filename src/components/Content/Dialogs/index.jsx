import React from "react";
import "./style.css";

import DialogItem from "./DialogItem";
import DialogsNav from "./DialogsNav";

const Dialogs = ({ dialogsData }) => {
  return (
    <div className="dialogsBox">
      <DialogItem dialogsData={dialogsData} />
      <DialogsNav />
    </div>
  );
};

export default Dialogs;
