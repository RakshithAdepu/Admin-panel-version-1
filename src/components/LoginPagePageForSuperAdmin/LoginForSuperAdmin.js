import "./loginforsuperadmin.css"
import {Link} from "react-router-dom"

const LoginForSuperAdmin =()=>{

    return(
        <div className="mainContForSuperAdminLogin">
        <div className="topContSuper">
          <div className="logoForAdminCont">
            <Link to="/loginforadmin">
            <img
              className="adminLogoIcons"
              src="./Images/LoginForAdmin/adminLogo.png"
              alt="adminLogo"
            />
            <p className="superPara">Admin</p>    </Link>
          </div>
        </div>
        <div className="LogoCont">
          <img className="logoImg" src="./Images/LoginForAdmin/logo.png" alt="logo"/>
          <h2 className="myClickerrHeading">My Clickerr</h2>
        </div>
  
        <div className="loginCont">
          <div className="leftSideContSuperAdmin"></div>
          <div className="borderLine"></div>
          <div className="rightSideCont">
            <form className="formLogin">
              <h2 className="adminTitle"> Super Admin</h2>
              <input
                className="inputElement"
                type="text"
                placeholder="User name"
              />
              <input
                className="inputElement"
                type="password"
                placeholder="Password"
              />
              <button type="button" className="loginButtonSuperAdmin">
                Log in{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    )
}


export default LoginForSuperAdmin