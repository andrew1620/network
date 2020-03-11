import React from "react";
import css from "./style.module.css";
import { Route } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

import DialogItem from "./DialogItem";
import DialogsNav from "./DialogsNav";
import Messages from "./Messages";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getDialogsPage } from "../../../redux/dialogsSelectors";
import { addMessage } from "../../../redux/dialogsReducer";

const Dialogs = ({ dialogsPage, addMessage }) => {
  return (
    <div className={css.dialogsBox}>
      <div className={css.content}>
        <Route
          exact
          path="/dialogs"
          render={() => <DialogItem dialogsData={dialogsPage.dialogsData} />}
        />
        <Route
          path="/dialogs/:userId"
          render={() => (
            <Messages messages={dialogsPage.messages} addMessage={addMessage} />
          )}
        />
      </div>
      <div className={css.menu}>
        <DialogsNav />
      </div>
    </div>
  );
};

const mstp = state => ({
  dialogsPage: getDialogsPage(state)
});
const mdtp = {
  addMessage
};

export default compose(connect(mstp, mdtp), withAuthRedirect)(Dialogs);
