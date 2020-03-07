import React, { useEffect } from "react";
import css from "./style.module.css";
import { Route } from "react-router-dom";

import Dialogs from "./Dialogs";
import News from "./News";
import ProfileContainer from "./Profile/indexContainer";
import withSuspense from "../hoc/withSuspense";

const UsersContainer = React.lazy(() => import("./Users/UsersContainer"));
const Login = React.lazy(() => import("../Login"));
const EditPI = React.lazy(() => import("./Profile/ProfileInfo/EditPI"));

const Content = ({ isAuth, requireOwnerData }) => {
  //Спросить у Жени как лучше получать основные данные пользователя - на каком этапе
  useEffect(() => {
    if (isAuth) {
      requireOwnerData();
    }
  }, [isAuth, requireOwnerData]);

  return (
    <main className={css.content}>
      <Route exact path="/" render={() => <ProfileContainer />} />
      <Route
        exact
        path="/profile/:userId?"
        render={() => <ProfileContainer />}
      />
      <Route path="/dialogs" render={() => <Dialogs />} />
      <Route path="/news" render={() => <News />} />
      <Route path="/users" render={withSuspense(UsersContainer)} />
      <Route path="/login" render={withSuspense(Login)} />
      <Route path="/editPIForm" render={withSuspense(EditPI)} />
    </main>
  );
};

export default Content;
