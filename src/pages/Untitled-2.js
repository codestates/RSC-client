{
  /* 유저 정보 */
}
{
  /* <div>
          유저
          {userId},{username},{email}
        </div> */
}
{
  /* 지역 1 */
}
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
        <button className="findFriends" onClick={this.handleFindFriend1}>
          친구 찾기
        </button>
        {/* 친구 있을 시 */}
        <div className="friends">{this.state.friend1}</div>
        <div className="friends">{this.state.friend2}</div>
        <div className="friends">{this.state.friend3}</div>
      </li>
    </ul>
  </div>
</div>;
{
  /* 지역 2 */
}
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
        <button className="findFriends" onClick={this.handleFindFriend2}>
          친구 찾기
        </button>

        {/* 친구 있을 시  */}
        <div className="friends">{this.state.friend4}</div>

        <div className="friends">{this.state.friend5}</div>

        <div className="friends">{this.state.friend6}</div>
      </li>
    </ul>
  </div>
</div>;
