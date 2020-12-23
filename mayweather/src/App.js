import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./pages/Home";

class App extends React.Component {
  // state = {
  //   isLogin: false, //필요없을지도. if home이 only for visitors
  // };

  render() {
    // const { isLogin } = this.state;

    return (
      <div>
        <Switch>
          <Route
            path="/login"
            render={() => (
              <Login />
            )}
          />
        </Switch>
        <Switch>
          <Route
            path="/"
            render={() => <Home />}
          />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);