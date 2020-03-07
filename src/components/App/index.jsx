import React, { useEffect } from "react";
import { HashRouter } from "react-router-dom";
import css from "./style.module.css";
import { Provider, connect } from "react-redux";

import LeftSidebar from "../LeftSidebar";
import Content from "../Content";
import HeaderContainer from "../Header/indexContainer";
import { initialize } from "../../redux/appReducer";
import Preloader from "../common/Preloader";
import { requireOwnerData } from "../../redux/ownerReducer";

const App = ({
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

const mapStateToProps = state => {
  return {
    initializeSuccessed: state.app.initializeSuccessed,
    isAuth: state.auth.isAuth
  };
};

export default connect(mapStateToProps, { initialize, requireOwnerData })(App);
