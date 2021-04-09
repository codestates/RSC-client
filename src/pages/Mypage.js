import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import Logout from "./Logout";
import "../App.css";

/*
1. location변경 버튼 클릭시 모달창으로 열리면서
2. 화면에선택한 지역을 변경,
3. 기존 지역과 변경된 지역 값을 보냄
*/

// function MyLocation({ value, handle })

class Mypage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      userId: "",
      email: "",
      location1: "",
      location2: "",
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  // handleLogoutOnClick = () => {
  //   this.openModal();
  //   this.props.handleLogout();
  // };

  // handleHomeOnClick = () => {
  //   window.location.assign("http://localhost:3000");
  // };

  render() {
    return (
      <div>
        <nav>
          <ul className="mypage_navbar">
            <li className="mypage_tohome">
              <Link
                className="Link"
                to="/"
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                Home
              </Link>
              {/* <button className="Link" onClick={this.handleHomeOnClick}>
                home
              </button> */}
            </li>
            <li className="mypage_logout">
              <button onClick={this.props.handleClearUserInfo}>Logout</button>
              <Logout open={this.state.isModalOpen}></Logout>
            </li>
          </ul>
        </nav>

        <center>
          <h1>Mypage</h1>
          <br />

          {this.state.isModalOpen ? (
            <div>
              <Logout open={this.state.isModalOpen}></Logout>
            </div>
          ) : (
            <></>
          )}
          {/* 지역 1개만 고른 유저일 때 */}
          {!this.props.location2 ? (
            <div className="mypage_userinfo">
              <div>ID {this.props.userId}</div>
              <div>사용자명 {this.props.username}</div>
              <div>이메일 {this.props.email}</div>
              <span>내가 선택한 지역 1 {this.props.location1}</span>
              {/* 셀렉트 버튼 */}
              <select
                name="location"
                defaultValue={"DEFAULT"}
                onChange={this.props.handleChangeLocation1}
              >
                <option value="DEFAULT" disabled>
                  Select Location...
                </option>

                <option value="seoul">Seoul</option>
                <option value="incheon">Incheon</option>
                <option value="daegu">Daegu</option>
                <option value="gwangju">Gwangju</option>
                <option value="busan">Busan</option>
              </select>
              <br></br>
              <span>지역 추가하기</span>
              {/* 셀렉트 버튼 */}
              <select
                name="location"
                defaultValue={"DEFAULT"}
                // ! 서버에서 지역 추가하는 기능 만들어줘야함. ex) post /addlocation : req.body에는 마이페이지와 비슷 userId,location만 (프레브빼고)
                // ! App.js에서 axios.post('~/addlocation',{userId, location},{크레덴셜}) 보내주고 받은 값으로 setState
                onChange={this.props.handleAddLocation}
              >
                <option value="DEFAULT" disabled>
                  Select Location...
                </option>

                <option value="seoul">Seoul</option>
                <option value="incheon">Incheon</option>
                <option value="daegu">Daegu</option>
                <option value="gwangju">Gwangju</option>
                <option value="busan">Busan</option>
              </select>
            </div>
          ) : (
            // 지역 2개 고른 유저일 때
            <div className="mypage_userinfo">
              <div>ID {this.props.userId}</div>
              <div>사용자명 {this.props.username}</div>
              <div>이메일 {this.props.email}</div>
              <span>내가 선택한 지역 1 {this.props.location1}</span>
              <select
                name="location"
                defaultValue={"DEFAULT"}
                onChange={this.props.handleChangeLocation1}
              >
                <option value="DEFAULT" disabled>
                  Select Location...
                </option>

                <option value="seoul">Seoul</option>
                <option value="incheon">Incheon</option>
                <option value="daegu">Daegu</option>
                <option value="gwangju">Gwangju</option>
                <option value="busan">Busan</option>
              </select>
              {/* {!this.props.isSameLocation1 ? (
                <div></div>
              ) : (
                <div>{this.props.isSameLocation1}</div>
              )} */}{" "}
              <br></br>
              <span>내가 선택한 지역 2 {this.props.location2}</span>
              <select
                name="location"
                defaultValue={"DEFAULT"}
                onChange={this.props.handleChangeLocation2}
              >
                <option value="DEFAULT" disabled>
                  Select Location...
                </option>

                <option value="seoul">Seoul</option>
                <option value="incheon">Incheon</option>
                <option value="daegu">Daegu</option>
                <option value="gwangju">Gwangju</option>
                <option value="busan">Busan</option>
              </select>
              {/* {!this.props.isSameLocation2 ? (
                <div></div>
              ) : (
                <div>{this.props.isSameLocation2}</div>
              )} */}
            </div>
          )}
        </center>
      </div>
    );
  }
}

export default Mypage;
