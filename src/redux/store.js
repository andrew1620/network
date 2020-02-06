import { createStore, combineReducers } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

const reducers = combineReducers({
  postsData: profileReducer,
  dialogsPage: dialogsReducer
});

const store = createStore(reducers);

export default store;
