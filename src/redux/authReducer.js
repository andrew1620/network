import { authAPI } from "../api/api";

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
        ...action.payload,
        isAuth: true
      };
    default:
      return state;
  }
};
export default authReducer;

const SET_USER_DATA = "SET_USER_DATA";

export const setAuthUserData = (userId, email, login) => {
  return { type: SET_USER_DATA, payload: { userId, email, login } };
};

export const authenticationTC = () => {
  return dispatch => {
    authAPI.me().then(data => {
      if (data.resultCode === 0) {
        dispatch(
          setAuthUserData(data.data.id, data.data.email, data.data.login)
        );
      }
    });
  };
};
