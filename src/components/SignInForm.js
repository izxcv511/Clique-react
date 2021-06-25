import React from "react";
import { Link } from "react-router-dom";

import FormInput from "./FormInput";
import FormButton from "./FormButton";

import { validateEmail, validatePassword } from "../helpers/validate";
import { login } from "../plugins/axios";
class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInvalidEmail: true,
      isInvalidPassword: true,
      emailValue: "",
      passwordValue: "",
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleClickButtonSubmit = this.handleClickButtonSubmit.bind(this);
  }
  handleChangeEmail(event) {
    this.setState({
      emailValue: event.target.value,
    });
  }
  handleChangePassword(event) {
    this.setState({
      passwordValue: event.target.value,
    });
  }

  handleClickButtonSubmit(event) {
    event.preventDefault();
    const email = this.state.emailValue;
    const password = this.state.passwordValue;
    const validEmail = validateEmail(email);
    const validPassword = validatePassword(password);
    this.setState({
      isInvalidEmail: validEmail,
      isInvalidPassword: validPassword,
    });
    if (validEmail && validPassword) {
      login({
        username: email,
        password: password,
      }).then((resp) => {
        if (resp.ok) {
          this.props.handleLogin();
        } else {
          this.props.notifyWarn(resp.error);
        }
      });
    }
  }
  render() {
    const { isInvalidEmail, emailValue, isInvalidPassword, passwordValue } =
      this.state;
    const { handleChangeEmail, handleChangePassword, handleClickButtonSubmit } =
      this;
    return (
      <form className="sign-in-form" action="">
        <FormInput
          form="sign-in"
          type="email"
          id="email"
          isInvalid={isInvalidEmail}
          value={emailValue}
          handleChangeValue={handleChangeEmail}
        />
        <FormInput
          form="sign-in"
          type="password"
          id="password"
          isInvalid={isInvalidPassword}
          value={passwordValue}
          handleChangeValue={handleChangePassword}
        />
        <FormButton
          form="sign-in"
          type="submit"
          modifier="green"
          content="Log in"
          handleClickButton={handleClickButtonSubmit}
        />
        <Link to="/" className="sign-in-form__forgot" href="#">
          Forgot password?{" "}
        </Link>
      </form>
    );
  }
}

export default SignInForm;
