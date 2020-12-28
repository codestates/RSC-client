import React from "react";
// import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import "./modal.css";

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: this.props.open,
    };
  }

  render() {
    return (
      <div
        className="modal"
        style={{ display: this.props.open ? "block" : "none" }}
      >
        {this.props.open ? (
          <div>
            <h1>로그아웃 되었습니다</h1>
            <div>
              <Link to="./">홈으로 가기</Link>
            </div>
            {/* <button>확인</button>
            <button>아니요</button> */}
          </div>
        ) : null}
      </div>
    );
  }
}

export default withRouter(Logout);
