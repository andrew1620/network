import { createStore, combineReducers } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
  postsData: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer
});

const store = createStore(reducers);

export default store;
