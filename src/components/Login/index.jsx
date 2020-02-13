import React from "react";
import { reduxForm, Field } from "redux-form";

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component="input"
          type="text"
          name="login"
          placeholder="Введите логин"
        />
      </div>
      <div>
        <Field
          component="input"
          type="text"
          name="password"
          placeholder="Введите пароль"
        />
      </div>
      <div>
        <label htmlFor="rememberMe">Запонмить меня</label>
        <Field component="input" type="checkbox" name="rememberMe" />{" "}
      </div>
      <button>submit</button>
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = () => {
  const onSubmit = formData => {
    console.log(formData);
  };
  return (
    <div>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
export default Login;
