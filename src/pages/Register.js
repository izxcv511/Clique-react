import React from "react";

import HeaderAuthen from "../components/HeaderAuthen";
import RegisterContent from "../components/RegisterContent";

class Register extends React.Component {
  render() {
    return (
      <div className="authenticate">
        <div className="wrapper">
          <HeaderAuthen />
          <RegisterContent />
        </div>
      </div>
    );
  }
}
export default Register;
