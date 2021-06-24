import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/styles/fontawesome.css";
import "./assets/styles/reset.css";
import "./assets/styles/styles.css";

import SignIn from "./pages/SignIn";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import FileNotFound from "./pages/FileNotFound";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/sign-in" component={SignIn}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route path="*" component={FileNotFound}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
