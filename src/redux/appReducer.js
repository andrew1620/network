import { authenticationTC } from "./authReducer";

const initialState = {
  initializeSuccessed: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_INITIALIZE:
      return { ...state, initializeSuccessed: true };
    default:
      return state;
  }
};
const SUCCESS_INITIALIZE = "app/SUCCESS_INITIALIZE";

const successInitialize = () => {
  return { type: SUCCESS_INITIALIZE };
};

//Initialization is ready, if I need to add some thunks I've to add it to Promise.all to complete the main function after thunks
export const initialize = () => {
  return dispatch => {
    const authP = dispatch(authenticationTC());
    Promise.all([authP]).then(() => {
      dispatch(successInitialize());
    });
  };
};

export default appReducer;
