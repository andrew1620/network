import React, { useEffect } from "react";
import { HashRouter } from "react-router-dom";
import css from "./style.module.css";
import { Provider, connect } from "react-redux";
import { Store } from "redux";

import LeftSidebar from "../LeftSidebar";
import Content from "../Content";
import HeaderContainer from "../Header/indexContainer";
import { initialize } from "../../redux/appReducer";
import Preloader from "../common/Preloader";
import { requireOwnerData } from "../../redux/ownerReducer";
import { AppStateType } from "../../redux/store";

type mstpType = {
  initializeSuccessed: boolean;
  isAuth: boolean | null;
};
type mdtpType = {
  initialize: () => void;
  requireOwnerData: () => void;
};
type OwnProps = {
  store: Store;
};
type PropsType = mstpType & mdtpType & OwnProps;

const App: React.FC<PropsType> = ({
  store,
  initialize,
  initializeSuccessed,
  isAuth,
  requireOwnerData
}) => {
  useEffect(() => {
    initialize();
  }, [initialize, initializeSuccessed]);

  if (!initializeSuccessed) return <Preloader />;
  return (
    <HashRouter>
      <Provider store={store}>
        <div className={css.wrapper}>
          <HeaderContainer />
          <LeftSidebar />
          <Content isAuth={isAuth} requireOwnerData={requireOwnerData} />
        </div>
      </Provider>
    </HashRouter>
  );
};

const mapStateToProps = (state: AppStateType) => {
  return {
    initializeSuccessed: state.app.initializeSuccessed,
    isAuth: state.auth.isAuth
  };
};

export default connect(mapStateToProps, { initialize, requireOwnerData })(App);
