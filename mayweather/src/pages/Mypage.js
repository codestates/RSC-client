import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import userimg from "../userimg.jpg";
import "../App.css";

class Mypage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      userId: "",
      email: "",
      location1: "",
      location2: "",
      newlocation1: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleLogoutOnClick = () => {
    this.openModal();
    this.props.handleLogout();
  };

  handleChange = (key) => (e) => {
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

  handleMyLocationOnClick1 = () => {
    axios
      .post(
        "https://mayweather24.com/mypage",
        {
          userId: this.state.userId,
          prevLocation: this.state.location1,
          location: this.state.newlocation1,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => console.log("post mypage >>>", res));
    this.setState({
      location1: this.state.newlocation1,
      newlocation1: "",
    });
  };

  handleGetUserInfo = async () => {
    const getUserInfo = await axios("https://mayweather24.com/content", {
      withCredentials: true,
    });
    if (!getUserInfo.data.location.includes(",")) {
      this.setState({
        userId: getUserInfo.data.userId,
        username: getUserInfo.data.username,
        email: getUserInfo.data.email,
        location1: getUserInfo.data.location,
      });
    } else {
      const locationArr = getUserInfo.data.location.split(",");
      this.setState({
        userId: getUserInfo.data.userId,
        username: getUserInfo.data.username,
        email: getUserInfo.data.email,
        location1: locationArr[0],
        location2: locationArr[1],
      });
    }
  };

  componentDidMount() {
    axios
      .get("https://mayweather24.com/content", null, { withCredentials: true })
      .then((res) => console.log(res))
      .then((res) => res.data)
      .then((data) => {
        // console.log("***mypage data >>>>", data);
        // if ()
        this.setState({
          userId: data.userId,
          username: data.username,
          email: data.email,
          location1: data.location, //지역1만 어떻게 받아지는지 확인 후 지역2 추가!
        });
      });
    this.handleGetUserInfo();
  }

  render() {
    return (
      <div>
        <nav>
          <ul className="mypage_navbar">
            <li>MayWeather24</li>
            <li className="mypage_tohome">
              <Link to="./" className="home">
                Home
              </Link>
            </li>
            <li>
              <Link to="./content">Content</Link>
            </li>
            <li className="mypage_logout">
              <button onClick={this.handleLogoutOnClick}>Logout</button>
              <Logout open={this.state.isModalOpen}></Logout>
            </li>
          </ul>
        </nav>

        <div className="mypage">
          <center>
            <h1>Mypage</h1>
            <br />
            {/* </center> */}
            {this.state.isModalOpen ? (
              <div>
                <Logout open={this.state.isModalOpen}></Logout>
              </div>
            ) : (
              <></>
            )}
            <div className="mypage_userinfobox">
              <img src={userimg} alt="Userimg" className="userimg" />
              <div className="mypage_userinfo">
                <dl className="userinfo_content">
                  <dt>사용자 ID</dt>
                  <dd>{this.state.userId}</dd>
                  <dt>사용자명</dt>
                  <dd>{this.state.username}</dd>
                  <dt>사용자 이메일</dt>
                  <dd>{this.state.email}</dd>
                  <dt>선택지역 1</dt>
                  <dd>{this.state.location1}</dd>
                  <div>
                    <select onChange={this.handleChange("newlocation1")}>
                      <option value="">도시선택</option>
                      <option value="seoul">서울</option>
                      <option value="incheon">인천</option>
                      <option value="daegu">대구</option>
                      <option value="gwangju">광주</option>
                      <option value="busan">부산</option>
                    </select>
                  </div>
                  <button onClick={this.handleMyLocationOnClick1}>변경</button>
                  <br />
                  <dt>선택지역 2</dt>
                  <dd>
                    {this.state.location2 ? (
                      <div>{this.state.location2}</div>
                    ) : (
                      <div>선택한 지역이 없습니다.</div>
                    )}
                  </dd>
                  <button
                    onClick={() => {
                      alert("현재는 내가 선택한 지역1만 변경가능합니다.");
                    }}
                  >
                    변경
                  </button>
                </dl>
              </div>
            </div>
          </center>
        </div>
      </div>
    );
  }
}

export default Mypage;
