import { usersAPI } from "../api/api";

const initialState = {
  users: [],
  count: 5, //Для запроса на сервер, сколько человек принимать при запросе
  currentPage: 1, //текущая страница
  totalCount: 10,
  isFetching: false,
  isFollowing: []
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
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.payload };
    case TOGGLE_IS_FOLLOWING:
      return {
        ...state,
        isFollowing: action.payload.isFollowing
          ? [...state.isFollowing, action.payload.userId]
          : state.isFollowing.filter(id => {
              return id !== action.payload.userId;
            })
      };
    default:
      return state;
  }
};

export default usersReducer;

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING = "users/TOGGLE_IS_FOLLOWING";

export const follow = id => {
  return {
    type: FOLLOW,
    payload: id
  };
};
export const unfollow = id => {
  return {
    type: UNFOLLOW,
    payload: id
  };
};
export const setUsers = users => {
  return { type: SET_USERS, payload: users };
};
export const setCurrentPage = newCurrentPage => {
  return { type: SET_CURRENT_PAGE, payload: newCurrentPage };
};
export const setTotalUsersCount = newCount => {
  return { type: SET_TOTAL_USERS_COUNT, payload: newCount };
};
export const toggleIsFetching = isFetching => {
  return { type: TOGGLE_IS_FETCHING, payload: isFetching };
};
export const toggleIsFollowing = (isFollowing, userId) => {
  return { type: TOGGLE_IS_FOLLOWING, payload: { isFollowing, userId } };
};

//thunkCreator
export const getUsersThunkCreator = (count, currentPage) => {
  //сам thunk
  return dispatch => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(count, currentPage).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const followThunkCreator = userId => {
  return dispatch => {
    dispatch(toggleIsFollowing(true, userId));
    usersAPI.follow(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(follow(userId));
      }
      dispatch(toggleIsFollowing(false, userId));
    });
  };
};

export const unfollowThunkCreator = userId => {
  return dispatch => {
    dispatch(toggleIsFollowing(true, userId));
    usersAPI.unfollow(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(unfollow(userId));
      }
      dispatch(toggleIsFollowing(false, userId));
    });
  };
};
