// App.js 붙여넣기 하면 됨.
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
      isLoggedin: false,
    };
  }

  // ! 로그아웃 시 상태 값 지워주기
  handleClearUserInfo = async () => {
    const completedLogout = await axios.post(
      "https://mayweather24.com/logout",
      null,
      {
        withCredentials: true,
      }
    );
    console.log(
      "🚀 ~ file: App.js ~ line 24 ~ App ~ handleLogout= ~ completedLogout",
      completedLogout
    );

    console.log("handleClearUserInfo시작");
    console.log("userId!", this.state.userId);
    this.setState({
      userId: null,
      username: null,
      email: null,
      location1: null,
      location2: null,
    });
    console.log("userId?", this.state.userId);
    this.props.history.push("/");
  };

  // ! 날씨 정보 가져오기
  async componentDidMount() {
    // 날씨 정보 가져옴
    const getWeatherData = await axios("https://mayweather24.com");
    // console.log(
    //   "🚀 ~ file: App.js ~ line 36 ~ App ~ componentDidMount ~ getWeatherData",
    //   getWeatherData
    // );

    this.setState({
      intervalWeather: getWeatherData.data.intervalWeather,
      currentWeather: getWeatherData.data.currentWeather,
    });

    // console.log("this.state.currentWeather", this.state.currentWeather);
    // console.log("this.state.intervalWeather", this.state.intervalWeather);
  }

  // ! 로그인 시 유저 컨텐트 가져오기, state에 location1,2 만들어줌
  handleContent = async () => {
    const getContent = await axios("https://mayweather24.com/content", {
      withCredentials: true,
    });
    // console.log(
    //   "🚀 ~ file: App.js ~ line 54 ~ App ~ componentDidMount ~ getContent",
    //   getContent
    // );

    // 도시 1개 일 때
    if (!getContent.data.location.includes(",")) {
      this.setState({
        userId: getContent.data.userId,
        username: getContent.data.username,
        email: getContent.data.email,
        location1: getContent.data.location,
      });
      console.log("handleContent 끝");
    } // 도시가 2개 일때
    else {
      const locationArr = getContent.data.location.split(","); // ["seoul", "daegu"]
      this.setState({
        userId: getContent.data.userId,
        username: getContent.data.username,
        email: getContent.data.email,
        location1: locationArr[0],
        location2: locationArr[1],
      });
      console.log("handleContent 끝");
    }
    // ?????합체
    // };

    //! 유저가 고른 지역의 날씨만 상태 만들어서 내려줌, 위에서 location1,2 만든 거 사용
    // ????? handleUserContent = () => {
    //!
    // this.state.location 첫 글자 대문자 만들기, 인터벌 날씨 찾기 위함
    let first = "";
    let rest = "";
    let upperCase = "";
    let result1 = "";
    let result2 = "";

    console.log(
      "🚀 ~ file: App.js ~ line 79 ~ App ~ this.state.location1",
      this.state.location1 // ? 이게 console.log('handleContent 끝') 보다 빠름. 왜?
    );
    // 지역 1개일 때
    if (!this.state.location2 && this.state.location1) {
      first = this.state.location1.charAt(0);
      rest = this.state.location1.slice(1);
      upperCase = first.toUpperCase();
      result1 = upperCase + rest;
    }
    // 지역 2개일 때
    else if (this.state.location1 && this.state.location2) {
      first = this.state.location1.charAt(0);
      rest = this.state.location1.slice(1);
      upperCase = first.toUpperCase();
      result1 = upperCase + rest;

      first = this.state.location2.charAt(0);
      rest = this.state.location2.slice(1);
      upperCase = first.toUpperCase();
      result2 = upperCase + rest;
    }

    // 인터벌 날씨
    for (let i = 0; i < this.state.intervalWeather.length; i++) {
      // 지역 1개일 떄
      if (!result2 && this.state.intervalWeather[i][result1]) {
        this.setState({
          location1_interval_weather: this.state.intervalWeather[i][result1],
        });
      } // 지역 2개일 때
      else if (result2 && this.state.intervalWeather[i][result1]) {
        this.setState({
          location1_interval_weather: this.state.intervalWeather[i][result1],
        });
      }
      if (result2 && this.state.intervalWeather[i][result2]) {
        this.setState({
          location2_interval_weather: this.state.intervalWeather[i][result2],
        });
      }
    }
    console.log(
      "🚀 ~ file: App.js ~ line 124 ~ App ~ location1_interval_weather",
      this.state.location1_interval_weather
    );
    console.log(
      "🚀 ~ file: App.js ~ line 125 ~ App ~ location1_interval_weather",
      this.state.location2_interval_weather
    );

    //!

    let currentWeather1 = "";
    let currentWeather2 = "";

    // 현재 날씨
    for (let i = 0; i < this.state.currentWeather.length; i++) {
      // 지역 1개만 고른 경우
      if (
        !this.state.location2 &&
        this.state.currentWeather[i].location === this.state.location1
      ) {
        currentWeather1 = this.state.currentWeather[i];
        // this.props.history.push("/content");
      } // 지역 2개 고른 경우, 지역 1 담기
      if (
        this.state.location2 &&
        this.state.currentWeather[i].location === this.state.location1
      ) {
        currentWeather1 = this.state.currentWeather[i];
      }
      // 지역 2개 고른 경우, 지역 2 담기
      if (
        this.state.location2 &&
        this.state.currentWeather[i].location === this.state.location2
      ) {
        currentWeather2 = this.state.currentWeather[i];
        // this.props.history.push("/content"); // ? 어떻게 셋스테이트 위에 있는데 상태가 바뀌었을까?
      }
    }
    this.setState({
      location1_current_weather: currentWeather1,
      location2_current_weather: currentWeather2,
    });

    this.props.history.push("/content");
  };

  // 로그인 시 실행
  handleResponseSuccess = () => {
    this.handleContent();
    // this.handleUserContent(); // 합침
  };
  // ! 마이페이지 지역 변경1
  handleChangeLocation1 = (e) => {
    this.setState({
      location1: e.target.value,
    });
  };
  // ! 마이페이지 지역 변경2
  handleChangeLocation2 = async (e) => {
    // this.setState({
    //   location2: e.target.value,
    // });
    const changedLocation = await axios.post(
      "https://mayweather24.com/mypage",
      {
        userId: this.state.userId,
        prevLocation: this.state.location2,
        location: e.target.value,
      }
    );
    console.log(
      "🚀 ~ file: App.js ~ line 222 ~ App ~ handleChangeLocation2= ~ changedLocation",
      changedLocation
    );
    this.setState({
      location2: changedLocation.data.location,
    });
    console.log(
      "🚀 ~ file: App.js ~ line 229 ~ App ~ handleChangeLocation2= ~ this.state.location2",
      this.state.location2
    );
  };

  render() {
    const {
      currentWeather,
      // intervalWeather,
      userId,
      username,
      email,
      location1,
      location2,
      location1_current_weather,
      location2_current_weather,
      location1_interval_weather,
      location2_interval_weather,
    } = this.state;
    return currentWeather ? (
      <div>
        <Switch>
          {/* 회원가입 */}
          <Route exact path="/signup" render={() => <Signup />} />
          {/* 컨텐트 */}
          <Route
            exact
            path="/content"
            render={() => (
              <Content
                // intervalWeather={intervalWeather}
                // currentWeather={currentWeather}
                userId={userId}
                username={username}
                email={email}
                location1={location1}
                location2={location2}
                location1_current_weather={location1_current_weather}
                location2_current_weather={location2_current_weather}
                location1_interval_weather={location1_interval_weather}
                location2_interval_weather={location2_interval_weather}
                handleClearUserInfo={this.handleClearUserInfo}
              ></Content>
            )}
          ></Route>
          {/* 로그아웃 */}
          <Route exact path="/logout" render={() => <Logout></Logout>}></Route>
          {/* 로그인 */}
          <Route
            path="/login"
            render={() => (
              <Login handleResponseSuccess={this.handleResponseSuccess} />
            )}
          />
          {/* 마이페이지 */}
          <Route
            exact
            path="/mypage"
            render={() => (
              <Mypage
                handleChangeLocation1={this.handleChangeLocation1}
                handleChangeLocation2={this.handleChangeLocation2}
                handleClearUserInfo={this.handleClearUserInfo}
                userId={userId}
                username={username}
                email={email}
                location1={location1}
                location2={location2}
              />
            )}
          />
          {/* 홈 */}
          <Route
            path="/"
            render={() => (
              <Home currentWeather={currentWeather} username={username} />
            )}
          />
        </Switch>
      </div>
    ) : (
      <div>loading...</div>
    );
  }
}

export default withRouter(App);
