import React from "react";
import { reduxForm, Field } from "redux-form";
import { InputC } from "../common/FormItems/Items";
import { required } from "../../utils/validators";
import { connect } from "react-redux";
import { loginTC } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";
import css from "./style.module.css";

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={InputC}
          type="email"
          name="email"
          placeholder="Введите email"
          validate={[required]}
        />
        <span>forNetworkServer@yandex.ru</span>
      </div>
      <div>
        <span>6832115</span>
        <Field
          component={InputC}
          name="password"
          placeholder="Введите пароль"
          type="password"
          validate={[required]}
        />
      </div>
      <div>
        <label htmlFor="rememberMe">Запонмить меня</label>
        <Field component={InputC} type="checkbox" name="rememberMe" />{" "}
      </div>
      <button
        className={css.btnLogin + " " + (props.error && css.btnLoginError)}
      >
        Log In
      </button>
      {props.error && <span className={css.mainError}>{props.error}</span>}
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = props => {
  const onSubmit = formData => {
    props.loginTC(formData.email, formData.password);
  };

  if (props.isAuth) return <Redirect to="/profile" />;

  return (
    <div>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});
const mapDispatchToProps = {
  loginTC
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
