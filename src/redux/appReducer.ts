import { authentication } from "./authReducer";

const SUCCESS_INITIALIZE = "app/SUCCESS_INITIALIZE";

export type InitialStateType = {
  initializeSuccessed: boolean;
};

const initialState: InitialStateType = {
  initializeSuccessed: false
};

const appReducer = (state = initialState, action: any): InitialStateType => {
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

//Initialization is ready, if I need to add some thunks I've to add it to Promise.all to complete the main function after thunks
export const initialize = () => {
  return (dispatch: any) => {
    const authP = dispatch(authentication());
    Promise.all([authP]).then(() => {
      dispatch(successInitialize());
    });
  };
};

export default appReducer;
