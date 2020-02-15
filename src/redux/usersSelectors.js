export const getUsers = state => {
  return state.usersPage.users;
};
export const getCount = state => {
  return state.usersPage.count;
};
export const getCurrentPage = state => {
  return state.usersPage.currentPage;
};
export const getTotalCount = state => {
  return state.usersPage.totalCount;
};
export const getIsFetching = state => {
  return state.usersPage.isFetching;
};
export const getIsFollowing = state => {
  return state.usersPage.isFollowing;
};
