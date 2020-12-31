import React from "react";
import Logout from "./Logout";

import { Link, withRouter } from "react-router-dom";
import axios from "axios";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      userId: "",
      username: "",
      email: "",
      // 도시1
      location1: "",
      // 도시2
      location2: "",
      // 현재날씨
      currentWeather: "",
      // 간격날씨
      intervalWeather: "",
      // 도시별 현재날씨
      currentWeather_seoul: "",
      currentWeather_incheon: "",
      currentWeather_daegu: "",
      currentWeather_gwangju: "",
      currentWeather_busan: "",
      // 도시별 간격날씨
      intervalWeather_seoul: "",
      intervalWeather_incheon: "",
      intervalWeather_daegu: "",
      intervalWeather_gwangju: "",
      intervalWeather_busan: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (key) => (e) => {
    // 도시 상태 바꾸기
    if (
      this.state.location1 !== e.target.value &&
      this.state.location2 !== e.target.value
    ) {
      this.setState({
        [key]: e.target.value,
      });
    } else {
      this.setState({
        [key]: "",
      });
    }
  };
  openModal = () => {
    // 모달창 상태 true 변경하기
    this.setState({ isModalOpen: true });
  };

  handleOnClick = () => {
    // 로그아웃 버튼 누르면 모달창 띄워지고 로그아웃 요청보내기
    this.openModal();
    this.props.handleLogout();
  };

  componentDidMount() {
    axios
      .get("https://54.180.36.82/content", { withCredentials: true })
      .then((res) => res.json())
      .then((res) => {
        if (res.location.length < 6) {
          // 길이 수정 영어길이 생각하여 수정하기
          // 도시가 1개 일때
          this.setState({
            userId: res.userId,
            username: res.username,
            email: res.email,
            location1: res.location,
          });
        } else {
          // 도시가 2개 일때
          // 1번 문자열안에 있는 따옴표 제거하기
          let arr = res.location.split("");
          arr.splice(arr.indexOf(","), 1);
          let newstr = arr.join("");
          let newarr = newstr.split(" ");
          this.setState({
            userId: res.userId,
            username: res.username,
            email: res.email,
            location1: newarr[0],
            location2: newarr[1],
          });
        }
      });

    axios
      .get("mayweather24.com/")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
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
          intervalWeather_busan: res.intervalWeather[3].Busan,
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.isModalOpen ? (
          <div className="content ">
            <Logout open={this.state.isModalOpen}></Logout>
          </div>
        ) : (
            <div className="content1">
              <h1>주요도시 날씨</h1>

              <div>
                1번도시&nbsp;
              <select onChange={this.handleChange("location1")}>
                  <option value="">도시선택</option>
                  <option value="seoul">서울</option>
                  <option value="incheon">인천</option>
                  <option value="daegu">대구</option>
                  <option value="gwangju">광주</option>
                  <option value="busan">부산</option>
                </select>
              </div>
              <div>
                2번도시&nbsp;
              <select onChange={this.handleChange("location2")}>
                  <option value="">도시선택</option>
                  <option value="seoul">서울</option>
                  <option value="incheon">인천</option>
                  <option value="daegu">대구</option>
                  <option value="gwangju">광주</option>
                  <option value="busan">부산</option>
                </select>
              </div>
              <h2>선택한 도시 날씨보기</h2>
              <div>
                {/* 1번 도시 날씨 */}
                {this.state.location1 === "서울" ? (
                  <div>
                    <h3>도시1번 날씨{this.state.currentWeather_seoul}</h3>
                    <button>친구찾기</button>
                  </div>
                ) : (
                    <></>
                  )}
                {this.state.location1 === "인천" ? (
                  <div>
                    <h3>도시1번 날씨{this.state.currentWeather_incheon}</h3>
                    <button>친구찾기</button>
                  </div>
                ) : (
                    <></>
                  )}
                {this.state.location1 === "대구" ? (
                  <div>
                    <h3>도시1번 날씨{this.state.currentWeather_daegu}</h3>
                    <button>친구찾기</button>
                  </div>
                ) : (
                    <></>
                  )}
                {this.state.location1 === "광주" ? (
                  <div>
                    <h3>도시1번 날씨{this.state.currentWeather_gwangju}</h3>
                    <button>친구찾기</button>
                  </div>
                ) : (
                    <></>
                  )}
                {this.state.location1 === "부산" ? (
                  <div>
                    <h3>도시1번 날씨{this.state.currentWeather_busan}</h3>
                    <button>친구찾기</button>
                  </div>
                ) : (
                    <></>
                  )}
              </div>

              <div>
                {/* 2번 도시 날씨 */}
                {this.state.location2 === "서울" ? (
                  <div>
                    <h3>도시2번 날씨{this.state.currentWeather_seoul}</h3>
                    <button>친구찾기</button>
                  </div>
                ) : (
                    <></>
                  )}
                {this.state.location2 === "인천" ? (
                  <div>
                    <h3>도시2번 날씨{this.state.currentWeather_incheon}</h3>
                    <button>친구찾기</button>
                  </div>
                ) : (
                    <></>
                  )}
                {this.state.location2 === "대구" ? (
                  <div>
                    <h3>도시2번 날씨{this.state.currentWeather_daegu}</h3>
                    <button>친구찾기</button>
                  </div>
                ) : (
                    <></>
                  )}
                {this.state.location2 === "광주" ? (
                  <div>
                    <h3>도시2번 날씨{this.state.currentWeather_gwangju}</h3>
                    <button>친구찾기</button>
                  </div>
                ) : (
                    <></>
                  )}
                {this.state.location2 === "부산" ? (
                  <div>
                    <h3>도시1번 날씨{this.state.currentWeather_busan}</h3>
                    <button>친구찾기</button>
                  </div>
                ) : (
                    <></>
                  )}
              </div>

              <div>
                <Link to="./login">로그인페이지가기</Link>
              </div>

              <div>
                <button onClick={this.handleOnClick}>로그아웃</button>
                <Logout open={this.state.isModalOpen}></Logout>
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default withRouter(Content);
