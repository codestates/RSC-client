import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import Content from "./pages/Content";
import Mypage from "./pages/Mypage";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: "1",
      isLoggedin: false,
      locations: [
        //서버 완성되기 전 임시 데이터
        {
          id: "1",
          location: "seoul",
          currentTemp: "-0.1",
          currentWeatherIcon: "01n",
        },
        {
          id: "2",
          location: "incheon",
          currentTemp: "-0.2",
          currentWeatherIcon: "02n",
        },
      ],
      // locations: [],
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleResponseSuccess = this.handleResponseSuccess.bind(this);
  }
  handleLogout() {
    axios
      .post("https://localhost:443/logout", null, { withCredentials: true })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
          <Route exact path="/mypage" render={() => <Mypage />} />
          <Route
            exact
            path="/"
            render={() => <Home locations={this.state.locations} />}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
