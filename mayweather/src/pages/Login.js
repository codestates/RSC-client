// import React from "react";
// import { Link, withRouter } from "react-router-dom";

// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h2>로그인</h2>
//       </div>
//     );
//   }
// }

// export default withRouter(Login);
import React from "react";
import { Link, withRouter } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <div>
        <h2>로그인</h2>
        <Link to="/signup">회원가입</Link>
      </div>
    );
  }
}

export default withRouter(Login);
