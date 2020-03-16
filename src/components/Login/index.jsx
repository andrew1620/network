import React from "react";
import css from "./style.module.css";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Redirect } from "react-router-dom";

import { Input } from "./Input";
import { required } from "../../utils/validators";
import { login } from "../../redux/authReducer";
import { getIsAuth } from "../../redux/authSelectors";

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className={css.loginForm}>
      <div>
        <Field
          component={Input}
          type="email"
          name="email"
          placeholder="Введите email"
          validate={[required]}
        />
      </div>
      <div>
        <Field
          component={Input}
          name="password"
          placeholder="Введите пароль"
          type="password"
          validate={[required]}
        />
      </div>
      <div className={css.checkboxContainer}>
        <label htmlFor="rememberMe">
          <Field component="input" type="checkbox" name="rememberMe" />{" "}
          Запомнить меня
        </label>
      </div>
      <button className={css.btnLogin}>Войти</button>
      {props.error && <div className={css.mainError}>{props.error}</div>}
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = props => {
  const onSubmit = formData => {
    props.login(formData.email, formData.password);
  };

  if (props.isAuth) return <Redirect to="/profile" />;

  return (
    <div className={css.loginBlock}>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: getIsAuth(state)
});
const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
