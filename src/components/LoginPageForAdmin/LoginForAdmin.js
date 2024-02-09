import "./login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const LoginForAdmin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [showSubmitError, setShowSubmitError] = useState(false);
  const [errorMsg, setErrorMsg] = useState();

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const userDetails = { username, password };
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    console.log(response.ok);
    const data = await response.json();
    const jwtToken =data.jwt_token;
    if (response.ok === true) {
      Cookies.set("jwt_token", jwtToken,   {
        expires: 30,
        path: "/home",
      });
      navigate("/home");
    } else {
      console.log(data.error_msg);
      setErrorMsg(data.error_msg);
      setShowSubmitError(true);
    }
  };

  return (
    <div className="mainContForAdminLogin">
      <div className="topCont">
        <div className="logoForAdminCont">
          <Link to="/loginforsuperadmin">
            <img
              className="adminLogoIcons"
              src="./Images/LoginForAdmin/adminLogo.png"
              alt="adminLogo"
            />
          </Link>
          <Link to="/loginforsuperadmin">
            <p className="superPara">Super Admin</p>
          </Link>
        </div>
      </div>
      <div className="LogoCont">
        <img
          className="logoImg"
          src="./Images/LoginForAdmin/logo.png"
          alt="logo"
        />
        <h2 className="myClickerrHeading">My Clickerr</h2>
      </div>

      <div className="loginCont">
        <div className="leftSideCont"></div>
        <div className="borderLine"></div>
        <div className="rightSideCont">
          <form className="formLogin" onSubmit={formSubmit}>
            <h2 className="adminTitle">Admin</h2>
            <input
              className="inputElement"
              type="text"
              placeholder="User name"
              onChange={onChangeUsername}
              value={username}
            />
            <input
              className="inputElement"
              type="password"
              placeholder="Password"
              onChange={onChangePassword}
              value={password}
            />
            <button type="submit" className="loginButton">
              
              Log in{" "}
            </button>
            {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForAdmin;
