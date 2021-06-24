import React from "react";

import HeaderHome from "../components/HeaderHome";
import NavHome from "../components/NavHome";
import PostList from "../components/PostList";

import { getUser } from "../plugins/axios";
import { CONFIG_ACCESS_TOKEN } from "../const/index";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        userId: "",
        avatar: "",
        displayName: "",
      },
      category: "",
    };
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    getUser().then((resp) => {
      if (resp.ok) {
        let currentUser = {
          userId: resp.data.userID,
          avatar: resp.data.userID,
          displayName: resp.data.displayName,
        };
        this.setState({
          currentUser: currentUser,
        });
      } else {
        this.props.history.push("/sign-in");
      }
    });
  }
  handleChangeCategory(category) {
    this.setState({
      category: category,
    });
  }
  handleLogout() {
    this.setState({
      currentUser: {
        userId: "",
        avatar: "",
        displayName: "",
      },
    });
    localStorage.setItem(CONFIG_ACCESS_TOKEN, "");
    this.props.history.push("/sign-in");
  }
  render() {
    const { currentUser, category } = this.state;
    const { handleChangeCategory } = this;
    return (
      <div className="home-page">
        <div className="wrapper">
          <HeaderHome
            currentUser={currentUser}
            handleLogout={this.handleLogout}
          />
          <NavHome handleChangeCategory={handleChangeCategory} />
          <PostList category={category} currentUser={currentUser} />
        </div>
      </div>
    );
  }
}
export default HomePage;
