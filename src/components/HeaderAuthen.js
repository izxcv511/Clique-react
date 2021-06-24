import { Link } from "react-router-dom";

import HeaderLogo from "../assets/images/img-header-logo.png";

export default function HeaderAuthen() {
  return (
    <header className="header--authen">
      <div className="container">
        <Link to="/" className="header__logo">
          <img className="header__image" src={HeaderLogo} alt="clique-logo" />
        </Link>
      </div>
    </header>
  );
}
