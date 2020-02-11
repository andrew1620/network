import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./style.css";
import { Provider } from "react-redux";

import LeftSidebar from "../LeftSidebar";
import Content from "../Content";
import HeaderContainer from "../Header/HeaderContainer";

const App = ({ store }) => {
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
