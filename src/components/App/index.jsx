import React from "react";
import { HashRouter } from "react-router-dom";
import "./style.css";
import { Provider, connect } from "react-redux";

import LeftSidebar from "../LeftSidebar";
import Content from "../Content";
import HeaderContainer from "../Header/HeaderContainer";
import { initialize } from "../../redux/appReducer";
import Preloader from "../common/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initialize();
  }

  render() {
    if (!this.props.initializeSuccessed) return <Preloader />;
    return (
      <HashRouter>
        <Provider store={this.props.store}>
          <div className="wrapper">
            <HeaderContainer />
            <LeftSidebar />
            <Content />
          </div>
        </Provider>
      </HashRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    initializeSuccessed: state.app.initializeSuccessed
  };
};

export default connect(mapStateToProps, { initialize })(App);
