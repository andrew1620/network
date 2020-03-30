import { usersAPI } from "../api/api";
import { PhotosType } from "./commonTypes";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING = "users/TOGGLE_IS_FOLLOWING";
const SET_PORTION_NUMBER = "users/SET_PORTION_NUMBER";

export type UserType = {
  id: number;
  name: string;
  status: string;
  photos: PhotosType;
  followed: boolean;
};

const initialState = {
  users: [] as Array<UserType>,
  count: 5, //People amount in response
  currentPage: 1,
  totalCount: null,
  isFetching: false,
  isFollowing: [] as Array<number>,
  portionNumber: 1
};

type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateType => {
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
    case SET_PORTION_NUMBER:
      return { ...state, portionNumber: action.payload };
    default:
      return state;
  }
};

export default usersReducer;

type FollowACActionType = {
  type: typeof FOLLOW;
  payload: number;
};
export const followAC = (id: number): FollowACActionType => {
  return {
    type: FOLLOW,
    payload: id
  };
};

type UnfollowACActionType = {
  type: typeof UNFOLLOW;
  payload: number;
};
export const unfollowAC = (id: number): UnfollowACActionType => {
  return {
    type: UNFOLLOW,
    payload: id
  };
};

type SetUsersActionType = {
  type: typeof SET_USERS;
  payload: Array<UserType>;
};
export const setUsers = (users: Array<UserType>): SetUsersActionType => {
  return { type: SET_USERS, payload: users };
};

export type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE;
  payload: number;
};
export const setCurrentPage = (
  newCurrentPage: number
): SetCurrentPageActionType => {
  return { type: SET_CURRENT_PAGE, payload: newCurrentPage };
};

type SetTotalUserCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT;
  payload: number;
};
export const setTotalUsersCount = (
  newCount: number
): SetTotalUserCountActionType => {
  return { type: SET_TOTAL_USERS_COUNT, payload: newCount };
};

type ToggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING;
  payload: boolean;
};
export const toggleIsFetching = (
  isFetching: boolean
): ToggleIsFetchingActionType => {
  return { type: TOGGLE_IS_FETCHING, payload: isFetching };
};

type TogggleIsFollowingActionType = {
  type: typeof TOGGLE_IS_FOLLOWING;
  payload: { isFollowing: boolean; userId: number };
};
export const toggleIsFollowing = (
  isFollowing: boolean,
  userId: number
): TogggleIsFollowingActionType => {
  return { type: TOGGLE_IS_FOLLOWING, payload: { isFollowing, userId } };
};

type SetPortionNumberActionType = {
  type: typeof SET_PORTION_NUMBER;
  payload: number;
};
export const setPortionNumber = (
  portionNumber: number
): SetPortionNumberActionType => {
  return { type: SET_PORTION_NUMBER, payload: portionNumber };
};

// ------THUNKS-----------

export const requireUsers = (count: number, currentPage: number) => {
  return (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(count, currentPage).then((data: any) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const follow = (userId: number) => {
  return (dispatch: any) => {
    dispatch(toggleIsFollowing(true, userId));
    usersAPI.follow(userId).then((data: any) => {
      if (data.resultCode === 0) {
        dispatch(followAC(userId));
      }
      dispatch(toggleIsFollowing(false, userId));
    });
  };
};

export const unfollow = (userId: number) => {
  return (dispatch: any) => {
    dispatch(toggleIsFollowing(true, userId));
    usersAPI.unfollow(userId).then((data: any) => {
      if (data.resultCode === 0) {
        dispatch(unfollowAC(userId));
      }
      dispatch(toggleIsFollowing(false, userId));
    });
  };
};
