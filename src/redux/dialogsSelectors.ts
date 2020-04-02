import { AppStateType } from "./store";

export const getDialogsPage = (state: AppStateType) => state.dialogsPage;
export const getDialogs = (state: AppStateType) => state.dialogsPage.dialogs;
export const getConversation = (state: AppStateType) =>
  state.dialogsPage.conversation;
