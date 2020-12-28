import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [ //서버 완성되기 전 임시 데이터
        {
          "id": "1",
          "location": "seoul",
          "currentTemp": "-0.1",
          "currentWeatherIcon": "01n"
        },
        {
          "id": "2",
          "location": "incheon",
          "currentTemp": "-0.2",
          "currentWeatherIcon": "02n"
        }
      ],
      // locations: [],
      isLoggedin: false //mypage, login 페이지 상태 (끌어올리기)
    }
  }

  componentDidMount() {
    fetch("https://54.180.36.82:5000/")
      .then(res => {
        return (res.json())
      })
      .then((data) => {
        this.setState({
          locations: data
        });
      })
  }

  /*
  render에는 첫 화면인 /home, /homeComponents/LocationListEntry에 각 location에 대한 정보가 있음
  /home에서 지역(link또는 일반 컴포넌트로 구현)을 클릭했을 때 /login으로 이동(모달로 /home에서 login모달창을 여는 방법 또는 /login페이지로 이동)
  ID, pw로 로그인을 하면, /contents 페이지로 이동.
  /mypage 에는 userinfor가 나오고, 선호지역 변경 기능이 있어야함 */

  render() {
    return (
      <div>
        <Switch>
          {/* // <Route exact path="/Home" render={() => <Home />} /> */}
          <Route path="/login" render={() => <Login />} />
          <Route exact path="/mypage" render={() => <Mypage />} />
          <Route exact path="/signup" render={() => <Signup />} />
          <Route exact path="/" render={() => <Home locations={this.state.locations} />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
