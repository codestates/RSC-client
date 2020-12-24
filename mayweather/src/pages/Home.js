// import React from "react";

// function Home() {
//     return (
//         <div>
//             <h1>Welcome to MayWeather Service</h1>

//         </div>
//     )
// }

// export default Home;

import React from "react";
import { Link, withRouter } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>Welcome to MayWeather Service</h1>
      <Link to="/login">로그인 하러 가기</Link>
    </div>
  );
}

export default withRouter(Home);
