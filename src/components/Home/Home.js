import "./index.css";
import Sidebar from "../Sidebar/Sidebar";
import SingleDate from "../SingleDate/SingleDate";
import FromDate from "../FromDate/FromDate";
import Todate from "../ToDate/Todate";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
// ./Images/dashboard/
const Home = () => {
  const navigate=useNavigate()
  const onClickLogout=()=>{

    Cookies.remove("jwtToken")
    navigate("/loginforadmin");


  }
  return (
    <div className="overallMainContForDashboard">
      <Sidebar />
      <div className="mainDashboardCont">
        {/* mainCont top 1 */}
        <div className="mainContTop1">
          <h1 className="adminpanelHeading">Admin Panel</h1>
          <div className="maincontTop1SubCont">
            <button type="button" className="adminLogoutBtn" onClick={onClickLogout}>
              Logout
            </button>
            <img
              className="adminLogoTop1"
              src="./Images/dashboard/profile iconadminProfileIcon.png"
              alt="logo"
            />
          </div>
        </div>
        {/* mainCont top 2 */}
        <div className="mainContTop2">
          <SingleDate />
          <div className="fromTodateCont">
            <FromDate />
            <h5 className="ToInDate">To</h5>
            <Todate />
            <button type="button" className="ApplyButton">Apply</button>
        </div>
          </div>
         
        {/*--- photographer status cont----- */}
        <div className="paramenterCont">
          <div className="parameterTittle">
            <img
              className="eachsubIcon"
              src="./Images/dashboard/ph_camera-lightcameraIcon.png"
              alt="logo"
            />
            <h2 className="eachsubTitle">Photographer status</h2>
          </div>
          <div className="parametermainCont">
            {/* photographers registered card */}
            <div className="parameterCard">
              <div className="parametercardToppart">
                <img
                  className="parametercardIcon"
                  src="./Images/dashboard/ic_outline-verified-userregistered.png"
                  alt="logo"
                />
                <h4 className="parameterCardTitle"> Registered</h4>
              </div>
              <div className="parameterCardBottom">
                <p className="parameterCardPara">Total</p>
                <h1 className="parameterCount">20</h1>
              </div>
            </div>
            <div className="line"></div>
            {/* photographers verified card */}
            <div className="parameterCard">
              <div className="parametercardToppart">
                <img
                  className="parametercardIcon"
                  src="./Images/dashboard/Vectorverified.png"
                  alt="logo"
                />
                <h4 className="parameterCardTitle"> Verified</h4>
              </div>
              <div className="parameterCardBottom">
                <p className="parameterCardPara">Total</p>
                <h1 className="parameterCount">150</h1>
              </div>
            </div>
            <div className="line"></div>
            {/* photographers Not verified card */}
            <div className="parameterCard">
              <div className="linkCont">
                <img
                  className="linkImg"
                  src="./Images/dashboard/external-linklink.png"
                  alt="logo"
                />
              </div>
              <div className="parametercardToppart">
                <img
                  className="parametercardIcon"
                  src="./Images/dashboard/radix-icons_cross-circlednot verified.png"
                  alt="logo"
                />
                <h4 className="parameterCardTitle"> Not verified</h4>
              </div>
              <div className="parameterCardBottom">
                <p className="parameterCardPara">Total</p>
                <h1 className="parameterCount">20</h1>
              </div>
            </div>
          </div>
        </div>
        {/*--- Event status cont----- */}
        <div className="paramenterCont">
          <div className="parameterTittle">
            <img
              className="eachsubIcon"
              src="./Images/dashboard/clarity_event-lineeventIcon.png"
              alt="logo"
            />
            <h2 className="eachsubTitle">Event status</h2>
          </div>
          <div className="parametermainCont">
            {/* Event completed Card */}
            <div className="parameterCard">
              <div className="parametercardToppart">
                <img
                  className="parametercardIcon"
                  src="./Images/dashboard/material-symbols_done-roundedeventCompletetd.png"
                  alt="logo"
                />
                <h4 className="parameterCardTitle"> Completed</h4>
              </div>
              <div className="parameterCardBottom">
                <p className="parameterCardPara">Total</p>
                <h1 className="parameterCount">280</h1>
              </div>
            </div>
            <div className="line"></div>
            {/* Event on going card */}
            <div className="parameterCard">
              <div className="parametercardToppart">
                <img
                  className="parametercardIcon"
                  src="./Images/dashboard/Group 4457ongoing.png"
                  alt="logo"
                />
                <h4 className="parameterCardTitle"> On going</h4>
              </div>
              <div className="parameterCardBottom">
                <p className="parameterCardPara">Total</p>
                <h1 className="parameterCount">189</h1>
              </div>
            </div>
            <div className="line"></div>
            {/* Events pending card */}
            <div className="parameterCard">
              <div className="linkCont">
                <img
                  className="linkImg"
                  src="./Images/dashboard/external-linklink.png"
                  alt="logo"
                />
              </div>
              <div className="parametercardToppart">
                <img
                  className="parametercardIcon"
                  src="./Images/dashboard/Group 4458pending.png"
                  alt="logo"
                />
                <h4 className="parameterCardTitle"> Pending</h4>
              </div>
              <div className="parameterCardBottom">
                <p className="parameterCardPara">Total</p>
                <h1 className="parameterCount">20</h1>
              </div>
            </div>
          </div>
        </div>
        {/*--- product order cont----- */}
        <div className="paramenterCont">
          <div className="parameterTittle">
            <img
              className="eachsubIcon"
              src="./Images/dashboard/productsCont.png"
              alt="logo"
            />
            <h2 className="eachsubTitle">Product orders</h2>
          </div>
          <div className="parametermainCont">
            {/* Products received card */}
            <div className="parameterCard">
              <div className="parametercardToppart">
                <img
                  className="parametercardIcon"
                  src="./Images/dashboard/products-recived.png"
                  alt="logo"
                />
                <h4 className="parameterCardTitle"> Received</h4>
              </div>
              <div className="parameterCardBottom">
                <p className="parameterCardPara">Total</p>
                <h1 className="parameterCount">20</h1>
              </div>
            </div>
            <div className="line"></div>
            {/* products delivered card */}
            <div className="parameterCard">
              <div className="parametercardToppart">
                <img
                  className="parametercardIcon"
                  src="./Images/dashboard/productsDelivered.png"
                  alt="logo"
                />
                <h4 className="parameterCardTitle"> Delivered</h4>
              </div>
              <div className="parameterCardBottom">
                <p className="parameterCardPara">Total</p>
                <h1 className="parameterCount">560</h1>
              </div>
            </div>
            <div className="line"></div>
            {/* products pending card */}
            <div className="parameterCard">
              <div className="linkCont">
                <img
                  className="linkImg"
                  src="./Images/dashboard/external-linklink.png"
                  alt="logo"
                />
              </div>
              <div className="parametercardToppart">
                <img
                  className="parametercardIcon"
                  src="./Images/dashboard/Group 4458pending.png"
                  alt="logo"
                />
                <h4 className="parameterCardTitle">Pending</h4>
              </div>
              <div className="parameterCardBottom">
                <p className="parameterCardPara">Total</p>
                <h1 className="parameterCount">247</h1>
              </div>
            </div>
          </div>
        </div>
        {/* bottom cont with 3 elements */}
        <div className="bottomContwith3Elements">
          {/* event analysis cont */}
          <div className="EventAnalysisCont">
            {/* event title cont */}
            <div className="EventAnalysisTitlecont">
              <img
                className="eventAnalIcon"
                src="./Images/dashboard/clarity_event-lineeventIcon.png"
                alt="logo"
              />
              <h2 className="eventAnalTitle">Event Analysis</h2>
            </div>
            {/* event metrics cont */}
            <div className="eventMetricesCont">
              <h1 className="totalEvents">
                Total Events <span className="countOfEvents">150</span>
              </h1>
              <p className="eventAnalparatop5">Top 5 events</p>
              <p className="eventsinevents">
                Wedding <span className="eveinevcount">200</span>
              </p>
              <hr className="hrEvents"></hr>
              <p className="eventsinevents">
                Birthday <span className="eveinevcount">200</span>
              </p>
              <hr className="hrEvents"></hr>
              <p className="eventsinevents">
                Pre-wedding <span className="eveinevcount">200</span>
              </p>
              <hr className="hrEvents"></hr>
              <p className="eventsinevents">
                Baby shower <span className="eveinevcount">200</span>
              </p>
              <hr className="hrEvents"></hr>
              <p className="eventsinevents">
                Engagement <span className="eveinevcount">200</span>
              </p>
              <hr className="hrEvents"></hr>
            </div>
          </div>
          {/* product analysis cont */}
          <div className="EventAnalysisCont">
            {/* event title cont */}
            <div className="EventAnalysisTitlecont">
              <img
                className="eventAnalIcon"
                src="./Images/dashboard/productsCont.png"
                alt="logo"
              />
              <h2 className="eventAnalTitle">Product Analysis</h2>
            </div>
            {/* product metrics cont */}
            <div className="eventMetricesCont">
              <h1 className="totalEvents">
                Total sell <span className="countOfEvents">150</span>
              </h1>
              <p className="eventAnalparatop5">Top 5 products</p>
              <p className="eventsinevents">
                Camera <span className="eveinevcount">200</span>
              </p>
              <hr className="hrEvents"></hr>
              <p className="eventsinevents">
                Lens <span className="eveinevcount">200</span>
              </p>
              <hr className="hrEvents"></hr>
              <p className="eventsinevents">
                Albums <span className="eveinevcount">200</span>
              </p>
              <hr className="hrEvents"></hr>
              <p className="eventsinevents">
                Cards <span className="eveinevcount">200</span>
              </p>
              <hr className="hrEvents"></hr>
              <p className="eventsinevents">
                Lights <span className="eveinevcount">200</span>
              </p>
              <hr className="hrEvents"></hr>
            </div>
          </div>

          {/* photographers count and usercount */}
          <div className="usersAndPhotographersCountCont">
            {/* photographers count */}
            <div className="photographersCountCont">
              <img
                className="photographerCountIcons"
                src="./Images/dashboard/photographersCount.png"
                alt="logo"
              />
              <div className="countCont">
                <h2 className="titleofTheCount">Photographer count</h2>
                <h1 className="Totalofthecont">Total</h1>
                <h2 className="countoftheusersandphoto">298</h2>
              </div>
            </div>
            {/* users count */}
            <div className="photographersCountCont">
              <div className="countContUser">
                <h2 className="titleofTheCount">User count</h2>
                <h1 className="Totalofthecont">Total</h1>
                <h2 className="countoftheusersandphoto">879</h2>
              </div>
              <img
                className="photographerCountIcons"
                src="./Images/dashboard/userCount.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
