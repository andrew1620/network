import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

//HOC возвращающий возможность перенаправления на страницу логина если не аутентифицирован пользователь
export const withAuthRedirect = Component => {
  const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
  });

  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to="/login" />;
      return <Component {...this.props} />;
    }
  }

  const connectedRedirectComponent = connect(mapStateToProps)(
    RedirectComponent
  );

  return connectedRedirectComponent;
};
