import React from "react";

import "../../index.css";

import Header from "../Header";
import LeftSidebar from "../LeftSidebar";
import Content from "../Content";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <LeftSidebar />
      <Content />
    </div>
  );
};
export default App;
