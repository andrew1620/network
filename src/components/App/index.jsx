import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./style.css";

import Header from "../Header";
import LeftSidebar from "../LeftSidebar";
import Content from "../Content";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <LeftSidebar />
        <Content />
      </div>
    </BrowserRouter>
  );
};
export default App;
