import { Link } from "react-router-dom";

import HeaderLogo from "../assets/images/img-header-logo.png";

export default function HeaderHome(props) {
  const { currentUser } = props;
  let avatar =
    currentUser.avatar ||
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkw1WKC4E9OLSY7SOrahR3nTeGNaYbBblzNQ&usqp=CAU";
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header-search">
            <i className="far fa-search header-search__icon"></i>
            <input
              className="header-search__input"
              type="email"
              name="email"
              placeholder="Search talent"
            />
          </div>
          <Link to="/" className="header__logo">
            <img className="header__image" src={HeaderLogo} alt="clique-logo" />
          </Link>
          <div className="header__selects">
            <div className="header-selected">
              <i className="fas fa-filter header-selected__icon"></i>
            </div>
            <div className="header-selected">
              <i className="fas fa-bell header-selected__icon"></i>
            </div>
            <div className="header-selected">
              <i className="fas fa-plus header-selected__icon"></i>
            </div>
            <div
              className="header-user"
              onClick={() => {
                props.handleLogout();
              }}
            >
              <img
                className="header-user__image"
                src={avatar}
                alt={currentUser.displayName}
              />
              <i className="fas fa-caret-down header-user__icon"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
