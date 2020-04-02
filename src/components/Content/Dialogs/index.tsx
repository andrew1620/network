import React from "react";
import css from "./style.module.css";
import { Route } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

import DialogItem from "./DialogItem";
import DialogsNav from "./DialogsNav";
import Messages from "./Messages";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getDialogs, getConversation } from "../../../redux/dialogsSelectors";
import {
  deleteDialog,
  addMessage,
  DialogType,
  ConversationType
} from "../../../redux/dialogsReducer";
import { getOwnerData } from "../../../redux/ownerSelectors";
import { OwnerDataType } from "../../../redux/ownerReducer";
import { AppStateType } from "../../../redux/store";

type mstpType = {
  dialogs: Array<DialogType>;
  conversation: ConversationType;
  ownerData: OwnerDataType;
};
type mdtpType = {
  deleteDialog: (dialogId: number) => void;
  addMessage: (messageBody: string) => void;
};
type Props = mstpType & mdtpType;

const Dialogs: React.FC<Props> = ({
  dialogs,
  conversation,
  deleteDialog,
  addMessage,
  ownerData
}) => {
  return (
    <div className={css.dialogsBox}>
      <div className={css.content}>
        <Route
          exact
          path="/dialogs"
          render={() => (
            <DialogItem dialogs={dialogs} deleteDialog={deleteDialog} />
          )}
        />
        <Route
          path="/dialogs/:userId"
          render={() => (
            <Messages
              conversation={conversation}
              ownerData={ownerData}
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

const mstp = (state: AppStateType) => ({
  dialogs: getDialogs(state),
  conversation: getConversation(state),
  ownerData: getOwnerData(state)
});
const mdtp = {
  deleteDialog,
  addMessage
};

export default compose(connect(mstp, mdtp), withAuthRedirect)(Dialogs);
