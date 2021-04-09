import React from "react";
import Logout from "./Logout";
import "./content.css";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

/* App.js => props => Content.js
<Content
  userId={userId}
  username={username}
  email={email}
  location1={location1}  // 유저가 선택한 지역
  location2={location2}  // 유저가 선택한 지역
  location1_current_weather={location1_current_weather}
  location2_current_weather={location2_current_weather}
  location1_interval_weather={location1_interval_weather}
  location2_interval_weather={location2_interval_weather}
></Content>;
*/

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      locationFriends: "",
      isClick: false,
    };
  }

  handleTitleOnClick = () => {
    this.props.history.push("/");
  };

  // ! 로그아웃
  handleLogout = async () => {
    // const completedLogout = await axios.post(
    //   "https://mayweather24.com/logout",
    //   null,
    //   {
    //     withCredentials: true,
    //   }
    // );
    // console.log(
    //   "🚀 ~ file: App.js ~ line 24 ~ App ~ handleLogout= ~ completedLogout",
    //   completedLogout
    // );
    this.props.handleClearUserInfo();
    // this.props.history.push("/");
  };

  // ! 친구 찾기 버튼 누를 때 씀. onClick={this.handleFindFriend(this.state.location1)}
  handleFindFriend1 = async () => {
    console.log(
      "🚀 ~ file: Content.js ~ line 95 ~ Content ~ handleFindFriend2= ~ this.props.location1",
      this.props.location1
    );
    const findFriend1 = await axios.post(
      "https://mayweather24.com/friends",
      { location: this.props.location1 },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    console.log(
      "🚀 ~ file: Content.js ~ line 55 ~ Content ~ handleFindFriend1= ~ findFriend1",
      findFriend1
    );
    this.setState({
      friend1: findFriend1.data.friendNameArr[0],
      friend2: findFriend1.data.friendNameArr[1],
      friend3: findFriend1.data.friendNameArr[2],
    });
    console.log("this.state.friend1", this.state.friend1);
  };

  handleFindFriend2 = async () => {
    console.log(
      "🚀 ~ file: Content.js ~ line 95 ~ Content ~ handleFindFriend2= ~ this.props.location2",
      this.props.location2
    );
    const findFriend2 = await axios.post(
      "https://mayweather24.com/friends",
      { location: this.props.location2 },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    console.log(
      "🚀 ~ file: Content.js ~ line 55 ~ Content ~ handleFindFriend2= ~ findFriend2",
      findFriend2
    );
    this.setState({
      friend4: findFriend2.data.friendNameArr[0],
      friend5: findFriend2.data.friendNameArr[1],
      friend6: findFriend2.data.friendNameArr[2],
    });
    console.log("this.state.friend4", this.state.friend4);
  };

  // ! 왜 안돼?
  // handleFindFriend2 = async () => {
  //   const findFriend2 = await axios.post(
  //     "https://mayweather24.com/friends",
  //     { location: this.props.location2 },
  //     {
  //       headers: { "Content-Type": "application/json" },
  //       withCredentials: true,
  //     }
  //   );
  //   console.log(
  //     "🚀 ~ file: Content.js ~ line 67 ~ Content ~ handleFindFriend2= ~ findFriend2",
  //     findFriend2
  //   );
  //   this.setState({
  //     friend4: findFriend2.data.friendNameArr[0],
  //     friend5: findFriend2.data.friendNameArr[1],
  //     friend6: findFriend2.data.friendNameArr[2],
  //   });
  // };

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

  // 모달창 상태 true 변경하기
  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  // 로그아웃 버튼 누르면 모달창 띄워지고 로그아웃 요청보내기
  // handleOnClick = () => {
  //   this.openModal();
  //   this.props.handleLogout();
  // };

  // 햄버거
  handleHamburgerOnClick = () => {
    this.setState({ isClick: !this.state.isClick });
  };

  render() {
    // const { userId, username, email } = this.props;
    // ! 햄버거 클릭에 따라 상태 변경
    const { isClick } = this.state;
    return !this.props.location2_current_weather.location ? (
      // ! 지역 1개만 고른 경우
      <div className="content_js">
        {/* 햄버거 메뉴 */}
        <div className="hamburger" onClick={this.handleHamburgerOnClick}>
          {/* isClick : false 햄버거 안눌렀을 때 */}
          {!isClick ? (
            <div className="burger">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          ) : (
            //  isClick : true 햄버거 눌렀을 때
            <div className="toggle burger">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          )}
        </div>
        {/* 햄버거 끝 */}

        {/* 타이틀 */}
        <div className="content_title">Mayweather</div>

        {!isClick ? (
          <div>
            {/* 지역 1 */}
            <div className="weatherData">
              {/* 위치 아이콘/ 지역명/ 선택 아이콘 */}
              <div className="currentLocation">
                {/* 위치 아이콘 */}
                <img
                  alt="locationIcon"
                  className="locationIcon"
                  src="https://www.weather.go.kr/w/resources/image/btn_map.png"
                ></img>
                {/* 지역명 */}
                <span className="currentLocationName">
                  {this.props.location1_current_weather.location}
                </span>
                {/* 선택 아이콘 */}
                <img
                  alt="choiceIcon"
                  className="choiceIcon"
                  src="https://www.weather.go.kr/w/resources/image/arrow_down.png"
                ></img>
              </div>
              {/* 지역 1의 현재 날씨 박스 */}
              <div className="weatherBox">
                <ul className="currentWeatherUl">
                  {/* 현재 */}
                  <li className="currentLi">현재</li>

                  <li>
                    {/* 아이콘 */}
                    <div>
                      <img
                        alt="weatherIcon"
                        className="currentIconLi"
                        src={`http://openweathermap.org/img/wn/${this.props.location1_current_weather.currentWeatherIcon}@2x.png`}
                      />
                    </div>

                    {/* 온도 */}
                    <div className="currentTempLi">
                      {this.props.location1_current_weather.currentTemp}℃
                    </div>
                  </li>
                </ul>

                {/* 지역 1의 인터벌 날씨 */}
                <ul className="intervalWeatherUl">
                  <li>
                    {/* 날짜 */}
                    <div className="date">
                      {this.props.location1_interval_weather[0].month}
                      {"/"}
                      {this.props.location1_interval_weather[0].date}
                    </div>
                    {/* 시간 및 온도 */}
                    <div className="time">09시</div>
                    <div className="temp">
                      {this.props.location1_interval_weather[0].temp}℃
                    </div>
                  </li>
                  <li>
                    {/* 날짜 */}
                    <div className="date">
                      {this.props.location1_interval_weather[1].month}
                      {"/"}
                      {this.props.location1_interval_weather[1].date}
                    </div>
                    {/* 시간 및 온도 */}
                    <div className="time">12시</div>
                    <div className="temp">
                      {this.props.location1_interval_weather[1].temp}℃
                    </div>
                  </li>
                  <li>
                    {/* 날짜 */}
                    <div className="date">
                      {this.props.location1_interval_weather[2].month}
                      {"/"}
                      {this.props.location1_interval_weather[2].date}
                    </div>
                    {/* 시간 및 온도 */}
                    <div className="time">18시</div>
                    <div className="temp">
                      {this.props.location1_interval_weather[2].temp}℃
                    </div>
                  </li>
                </ul>
                {/* 친구 찾기 */}
                <ul className="findFriendsUl">
                  {/* 친구 찾기 버튼 */}
                  <li>
                    <button
                      className="findFriends"
                      onClick={this.handleFindFriend1}
                    >
                      친구 찾기
                    </button>
                    {/* 친구 있을 시  */}
                    <div className="friends">{this.state.friend1}</div>
                    <div className="friends">{this.state.friend2}</div>
                    <div className="friends">{this.state.friend3}</div>
                  </li>
                </ul>
              </div>
            </div>
            {/* 로그아웃 버튼 */}
            {/* <button className="logoutBtn" onClick={this.handleLogout}>
          로그아웃
        </button> */}
          </div>
        ) : (
          // 지역 1개 고른 사람 친구없음
          <div>
            <ul className="hamburgerbar_menu_active">
              <li className="Link_li">
                <Link
                  className="Link"
                  to="/"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  Home
                </Link>
              </li>
              <li className="Link_li">
                <Link
                  className="Link"
                  to="/mypage"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  mypage
                </Link>
              </li>
              <li
                className="Link_li"
                onClick={this.handleLogout}
                // onClick={this.props.handleClearUserInfo}
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                logout
              </li>
            </ul>
          </div>
        )}
      </div>
    ) : (
      // ! 지역 2개 고른 경우
      <div className="content_js">
        {/* 햄버거 메뉴 */}
        <div className="hamburger" onClick={this.handleHamburgerOnClick}>
          {/* isClick : false 햄버거 안눌렀을 때 */}
          {!isClick ? (
            <div className="burger">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          ) : (
            //  isClick : true 햄버거 눌렀을 때
            <div className="toggle burger">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          )}
        </div>
        {/* 햄버거 끝 */}

        {/* 타이틀 */}
        <div className="content_title">Mayweather</div>

        {/* 일반 코드 시작 */}
        <div>
          {!isClick ? (
            <div>
              <div className="weatherData">
                {/* 위치 아이콘/ 지역명/ 선택 아이콘 */}
                <div className="currentLocation">
                  {/* 위치 아이콘 */}
                  <img
                    alt="locationIcon"
                    className="locationIcon"
                    src="https://www.weather.go.kr/w/resources/image/btn_map.png"
                  ></img>
                  {/* 지역명 */}
                  <span className="currentLocationName">
                    {this.props.location1_current_weather.location}
                  </span>
                  {/* 선택 아이콘 */}
                  <img
                    alt="choiceIcon"
                    className="choiceIcon"
                    src="https://www.weather.go.kr/w/resources/image/arrow_down.png"
                  ></img>
                </div>
                {/* 지역 1의 현재 날씨 박스 */}
                <div className="weatherBox">
                  <ul className="currentWeatherUl">
                    {/* 현재 */}
                    <li className="currentLi">현재</li>

                    <li>
                      {/* 아이콘 */}
                      <div>
                        <img
                          alt="weatherIcon"
                          className="currentIconLi"
                          src={`http://openweathermap.org/img/wn/${this.props.location1_current_weather.currentWeatherIcon}@2x.png`}
                        />
                      </div>

                      {/* 온도 */}
                      <div className="currentTempLi">
                        {this.props.location1_current_weather.currentTemp}℃
                      </div>
                    </li>
                  </ul>

                  {/* 지역 1의 인터벌 날씨 */}
                  <ul className="intervalWeatherUl">
                    <li>
                      {/* 날짜 */}
                      <div className="date">
                        {this.props.location1_interval_weather[0].month}
                        {"/"}
                        {this.props.location1_interval_weather[0].date}
                      </div>
                      {/* 시간 및 온도 */}
                      <div className="time">09시</div>
                      <div className="temp">
                        {this.props.location1_interval_weather[0].temp}℃
                      </div>
                    </li>
                    <li>
                      {/* 날짜 */}
                      <div className="date">
                        {this.props.location1_interval_weather[1].month}
                        {"/"}
                        {this.props.location1_interval_weather[1].date}
                      </div>
                      {/* 시간 및 온도 */}
                      <div className="time">12시</div>
                      <div className="temp">
                        {this.props.location1_interval_weather[1].temp}℃
                      </div>
                    </li>
                    <li>
                      {/* 날짜 */}
                      <div className="date">
                        {this.props.location1_interval_weather[2].month}
                        {"/"}
                        {this.props.location1_interval_weather[2].date}
                      </div>
                      {/* 시간 및 온도 */}
                      <div className="time">18시</div>
                      <div className="temp">
                        {this.props.location1_interval_weather[2].temp}℃
                      </div>
                    </li>
                  </ul>
                  {/* 친구 찾기 */}
                  <ul className="findFriendsUl">
                    {/* 친구 찾기 버튼 */}
                    <li>
                      <button
                        className="findFriends"
                        onClick={this.handleFindFriend1}
                      >
                        친구 찾기
                      </button>
                      {/* 친구 있을 시 */}
                      <div className="friends">{this.state.friend1}</div>
                      <div className="friends">{this.state.friend2}</div>
                      <div className="friends">{this.state.friend3}</div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="weatherData">
                {/* 위치 아이콘/ 지역명/ 선택 아이콘 */}
                <div className="currentLocation">
                  {/* 위치 아이콘 */}
                  <img
                    alt="locationIcon"
                    className="locationIcon"
                    src="https://www.weather.go.kr/w/resources/image/btn_map.png"
                  ></img>
                  {/* 지역명 */}
                  <span className="currentLocationName">
                    {this.props.location2_current_weather.location}
                  </span>
                  {/* 선택 아이콘 */}
                  <img
                    alt="choiceIcon"
                    className="choiceIcon"
                    src="https://www.weather.go.kr/w/resources/image/arrow_down.png"
                  ></img>
                </div>
                {/* 지역 2의 현재 날씨 박스 */}
                <div className="weatherBox">
                  <ul className="currentWeatherUl">
                    {/* 현재 */}
                    <li className="currentLi">현재</li>

                    <li>
                      {/* 아이콘 */}
                      <div>
                        <img
                          alt="weatherIcon"
                          className="currentIconLi"
                          src={`http://openweathermap.org/img/wn/${this.props.location2_current_weather.currentWeatherIcon}@2x.png`}
                        />
                      </div>

                      {/* 온도 */}
                      <div className="currentTempLi">
                        {this.props.location2_current_weather.currentTemp}℃
                      </div>
                    </li>
                  </ul>

                  {/* 지역 2의 인터벌 날씨 */}
                  <ul className="intervalWeatherUl">
                    <li>
                      {/* 날짜 */}
                      <div className="date">
                        {this.props.location2_interval_weather[0].month}
                        {"/"}
                        {this.props.location2_interval_weather[0].date}
                      </div>
                      {/* 시간 및 온도 */}
                      <div className="time">09시</div>
                      <div className="temp">
                        {this.props.location2_interval_weather[0].temp}℃
                      </div>
                    </li>
                    <li>
                      {/* 날짜 */}
                      <div className="date">
                        {this.props.location2_interval_weather[1].month}
                        {"/"}
                        {this.props.location2_interval_weather[1].date}
                      </div>
                      {/* 시간 및 온도 */}
                      <div className="time">12시</div>
                      <div className="temp">
                        {this.props.location2_interval_weather[1].temp}℃
                      </div>
                    </li>
                    <li>
                      {/* 날짜 */}
                      <div className="date">
                        {this.props.location2_interval_weather[2].month}
                        {"/"}
                        {this.props.location2_interval_weather[2].date}
                      </div>
                      {/* 시간 및 온도 */}
                      <div className="time">18시</div>
                      <div className="temp">
                        {this.props.location2_interval_weather[2].temp}℃
                      </div>
                    </li>
                  </ul>
                  {/* 친구 찾기 */}
                  <ul className="findFriendsUl">
                    {/* 친구 찾기 버튼 */}
                    <li>
                      <button
                        className="findFriends"
                        onClick={this.handleFindFriend2}
                      >
                        친구 찾기
                      </button>
                      {/* 친구 있을 시  */}
                      <div className="friends">{this.state.friend4}</div>
                      <div className="friends">{this.state.friend5}</div>
                      <div className="friends">{this.state.friend6}</div>
                    </li>
                  </ul>
                </div>
              </div>
              ;
            </div>
          ) : (
            // 지역 2개 고른 사람 친구없음
            <div>
              <ul className="hamburgerbar_menu_active">
                <li className="Link_li">
                  <Link
                    className="Link"
                    to="/"
                    style={{ textDecoration: "none", color: "#ffffff" }}
                  >
                    Home
                  </Link>
                </li>
                <li className="Link_li">
                  <Link
                    className="Link"
                    to="/mypage"
                    style={{ textDecoration: "none", color: "#ffffff" }}
                  >
                    mypage
                  </Link>
                </li>
                <li
                  className="Link_li"
                  onClick={this.handleLogout}
                  // onClick={this.props.handleClearUserInfo}
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Content);
