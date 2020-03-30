import { AppStateType } from "./store";

export const getAuthUserId = (state: AppStateType) => state.auth.userId;
export const getIsAuth = (state: AppStateType) => state.auth.isAuth;
