import React from "react";
import "./style.css";
import { Route } from "react-router-dom";

import Profile from "./Profile";
import Dialogs from "./Dialogs";
import News from "./News";

const Content = ({ state, dispatch, store }) => {
  return (
    <main className="content">
      <Route
        path="/profile"
        render={() => (
          <Profile state={state} dispatch={dispatch} store={store} />
        )}
      />
      <Route
        path="/dialogs"
        render={() => (
          <Dialogs dialogsPage={state.dialogsPage} dispatch={dispatch} />
        )}
      />
      <Route path="/news" render={() => <News />} />
    </main>
  );
};

export default Content;
