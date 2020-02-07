import React from "react";
import "./style.css";
import { Route } from "react-router-dom";

import Profile from "./Profile";
import Dialogs from "./Dialogs";
import News from "./News";
import UsersContainer from "./Users/UsersContainer";

const Content = () => {
  return (
    <main className="content">
      <Route path="/profile" render={() => <Profile />} />
      <Route path="/dialogs" render={() => <Dialogs />} />
      <Route path="/news" render={() => <News />} />
      <Route path="/users" render={() => <UsersContainer />} />
    </main>
  );
};

export default Content;
