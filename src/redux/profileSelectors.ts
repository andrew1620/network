import { AppStateType } from "./store";

export const getProfilePage = (state: AppStateType) => state.profilePage;
export const getProfile = (state: AppStateType) => state.profilePage.profile;
