// 소셜 로그인 있는 버전
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

  // ! 소셜 함수
  async getAccessToken(authorizationCode) {
    // 받아온 authorization code로 다시 OAuth App에 요청해서 access token을 받을 수 있습니다.
    // access token은 보안 유지가 필요하기 때문에 클라이언트에서 직접 OAuth App에 요청을 하는 방법은 보안에 취약할 수 있습니다.
    // ! authorization code를 서버로 보내주고 서버에서 access token 요청을 하는 것이 적절합니다.
    // TODO: 서버의 /callback 엔드포인트로 authorization code를 보내주고 access token을 받아옵니다.
    // access token을 받아온 후
    //  - 로그인 상태를 true로 변경하고,
    //  - state에 access token을 저장하세요

    // 1.받아온 authorizationCode를 서버로 보내줌.
    console.log("1.받아온 authorizationCode를 서버로 보내줌.");
    // let resp = await axios.post("http://localhost:8080/callback", {
    //   authorizationCode,
    // });
    // console.log("resp>>>>", resp);
    const getAuthorizationCode = axios.post(
      "https://mayweather24.com/callback",
      {
        authorizationCode,
      }
    );

    if (getAuthorizationCode) {
      this.setState({
        // isLoggedin: true,
        accessToken: getAuthorizationCode.data.accessToken,
      });
      console.log(
        "🚀 ~ file: App.js ~ line 48 ~ App ~ getAccessToken ~ this.state.accessToken",
        this.state.accessToken
      );
    }
    // ! getToken
    let getGithubUserInfo = await axios.get("https://api.github.com/user", {
      headers: {
        authorization: `token ${this.state.accessToken}`, //이게 bearer 그거인가보다.
      },
    });
    console.log(
      "getGithubUserInfo 액세스 토큰으로 가져올 수 있는 데이터는?>>>>",
      getGithubUserInfo
    );
    const { name, login, html_url, public_repos } = getGithubUserInfo.data;

    // ! 미리 state를 안만들고 바로 setState해도 가능! 근데 가독성은 안좋음 왜냐하면 state에 적혀있지 않은게 갑자기 state로 생기니
    this.setState({
      // name,
      githubId: login,
      // html_url,
      // public_repos,
    });
    console.log(
      "🚀 ~ file: App.js ~ line 75 ~ App ~ getAccessToken ~ this.state.githubId",
      this.state.githubId
    );
  }

  // ! 날씨 정보 가져오기 + 소셜
  async componentDidMount() {
    // 날씨 정보 가져옴
    if (!this.state.intervalWeather) {
      const getWeatherData = await axios("https://mayweather24.com");
      // console.log(
      //   "🚀 ~ file: App.js ~ line 36 ~ App ~ componentDidMount ~ getWeatherData",
      //   getWeatherData
      // );

      this.setState({
        intervalWeather: getWeatherData.data.intervalWeather,
        currentWeather: getWeatherData.data.currentWeather,
      });
    }

    // ! 소셜
    const url = new URL(window.location.href); // 현재 페이지의 href (URL) 반환, 현재 주소에 ?code=[authorization code] 있음
    const authorizationCode = url.searchParams.get("code"); // 주소의 쿼리스트링에 있는 값을 가져오기 위해 사용
    console.log("authorizationCode>>>", authorizationCode); // b888545bfbabr 이런식의 영어 숫자 조합  // 주소창에 ?code=b888545bfbabr
    if (authorizationCode) {
      // authorization server로부터 클라이언트로 리디렉션된 경우, authorization code가 함께 전달됩니다.
      // ex) http://localhost:3000/?code=5e52fb85d6a1ed46a51f
      this.getAccessToken(authorizationCode); // -> 16번 라인 실행, componentDidMount라서 라이프사이클 타고 자동 실행
    }
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
