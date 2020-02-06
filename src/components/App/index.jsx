import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./style.css";

import Header from "../Header";
import LeftSidebar from "../LeftSidebar";
import Content from "../Content";

import StoreContext from "../../StoreContext";

const App = ({ state, dispatch, store }) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <LeftSidebar />
        <StoreContext.Provider value={store}>
          {<Content state={state} dispatch={dispatch} store={store} />}
        </StoreContext.Provider>
      </div>
    </BrowserRouter>
  );
};
export default App;
