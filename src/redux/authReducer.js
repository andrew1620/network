const initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  currentUserData: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
        isAuth: true
      };
    case SET_CURRENT_USER_DATA:
      return {
        ...state,
        currentUserData: {
          ...action.payload,
          photos: { ...action.payload.photos }
        }
      };
    default:
      return state;
  }
};
export default authReducer;

const SET_USER_DATA = "SET_USER_DATA";
const SET_CURRENT_USER_DATA = "SET_CURRENT_USER-DATA";

export const setAuthUserData = (userId, email, login) => {
  return { type: SET_USER_DATA, payload: { userId, email, login } };
};
export const setCurrentUserData = userData => {
  return { type: SET_CURRENT_USER_DATA, payload: userData };
};
