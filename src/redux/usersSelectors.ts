import { AppStateType } from "./store";

export const getUsers = (state: AppStateType) => {
  return state.usersPage.users;
};
export const getCount = (state: AppStateType) => {
  return state.usersPage.count;
};
export const getCurrentPage = (state: AppStateType) => {
  return state.usersPage.currentPage;
};
export const getTotalCount = (state: AppStateType) => {
  return state.usersPage.totalCount;
};
export const getIsFetching = (state: AppStateType) => {
  return state.usersPage.isFetching;
};
export const getIsFollowing = (state: AppStateType) => {
  return state.usersPage.isFollowing;
};
