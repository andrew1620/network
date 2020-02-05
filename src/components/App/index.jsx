import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./style.css";

import Header from "../Header";
import LeftSidebar from "../LeftSidebar";
import Content from "../Content";

const App = ({ state, dispatch }) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <LeftSidebar />
        <Content contentData={state.contentData} dispatch={dispatch} />
      </div>
    </BrowserRouter>
  );
};
export default App;
