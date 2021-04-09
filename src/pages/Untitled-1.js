{
  /* 날씨 나오는 곳 */
}
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
          <button onClick={this.handleFindFriend(this.state.location1)}>
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
          <button onClick={this.handleFindFriend(this.state.location1)}>
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
                // src={`http://openweathermap.org/img/wn/${this.state.intervalWeather_daegu[0].icon}@2x.png`}
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
          <button onClick={this.handleFindFriend(this.state.location1)}>
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
          <button onClick={this.handleFindFriend(this.state.location1)}>
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
          <button onClick={this.handleFindFriend(this.state.location1)}>
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
          <button onClick={this.handleFindFriend(this.state.location2)}>
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
          <button onClick={this.handleFindFriend(this.state.location2)}>
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
          <button onClick={this.handleFindFriend(this.state.location2)}>
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
          <button onClick={this.handleFindFriend(this.state.location2)}>
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
          <button onClick={this.handleFindFriend(this.state.location2)}>
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
</div>;
