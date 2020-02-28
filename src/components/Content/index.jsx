import React, { useEffect } from "react";
import "./style.css";
import { Route } from "react-router-dom";

import Dialogs from "./Dialogs";
import News from "./News";
import ProfileContainer from "./Profile/ProfileContainer";
import Preloader from "../common/Preloader";
import withSuspense from "../hoc/withSuspense";
import EditPI from "./Profile/ProfileInfo/EditPI";
import { connect } from "react-redux";
import { requireOwnerData } from "../../redux/ownerReducer";

const UsersContainer = React.lazy(() => import("./Users/UsersContainer"));
const Login = React.lazy(() => import("../Login"));

//Пока что оставил один withSuspense второй просто через React.Suspense для наглядности
const Content = ({ isAuth, requireOwnerData }) => {
  //Спросить у Жени как лучше получать основные данные пользователя - на каком этапе
  if (isAuth) {
    requireOwnerData();
  }

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
      <Route path="/editPIForm" render={withSuspense(EditPI)} />
    </main>
  );
};

const mstp = state => ({
  isAuth: state.auth.isAuth
});
const mdtp = {
  requireOwnerData
};

export default connect(mstp, mdtp)(Content);
