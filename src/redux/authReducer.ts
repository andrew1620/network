import { stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";

import { authAPI } from "../api/api";
import { AppStateType } from "./store";

const SET_USER_DATA = "auth/SET_USER_DATA";

type InitialStateType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isFetching: boolean | null;
  isAuth: boolean | null;
};

const initialState: InitialStateType = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false
};

type ActionTypes = SetAuthUserDataActionType | StopSubmitType;

const authReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
export default authReducer;

type SetAuthUserDataPayloadType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean | null;
};
type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA;
  payload: SetAuthUserDataPayloadType;
};
export const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean | null
): SetAuthUserDataActionType => {
  return { type: SET_USER_DATA, payload: { userId, email, login, isAuth } };
};

//I don't want to type actions like the method in redux API that's why I've to type StopSubmit as any.
type StopSubmitType = any;

// -----THUNKS-----

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

export const authentication = (): ThunkType => {
  return async dispatch => {
    const data = await authAPI.me();
    if (data.resultCode === 0) {
      dispatch(
        setAuthUserData(data.data.id, data.data.email, data.data.login, true)
      );
    }
  };
};

export const login = (
  email: string,
  password: number,
  rememberMe: boolean
): ThunkType => {
  return async dispatch => {
    const data = await authAPI.login(email, password, rememberMe);
    if (data.resultCode === 0) {
      dispatch(authentication());
    } else {
      const error =
        data.messages.length === 0
          ? "Invalid Email or Password"
          : data.messages[0];
      dispatch(stopSubmit("login", { _error: error }));
    }
  };
};

export const logout = (): ThunkType => {
  return async dispatch => {
    const data = await authAPI.logout();
    if (data.resultCode === 0)
      dispatch(setAuthUserData(null, null, null, false));
  };
};
