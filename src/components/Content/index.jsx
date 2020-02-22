import React from "react";
import "./style.css";
import { Route } from "react-router-dom";

import Dialogs from "./Dialogs";
import News from "./News";
import ProfileContainer from "./Profile/ProfileContainer";
import Preloader from "../common/Preloader";
import withSuspense from "../hoc/withSuspense";

const UsersContainer = React.lazy(() => import("./Users/UsersContainer"));
const Login = React.lazy(() => import("../Login"));

//Пока что оставил один withSuspense второй просто через React.Suspense для наглядности
const Content = () => {
  return (
    <main className="content">
      <Route exact path="/" render={() => <ProfileContainer />} />
      <Route
        exact
        path="/profile/:userId?"
        render={() => <ProfileContainer />}
      />
      <Route path="/dialogs" render={() => <Dialogs />} />
      <Route path="/news" render={() => <News />} />
      <Route path="/users" render={withSuspense(UsersContainer)} />
      <Route
        path="/login"
        render={() => (
          <React.Suspense fallback={<Preloader />}>
            <Login />
          </React.Suspense>
        )}
      />
    </main>
  );
};

export default Content;
