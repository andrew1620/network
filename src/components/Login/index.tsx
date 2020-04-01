import React from "react";
import css from "./style.module.css";
import { connect } from "react-redux";
import { reduxForm, Field, InjectedFormProps } from "redux-form";
import { Redirect } from "react-router-dom";

import { Input } from "./Input";
import { required } from "../../utils/validators";
import { login } from "../../redux/authReducer";
import { getIsAuth } from "../../redux/authSelectors";
import { AppStateType } from "../../redux/store";

type LoginFormOwnProps = {
  onSubmit: (formData: LoginFormValuesType) => void;
};

const LoginForm: React.FC<InjectedFormProps<
  LoginFormValuesType,
  LoginFormOwnProps
> &
  LoginFormOwnProps> = props => {
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
const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
  form: "login"
})(LoginForm);

// -----LOGIN-----

type MapStatePropsType = {
  isAuth: boolean | null;
};
type MapDispatchPropsType = {
  login: (email: string, password: string, rememberMe: boolean) => void;
};
type PropsType = MapStatePropsType & MapDispatchPropsType;

type LoginFormValuesType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const Login: React.FC<PropsType> = props => {
  const onSubmit = (formData: LoginFormValuesType) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) return <Redirect to="/profile" />;

  return (
    <div className={css.loginBlock}>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  isAuth: getIsAuth(state)
});
const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
