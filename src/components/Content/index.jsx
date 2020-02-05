import React from "react";
import "./style.css";
import { Route } from "react-router-dom";

import Profile from "./Profile";
import Dialogs from "./Dialogs";
import News from "./News";

const Content = ({ contentData, dispatch }) => {
  return (
    <main className="content">
      <Route
        path="/profile"
        render={() => (
          <Profile profilePage={contentData.profilePage} dispatch={dispatch} />
        )}
      />
      <Route
        path="/dialogs"
        render={() => (
          <Dialogs dialogsData={contentData.dialogsPage.dialogsData} />
        )}
      />
      <Route path="/news" render={() => <News />} />
    </main>
  );
};

export default Content;
