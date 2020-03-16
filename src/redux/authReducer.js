import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "auth/SET_USER_DATA";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
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

export const setAuthUserData = (userId, email, login, isAuth) => {
  return { type: SET_USER_DATA, payload: { userId, email, login, isAuth } };
};

export const authentication = () => {
  return async dispatch => {
    const data = await authAPI.me();
    if (data.resultCode === 0) {
      dispatch(
        setAuthUserData(data.data.id, data.data.email, data.data.login, true)
      );
    }
  };
};

export const login = (email, password, rememberMe) => {
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

export const logout = () => {
  return async dispatch => {
    const data = await authAPI.logout();
    if (data.resultCode === 0)
      dispatch(setAuthUserData(null, null, null, false));
  };
};
