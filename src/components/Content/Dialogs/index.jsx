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

const Dialogs = ({ dialogsPage }) => {
  return (
    <div className={css.dialogsBox}>
      <Route
        exact
        path="/dialogs"
        render={() => <DialogItem dialogsData={dialogsPage.dialogsData} />}
      />
      <Route path="/dialogs/:userId" render={() => <Messages />} />
      <DialogsNav />
    </div>
  );
};

const mstp = state => ({
  dialogsPage: getDialogsPage(state)
});

export default compose(connect(mstp), withAuthRedirect)(Dialogs);
