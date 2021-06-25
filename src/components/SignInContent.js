import { Link } from "react-router-dom";

import SignInSocial from "./SignInSocial";
import SignInForm from "./SignInForm";

export default function SignInContent(props) {
  return (
    <main className="sign-in">
      <div className="container">
        <div className="sign-in__content">
          <h1 className="sign-in__title">Sign in</h1>
          <SignInForm
            handleLogin={props.handleLogin}
            notifyWarn={props.notifyWarn}
          />
          <h2 className="sign-in__caption">Or </h2>
          <SignInSocial />
          <p className="sign-in__register">
            New to eko? <Link to="/register">Register </Link>
          </p>
        </div>
        <div className="sign-in__bottom">
          <p className="sign-in__vender">
            Are you Vender? <Link to="/sign-in">Login</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
