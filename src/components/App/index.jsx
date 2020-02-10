import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./style.css";
import { Provider } from "react-redux";

import Header from "../Header";
import LeftSidebar from "../LeftSidebar";
import Content from "../Content";
import HeaderContainer from "../Header/HeaderContainer";

import StoreContext from "../../StoreContext";

const App = ({ state, dispatch, store }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="wrapper">
          {/* <Header /> */}
          <HeaderContainer />
          <LeftSidebar />
          <Content />
        </div>
      </Provider>
    </BrowserRouter>
  );
};
export default App;
