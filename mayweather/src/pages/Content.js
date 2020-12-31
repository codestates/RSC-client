import React from "react";
import Logout from "./Logout";
import "./content.css";

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
      // 지역친구
      locationFriends: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleFindFriend = (data) => {
    axios
      .post(
        "https://mayweather24.com/friends",
        { location: data },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => res.friendNameArr)
      .then((res) => {
        this.setState({
          locationFriends: res,
        });
      });
  };
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
  handleGetUserInfo = () => {
    return axios
      .get("https://mayweather24.com/content", null, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })

      .then((res) => res.json())
      .then((res) => {
        if (res.location.length < 8) {
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
  };
  handleSprinkleWeatherData = () => {
    return axios
      .get("https://mayweather24.com/", null, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) => res.data)
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
          intervalWeather_busan: res.intervalWeather[4].Busan,
        });
      });
  };
  componentDidMount() {
    this.handleSprinkleWeatherData();
    // this.handleGetUserInfo();
  }

  render() {
    return (
      <div>
        {this.state.isModalOpen ? (
          <div className="content0">
            <Logout open={this.state.isModalOpen}></Logout>
          </div>
        ) : (
          <div>
            <div className="listbox">
              <Link className="list" to="./mypage">
                마이페이지가기
              </Link>
              <Link className="list" to="./login">
                로그인페이지가기
              </Link>
              {/* .then(() => this.props.history.push("/login")) */}

              <button className="list" onClick={this.handleOnClick}>
                로그아웃
              </button>
              <Logout open={this.state.isModalOpen}></Logout>
            </div>
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
            </div>

            {/* 날씨 나오는 곳 */}
            <div className="content2">
              <span className="content2_1 weatherfont">
                {/* 1번 도시 날씨 */}
                {this.state.location1 === "seoul" ? (
                  <div>
                    <span>
                      <div className="weathertitle">현재서울날씨</div>
                      <span>
                        <span>
                          <img
                            src={`http://openweathermap.org/img/wn/${this.state.currentWeather_seoul.currentWeatherIcon}@2x.png`}
                          />
                        </span>

                        <span>
                          {"현재온도 : " +
                            this.state.currentWeather_seoul.currentTemp +
                            " ℃"}
                        </span>
                      </span>
                    </span>
                    <div>
                      <span>
                        {/* <div>9am 서울예상날씨</div> */}
                        <span>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_seoul[0].icon}@2x.png`}
                            />
                          </span>

                          <span>
                            오전9시&nbsp; 온도 :&nbsp;
                            {this.state.intervalWeather_seoul[0].temp + " ℃"}
                          </span>
                        </span>
                      </span>
                      <span>
                        {/* <h3>12am 서울예상날씨</h3> */}
                        <span>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_seoul[1].icon}@2x.png`}
                            />
                          </span>
                          <span>
                            오전12시&nbsp; 온도 :&nbsp;
                            {this.state.intervalWeather_seoul[1].temp + " ℃"}
                          </span>
                        </span>
                      </span>
                      <span>
                        {/* <h3>18pm 서울예상날씨</h3> */}
                        <span>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_seoul[2].icon}@2x.png`}
                            />
                          </span>
                          <span>
                            오후18시&nbsp;온도 :&nbsp;
                            {this.state.intervalWeather_seoul[2].temp + " ℃"}
                          </span>
                        </span>
                      </span>
                    </div>
                    <div>
                      <button
                        onClick={this.handleFindFriend(this.state.location1)}
                      >
                        친구찾기
                      </button>
                      {this.state.locationFriends === "" ? (
                        <></>
                      ) : (
                        <div>
                          {this.state.locationFriends[0]}
                          {this.state.locationFriends[1]}
                          {this.state.locationFriends[2]}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {this.state.location1 === "incheon" ? (
                  <div>
                    <span>
                      <div className="weathertitle">현재인천날씨</div>
                      <span>
                        <span>
                          <img
                            src={`http://openweathermap.org/img/wn/${this.state.currentWeather_incheon.currentWeatherIcon}@2x.png`}
                          />
                        </span>

                        <span>
                          {"현재온도 : " +
                            this.state.currentWeather_incheon.currentTemp +
                            " ℃"}
                        </span>
                      </span>
                    </span>
                    <div>
                      <span>
                        {/* <div>9am 서울예상날씨</div> */}
                        <span>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_incheon[0].icon}@2x.png`}
                            />
                          </span>

                          <span>
                            오전9시&nbsp; 온도 :&nbsp;
                            {this.state.intervalWeather_incheon[0].temp + " ℃"}
                          </span>
                        </span>
                      </span>
                      <span>
                        {/* <h3>12am 서울예상날씨</h3> */}
                        <span>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_incheon[1].icon}@2x.png`}
                            />
                          </span>
                          <span>
                            오전12시&nbsp; 온도 :&nbsp;
                            {this.state.intervalWeather_incheon[1].temp + " ℃"}
                          </span>
                        </span>
                      </span>
                      <span>
                        {/* <h3>18pm 서울예상날씨</h3> */}
                        <span>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_incheon[2].icon}@2x.png`}
                            />
                          </span>
                          <span>
                            오후18시&nbsp;온도 :&nbsp;
                            {this.state.intervalWeather_incheon[2].temp + " ℃"}
                          </span>
                        </span>
                      </span>
                    </div>
                    <div>
                      <button
                        onClick={this.handleFindFriend(this.state.location1)}
                      >
                        친구찾기
                      </button>
                      {this.state.locationFriends === "" ? (
                        <></>
                      ) : (
                        <div>
                          {this.state.locationFriends[0]}
                          {this.state.locationFriends[1]}
                          {this.state.locationFriends[2]}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {this.state.location1 === "daegu" ? (
                  <div>
                    <span>
                      <div className="weathertitle">현재대구날씨</div>
                      <span>
                        <span>
                          <img
                            src={`http://openweathermap.org/img/wn/${this.state.currentWeather_daegu.currentWeatherIcon}@2x.png`}
                          />
                        </span>

                        <span>
                          {"현재온도 : " +
                            this.state.currentWeather_daegu.currentTemp +
                            " ℃"}
                        </span>
                      </span>
                    </span>
                    <div>
                      <span>
                        {/* <div>9am 서울예상날씨</div> */}
                        <span>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_daegu[0].icon}@2x.png`}
                            />
                          </span>

                          <span>
                            오전9시&nbsp; 온도 :&nbsp;
                            {this.state.intervalWeather_daegu[0].temp + " ℃"}
                          </span>
                        </span>
                      </span>
                      <span>
                        {/* <h3>12am 서울예상날씨</h3> */}
                        <span>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_daegu[1].icon}@2x.png`}
                            />
                          </span>
                          <span>
                            오전12시&nbsp; 온도 :&nbsp;
                            {this.state.intervalWeather_daegu[1].temp + " ℃"}
                          </span>
                        </span>
                      </span>
                      <span>
                        {/* <h3>18pm 서울예상날씨</h3> */}
                        <span>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_daegu[2].icon}@2x.png`}
                            />
                          </span>
                          <span>
                            오후18시&nbsp;온도 :&nbsp;
                            {this.state.intervalWeather_daegu[2].temp + " ℃"}
                          </span>
                        </span>
                      </span>
                    </div>
                    <div>
                      <button
                        onClick={this.handleFindFriend(this.state.location1)}
                      >
                        친구찾기
                      </button>
                      {this.state.locationFriends === "" ? (
                        <></>
                      ) : (
                        <div>
                          {this.state.locationFriends[0]}
                          {this.state.locationFriends[1]}
                          {this.state.locationFriends[2]}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {this.state.location1 === "gwangju" ? (
                  <div>
                    <span>
                      <div className="weathertitle">현재광주날씨</div>
                      <span>
                        <span>
                          <img
                            src={`http://openweathermap.org/img/wn/${this.state.currentWeather_gwangju.currentWeatherIcon}@2x.png`}
                          />
                        </span>

                        <span>
                          {"현재온도 : " +
                            this.state.currentWeather_gwangju.currentTemp +
                            " ℃"}
                        </span>
                      </span>
                    </span>
                    <div>
                      <span>
                        {/* <div>9am 서울예상날씨</div> */}
                        <span>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_gwangju[0].icon}@2x.png`}
                            />
                          </span>

                          <span>
                            오전9시&nbsp; 온도 :&nbsp;
                            {this.state.intervalWeather_gwangju[0].temp + " ℃"}
                          </span>
                        </span>
                      </span>
                      <span>
                        {/* <h3>12am 서울예상날씨</h3> */}
                        <span>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_gwangju[1].icon}@2x.png`}
                            />
                          </span>
                          <span>
                            오전12시&nbsp; 온도 :&nbsp;
                            {this.state.intervalWeather_gwangju[1].temp + " ℃"}
                          </span>
                        </span>
                      </span>
                      <span>
                        {/* <h3>18pm 서울예상날씨</h3> */}
                        <span>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_gwangju[2].icon}@2x.png`}
                            />
                          </span>
                          <span>
                            오후18시&nbsp;온도 :&nbsp;
                            {this.state.intervalWeather_gwangju[2].temp + " ℃"}
                          </span>
                        </span>
                      </span>
                    </div>
                    <div>
                      <button
                        onClick={this.handleFindFriend(this.state.location1)}
                      >
                        친구찾기
                      </button>
                      {this.state.locationFriends === "" ? (
                        <></>
                      ) : (
                        <div>
                          {this.state.locationFriends[0]}
                          {this.state.locationFriends[1]}
                          {this.state.locationFriends[2]}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {this.state.location1 === "busan" ? (
                  <div>
                    <span>
                      <div className="weathertitle">현재부산날씨</div>
                      <span>
                        <span>
                          <img
                            src={`http://openweathermap.org/img/wn/${this.state.currentWeather_busan.currentWeatherIcon}@2x.png`}
                          />
                        </span>

                        <span>
                          {"현재온도 : " +
                            this.state.currentWeather_busan.currentTemp +
                            " ℃"}
                        </span>
                      </span>
                    </span>
                    <div>
                      <span>
                        {/* <div>9am 서울예상날씨</div> */}
                        <span>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_busan[0].icon}@2x.png`}
                            />
                          </span>

                          <span>
                            오전9시&nbsp; 온도 :&nbsp;
                            {this.state.intervalWeather_busan[0].temp + " ℃"}
                          </span>
                        </span>
                      </span>
                      <span>
                        {/* <h3>12am 서울예상날씨</h3> */}
                        <span>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_busan[1].icon}@2x.png`}
                            />
                          </span>
                          <span>
                            오전12시&nbsp; 온도 :&nbsp;
                            {this.state.intervalWeather_busan[1].temp + " ℃"}
                          </span>
                        </span>
                      </span>
                      <span>
                        {/* <h3>18pm 서울예상날씨</h3> */}
                        <span>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_busan[2].icon}@2x.png`}
                            />
                          </span>
                          <span>
                            오후18시&nbsp;온도 :&nbsp;
                            {this.state.intervalWeather_busan[2].temp + " ℃"}
                          </span>
                        </span>
                      </span>
                    </div>
                    <div>
                      <button
                        onClick={this.handleFindFriend(this.state.location1)}
                      >
                        친구찾기
                      </button>
                      {this.state.locationFriends === "" ? (
                        <></>
                      ) : (
                        <div>
                          {this.state.locationFriends[0]}
                          {this.state.locationFriends[1]}
                          {this.state.locationFriends[2]}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </span>

              <span className="content2_2">
                {/* 2번 도시 날씨 */}
                {this.state.location2 === "seoul" ? (
                  <div>
                    <span>
                      <div className="weathertitle">현재서울날씨</div>
                      <span>
                        <span>
                          <img
                            src={`http://openweathermap.org/img/wn/${this.state.currentWeather_seoul.currentWeatherIcon}@2x.png`}
                          />
                        </span>

                        <span>
                          {"현재온도 : " +
                            this.state.currentWeather_seoul.currentTemp +
                            " ℃"}
                        </span>
                      </span>
                    </span>
                    <div>
                      <span>
                        {/* <div>9am 서울예상날씨</div> */}
                        <span>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_seoul[0].icon}@2x.png`}
                            />
                          </span>

                          <span>
                            오전9시&nbsp; 온도 :&nbsp;
                            {this.state.intervalWeather_seoul[0].temp + " ℃"}
                          </span>
                        </span>
                      </span>
                      <span>
                        {/* <h3>12am 서울예상날씨</h3> */}
                        <span>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_seoul[1].icon}@2x.png`}
                            />
                          </span>
                          <span>
                            오전12시&nbsp; 온도 :&nbsp;
                            {this.state.intervalWeather_seoul[1].temp + " ℃"}
                          </span>
                        </span>
                      </span>
                      <span>
                        {/* <h3>18pm 서울예상날씨</h3> */}
                        <span>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_seoul[2].icon}@2x.png`}
                            />
                          </span>
                          <span>
                            오후18시&nbsp;온도 :&nbsp;
                            {this.state.intervalWeather_seoul[2].temp + " ℃"}
                          </span>
                        </span>
                      </span>
                    </div>
                    <div>
                      <button
                        onClick={this.handleFindFriend(this.state.location2)}
                      >
                        친구찾기
                      </button>
                      {this.state.locationFriends === "" ? (
                        <></>
                      ) : (
                        <div>
                          {this.state.locationFriends[0]}
                          {this.state.locationFriends[1]}
                          {this.state.locationFriends[2]}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {this.state.location2 === "incheon" ? (
                  <div>
                    <span>
                      <div className="weathertitle">현재인천날씨</div>
                      <span>
                        <span>
                          <img
                            src={`http://openweathermap.org/img/wn/${this.state.currentWeather_incheon.currentWeatherIcon}@2x.png`}
                          />
                        </span>

                        <span>
                          {"현재온도 : " +
                            this.state.currentWeather_incheon.currentTemp +
                            " ℃"}
                        </span>
                      </span>
                    </span>
                    <div>
                      <span>
                        {/* <div>9am 서울예상날씨</div> */}
                        <span>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_incheon[0].icon}@2x.png`}
                            />
                          </span>

                          <span>
                            오전9시&nbsp; 온도 :&nbsp;
                            {this.state.intervalWeather_incheon[0].temp + " ℃"}
                          </span>
                        </span>
                      </span>
                      <span>
                        {/* <h3>12am 서울예상날씨</h3> */}
                        <span>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_incheon[1].icon}@2x.png`}
                            />
                          </span>
                          <span>
                            오전12시&nbsp; 온도 :&nbsp;
                            {this.state.intervalWeather_incheon[1].temp + " ℃"}
                          </span>
                        </span>
                      </span>
                      <span>
                        {/* <h3>18pm 서울예상날씨</h3> */}
                        <span>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_incheon[2].icon}@2x.png`}
                            />
                          </span>
                          <span>
                            오후18시&nbsp;온도 :&nbsp;
                            {this.state.intervalWeather_incheon[2].temp + " ℃"}
                          </span>
                        </span>
                      </span>
                    </div>
                    <div>
                      <button
                        onClick={this.handleFindFriend(this.state.location2)}
                      >
                        친구찾기
                      </button>
                      {this.state.locationFriends === "" ? (
                        <></>
                      ) : (
                        <div>
                          {this.state.locationFriends[0]}
                          {this.state.locationFriends[1]}
                          {this.state.locationFriends[2]}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {this.state.location2 === "daegu" ? (
                  <div>
                    <span>
                      <div className="weathertitle">현재대구날씨</div>
                      <span>
                        <span>
                          <img
                            src={`http://openweathermap.org/img/wn/${this.state.currentWeather_daegu.currentWeatherIcon}@2x.png`}
                          />
                        </span>

                        <span>
                          {"현재온도 : " +
                            this.state.currentWeather_daegu.currentTemp +
                            " ℃"}
                        </span>
                      </span>
                    </span>
                    <div>
                      <span>
                        {/* <div>9am 서울예상날씨</div> */}
                        <span>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_daegu[0].icon}@2x.png`}
                            />
                          </span>

                          <span>
                            오전9시&nbsp; 온도 :&nbsp;
                            {this.state.intervalWeather_daegu[0].temp + " ℃"}
                          </span>
                        </span>
                      </span>
                      <span>
                        {/* <h3>12am 서울예상날씨</h3> */}
                        <span>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_daegu[1].icon}@2x.png`}
                            />
                          </span>
                          <span>
                            오전12시&nbsp; 온도 :&nbsp;
                            {this.state.intervalWeather_daegu[1].temp + " ℃"}
                          </span>
                        </span>
                      </span>
                      <span>
                        {/* <h3>18pm 서울예상날씨</h3> */}
                        <span>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_daegu[2].icon}@2x.png`}
                            />
                          </span>
                          <span>
                            오후18시&nbsp;온도 :&nbsp;
                            {this.state.intervalWeather_daegu[2].temp + " ℃"}
                          </span>
                        </span>
                      </span>
                    </div>
                    <div>
                      <button
                        onClick={this.handleFindFriend(this.state.location2)}
                      >
                        친구찾기
                      </button>
                      {this.state.locationFriends === "" ? (
                        <></>
                      ) : (
                        <div>
                          {this.state.locationFriends[0]}
                          {this.state.locationFriends[1]}
                          {this.state.locationFriends[2]}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {this.state.location2 === "gwangju" ? (
                  <div>
                    <span>
                      <div className="weathertitle">현재광주날씨</div>
                      <span>
                        <span>
                          <img
                            src={`http://openweathermap.org/img/wn/${this.state.currentWeather_gwangju.currentWeatherIcon}@2x.png`}
                          />
                        </span>

                        <span>
                          {"현재온도 : " +
                            this.state.currentWeather_gwangju.currentTemp +
                            " ℃"}
                        </span>
                      </span>
                    </span>
                    <div>
                      <span>
                        {/* <div>9am 서울예상날씨</div> */}
                        <span>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_gwangju[0].icon}@2x.png`}
                            />
                          </span>

                          <span>
                            오전9시&nbsp; 온도 :&nbsp;
                            {this.state.intervalWeather_gwangju[0].temp + " ℃"}
                          </span>
                        </span>
                      </span>
                      <span>
                        {/* <h3>12am 서울예상날씨</h3> */}
                        <span>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_gwangju[1].icon}@2x.png`}
                            />
                          </span>
                          <span>
                            오전12시&nbsp; 온도 :&nbsp;
                            {this.state.intervalWeather_gwangju[1].temp + " ℃"}
                          </span>
                        </span>
                      </span>
                      <span>
                        {/* <h3>18pm 서울예상날씨</h3> */}
                        <span>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_gwangju[2].icon}@2x.png`}
                            />
                          </span>
                          <span>
                            오후18시&nbsp;온도 :&nbsp;
                            {this.state.intervalWeather_gwangju[2].temp + " ℃"}
                          </span>
                        </span>
                      </span>
                    </div>
                    <div>
                      <button
                        onClick={this.handleFindFriend(this.state.location2)}
                      >
                        친구찾기
                      </button>
                      {this.state.locationFriends === "" ? (
                        <></>
                      ) : (
                        <div>
                          {this.state.locationFriends[0]}
                          {this.state.locationFriends[1]}
                          {this.state.locationFriends[2]}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {this.state.location2 === "busan" ? (
                  <div>
                    <span>
                      <div className="weathertitle">현재부산날씨</div>
                      <span>
                        <span>
                          <img
                            src={`http://openweathermap.org/img/wn/${this.state.currentWeather_busan.currentWeatherIcon}@2x.png`}
                          />
                        </span>

                        <span>
                          {"현재온도 : " +
                            this.state.currentWeather_busan.currentTemp +
                            " ℃"}
                        </span>
                      </span>
                    </span>
                    <div>
                      <span>
                        {/* <div>9am 서울예상날씨</div> */}
                        <span>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_busan[0].icon}@2x.png`}
                            />
                          </span>

                          <span>
                            오전9시&nbsp; 온도 :&nbsp;
                            {this.state.intervalWeather_busan[0].temp + " ℃"}
                          </span>
                        </span>
                      </span>
                      <span>
                        {/* <h3>12am 서울예상날씨</h3> */}
                        <span>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_busan[1].icon}@2x.png`}
                            />
                          </span>
                          <span>
                            오전12시&nbsp; 온도 :&nbsp;
                            {this.state.intervalWeather_busan[1].temp + " ℃"}
                          </span>
                        </span>
                      </span>
                      <span>
                        {/* <h3>18pm 서울예상날씨</h3> */}
                        <span>
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_busan[2].icon}@2x.png`}
                            />
                          </span>
                          <span>
                            오후18시&nbsp;온도 :&nbsp;
                            {this.state.intervalWeather_busan[2].temp + " ℃"}
                          </span>
                        </span>
                      </span>
                    </div>
                    <div>
                      <button
                        onClick={this.handleFindFriend(this.state.location2)}
                      >
                        친구찾기
                      </button>
                      {this.state.locationFriends === "" ? (
                        <></>
                      ) : (
                        <div>
                          {this.state.locationFriends[0]}
                          {this.state.locationFriends[1]}
                          {this.state.locationFriends[2]}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Content);
