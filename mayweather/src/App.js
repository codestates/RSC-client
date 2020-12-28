import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import Content from "./pages/Content";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: "1",
    };
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    axios
      .post("http://13.209.245.44/logout", { withCredentials: true })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" render={() => <Login />} />
          <Route exact path="/signup" render={() => <Signup />} />
          <Route
            exact
            path="/content"
            render={() => <Content handleLogout={this.handleLogout}></Content>}
          ></Route>
          <Route exact path="/logout" render={() => <Logout></Logout>}></Route>
          <Route exact path="/" render={() => <Home></Home>}></Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
