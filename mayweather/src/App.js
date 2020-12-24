import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [
        { id: 1, place: "Seoul" },
        { id: 2, place: "Incheon" },
        { id: 3, place: "Busan" }
      ],
      // isLogin: false, //필요없을지도. if home이 only for visitors
    }
  }

  handleLocationClick(clicked) {

  }

  render() {
    // const { isLogin } = this.state;

    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);