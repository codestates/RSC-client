import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import Content from "./pages/Content";
import Mypage from "./pages/Mypage";
import axios from "axios";

//사용 가능한 서버: http://13.209.245.44/ or http://54.180.36.82

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: "1",
      isLoggedin: false,
      locations: [],
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleResponseSuccess = this.handleResponseSuccess.bind(this);
  }
  handleLogout() {
    axios
      .post("https://mayweather24.com/logout", {
        withCredentials: true,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  // userinfo: res.data

  componentDidMount() {
    // console.log('----componentDidMount----')
    fetch("https://mayweather24.com")
      .then((res) => {
        return console.log("data from real server >>>", res), res.json();
      })
      .then((data) => {
        this.setState({
          locations: data.currentWeather,
        });
      });
  }

  handleResponseSuccess() {
    this.props.history.push("/content");
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/signup" render={() => <Signup />} />
          <Route
            exact
            path="/content"
            render={() => <Content handleLogout={this.handleLogout}></Content>}
          ></Route>
          <Route exact path="/logout" render={() => <Logout></Logout>}></Route>
          <Route
            path="/login"
            render={() => (
              <Login handleResponseSuccess={this.handleResponseSuccess} />
            )}
          />
          <Route
            exact
            path="/mypage"
            render={() => <Mypage handleLogout={this.handleLogout} />}
          />
          <Route
            path="/"
            render={() => <Home locations={this.state.locations} />}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
