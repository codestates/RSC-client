import React from "react";
import { Link, withRouter } from "react-router-dom";
function Mypage() {
  return (
    <div>
      <h1>Mypage</h1>
      <Link to="./content">주요도시날씨보기</Link>
    </div>
  );
}

export default Mypage;
