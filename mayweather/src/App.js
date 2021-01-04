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
      loca_App: "",
      abc: "",
      abc_1: "",
      abc_2: "",

      currentWeather: "",
      intervalWeather: "",
      currentWeather_seoul: "",
      currentWeather_incheon: "",
      currentWeather_daegu: "",
      currentWeather_gwangju: "",
      currentWeather_busan: "",
      intervalWeather_seoul: "",
      intervalWeather_incheon: "",
      intervalWeather_daegu: "",
      intervalWeather_gwangju: "",
      intervalWeather_busan: "",
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleResponseSuccess = this.handleResponseSuccess.bind(this);
    this.handle_a = this.handle_a.bind(this);
  }
  handle_a(e) {
    this.setState({
      loca_App: e,
    });
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

    axios
      .get("https://mayweather24.com/", null, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) => res.data)
      .then((res) => {
        this.setState({
          abc: res.intervalWeather[0].Seoul,
          abc_1: res.intervalWeather[0].Seoul[0].temp,
          abc_2: res.intervalWeather[0].Seoul[0].id,

          currentWeather: res.currentWeather,
          intervalWeather: res.intervalWeather,
          currentWeather_seoul: res.currentWeather[0],
          currentWeather_incheon: res.currentWeather[1],
          currentWeather_daegu: res.currentWeather[2],
          currentWeather_gwangju: res.currentWeather[3],
          currentWeather_busan: res.currentWeather[4],
          intervalWeather_seoul: res.intervalWeather[0].Seoul,
          intervalWeather_incheon: res.intervalWeather[1].Incheon,
          intervalWeather_daegu: res.intervalWeather[2].Daegu,
          intervalWeather_gwangju: res.intervalWeather[3].Gwangju,
          intervalWeather_busan: res.intervalWeather[4].Busan,
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
            render={() => (
              <Content
                handleLogout={this.handleLogout}
                loca={this.state.loca_App}
                abc={this.state.abc}
                abc_1={this.state.abc_1}
                abc_2={this.state.abc_2}
                currentWeather={this.state.currentWeather}
                currentWeather_busan={this.state.currentWeather_busan}
                currentWeather_daegu={this.state.currentWeather_daegu}
                currentWeather_gwangju={this.state.currentWeather_gwangju}
                currentWeather_incheon={this.state.currentWeather_incheon}
                currentWeather_seoul={this.state.currentWeather_seoul}
                intervalWeather={this.intervalWeather}
                intervalWeather_busan={this.state.intervalWeather_busan}
                intervalWeather_daegu={this.state.intervalWeather_daegu}
                intervalWeather_gwangju={this.state.intervalWeather_gwangju}
                intervalWeather_incheon={this.state.intervalWeather_incheon}
                intervalWeather_seoul={this.state.intervalWeather_seoul}
              ></Content>
            )}
          ></Route>
          <Route exact path="/logout" render={() => <Logout></Logout>}></Route>
          <Route
            path="/login"
            render={() => (
              <Login
                handleResponseSuccess={this.handleResponseSuccess}
                handle_a={this.handle_a}
              />
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
