const initialState = {
  users: [],
  count: 5, //Для запроса на сервер, сколько человек принимать при запросе
  currentPage: 1, //текущая страница
  totalCount: 10
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.payload) return { ...user, followed: true };
          else return user;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.payload) return { ...user, followed: false };
          else return user;
        })
      };
    case SET_USERS:
      return { ...state, users: [...action.payload] };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalCount: action.payload };
    default:
      return state;
  }
};

export default usersReducer;

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

export const followAC = id => {
  return {
    type: FOLLOW,
    payload: id
  };
};
export const unfollowAC = id => {
  return {
    type: UNFOLLOW,
    payload: id
  };
};
export const setUsersAC = users => {
  return { type: SET_USERS, payload: users };
};
export const setCurrentPageAC = newCurrentPage => {
  return { type: SET_CURRENT_PAGE, payload: newCurrentPage };
};
export const setTotalUsersCountAC = newCount => {
  return { type: SET_TOTAL_USERS_COUNT, payload: newCount };
};
