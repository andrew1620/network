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
import { deleteDialog, addMessage } from "../../../redux/dialogsReducer";

const Dialogs = ({ dialogsPage, deleteDialog, addMessage }) => {
  return (
    <div className={css.dialogsBox}>
      <div className={css.content}>
        <Route
          exact
          path="/dialogs"
          render={() => (
            <DialogItem
              dialogs={dialogsPage.dialogs}
              deleteDialog={deleteDialog}
            />
          )}
        />
        <Route
          path="/dialogs/:userId"
          render={() => (
            <Messages
              conversation={dialogsPage.conversation}
              addMessage={addMessage}
            />
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
  deleteDialog,
  addMessage
};

export default compose(connect(mstp, mdtp), withAuthRedirect)(Dialogs);
