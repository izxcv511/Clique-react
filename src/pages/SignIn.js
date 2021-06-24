import React from "react";

import HeaderAuthen from "../components/HeaderAuthen";
import SignInContent from "../components/SignInContent";
import { getUser } from "../plugins/axios";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    getUser().then((resp) => {
      if (resp.ok) {
        this.props.history.push("/");
      }
    });
  }
  render() {
    let { history } = this.props;
    return (
      <div className="authenticate">
        <div className="wrapper">
          <HeaderAuthen />
          <SignInContent
            handleLogin={function () {
              history.push("/");
            }}
          />
        </div>
      </div>
    );
  }
}
export default SignIn;
