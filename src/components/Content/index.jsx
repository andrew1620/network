import React from "react";
import "./style.css";
import { Route } from "react-router-dom";

import Profile from "./Profile";
import Dialogs from "./Dialogs";
import News from "./News";

const Content = () => {
  return (
    <main className="content">
      <Route path="/profile" component={Profile} />
      <Route path="/dialogs" component={Dialogs} />
      <Route path="/news" component={News} />
    </main>
  );
};

export default Content;
