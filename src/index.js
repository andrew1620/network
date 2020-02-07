import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
// import { store } from "./redux/state";
import store from "./redux/store";

window.store = store; // Для отслеживания временно

// const rerenderEntireTree = (state = {}) => {
ReactDOM.render(
  <App dispatch={store.dispatch.bind(store)} store={store} />,
  document.getElementById("root")
);
// };

// rerenderEntireTree(store.getState());
// store.subscribe(() => {
//   const state = store.getState();
//   rerenderEntireTree(state);
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
