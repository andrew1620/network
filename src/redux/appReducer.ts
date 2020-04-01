import { ThunkAction } from "redux-thunk";

import { authentication } from "./authReducer";
import { AppStateType } from "./store";

const SUCCESS_INITIALIZE = "app/SUCCESS_INITIALIZE";

export type InitialStateType = {
  initializeSuccessed: boolean;
};

const initialState: InitialStateType = {
  initializeSuccessed: false
};

type ActionTypes = SuccessInitilializeActionType;

const appReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case SUCCESS_INITIALIZE:
      return { ...state, initializeSuccessed: true };
    default:
      return state;
  }
};

type SuccessInitilializeActionType = {
  type: typeof SUCCESS_INITIALIZE;
};

const successInitialize = (): SuccessInitilializeActionType => {
  return { type: SUCCESS_INITIALIZE };
};

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>;

//Initialization is ready, if I need to add some thunks I've to add it to Promise.all to complete the main function after thunks
export const initialize = (): ThunkType => {
  return dispatch => {
    const authP = dispatch(authentication());
    Promise.all([authP]).then(() => {
      dispatch(successInitialize());
    });
  };
};

export default appReducer;
