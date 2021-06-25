import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { toast } from "react-toastify";

import SignIn from "./pages/SignIn";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import FileNotFound from "./pages/FileNotFound";
import Loading from "./components/Loading";

import { TIME_ALERT } from "./const/index";

import "react-toastify/dist/ReactToastify.css";
import "./assets/styles/fontawesome.css";
import "./assets/styles/reset.css";
import "./assets/styles/styles.css";
import "./assets/styles/loading.css";

toast.configure();
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
    this.setLoading = this.setLoading.bind(this);
  }
  notifyWarn(content = "", time = TIME_ALERT) {
    toast.warn(content, {
      autoClose: time,
    });
  }
  setLoading(bool = true) {
    this.setState(() => ({
      isLoading: bool,
    }));
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Loading isLoading={this.state.isLoading} />
          <Switch>
            <Route
              exact
              path="/"
              component={(props) => (
                <HomePage notifyWarn={this.notifyWarn} {...props} />
              )}
            ></Route>
            <Route
              exact
              path="/sign-in"
              component={(props) => (
                <SignIn notifyWarn={this.notifyWarn} {...props} />
              )}
            ></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route path="*" component={FileNotFound}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
