import { authenticationTC } from "./authReducer";
import { requireOwnerData } from "./ownerReducer";

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
  return (dispatch, getState) => {
    const authP = dispatch(authenticationTC());

    Promise.all([authP]).then(() => {
      dispatch(successInitialize());
      const userId = getState().auth.userId;
      dispatch(requireOwnerData(userId));
    });
  };
};

export default appReducer;
