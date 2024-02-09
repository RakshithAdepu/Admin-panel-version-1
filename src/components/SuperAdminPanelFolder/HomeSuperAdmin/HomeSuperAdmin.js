import "./HomeSuperAdminCss.css";
import SingleDate from "../../SingleDate/SingleDate";
import FromDate from "../../FromDate/FromDate";
import Todate from "../../ToDate/Todate";
import SidebarSuperAdmin from "../SidebarSuperAdmin/SidebarSuperAdmin";
import HorizontalBarGraph from "../Graph/Graph";
const data = [
  {
    sentence: "Rakesh’s 1st instalment on booking #0012",
    image: "./Images/photographerProfile/profilePic.png",
  },
  {
    sentence: "Rakesh’s 1st instalment on booking #0012",
    image: "./Images/photographerProfile/profilePic.png",
  },
  {
    sentence: "Rakesh’s 1st instalment on booking #0012",
    image: "./Images/photographerProfile/profilePic.png",
  },
  {
    sentence: "Rakesh’s 1st instalment on booking #0012",
    image: "./Images/photographerProfile/profilePic.png",
  },
  {
    sentence: "Rakesh’s 1st instalment on booking #0012",
    image: "./Images/photographerProfile/profilePic.png",
  },
  {
    sentence: "Rakesh’s 1st instalment on booking #0012",
    image: "./Images/photographerProfile/profilePic.png",
  },
  {
    sentence: "Rakesh’s 1st instalment on booking #0012",
    image: "./Images/photographerProfile/profilePic.png",
  },
  {
    sentence: "Rakesh’s 1st instalment on booking #0012",
    image: "./Images/photographerProfile/profilePic.png",
  },
  {
    sentence: "Rakesh’s 1st instalment on booking #0012",
    image: "./Images/photographerProfile/profilePic.png",
  },
  {
    sentence: "Rakesh’s 1st instalment on booking #0012",
    image: "./Images/photographerProfile/profilePic.png",
  },
  {
    sentence: "Rakesh’s 1st instalment on booking #0012",
    image: "./Images/photographerProfile/profilePic.png",
  },
  {
    sentence: "Rakesh’s 1st instalment on booking #0012",
    image: "./Images/photographerProfile/profilePic.png",
  },
  {
    sentence: "Rakesh’s 1st instalment on booking #0012",
    image: "./Images/photographerProfile/profilePic.png",
  },
  {
    sentence: "Rakesh’s 1st instalment on booking #0012",
    image: "./Images/photographerProfile/profilePic.png",
  },
  {
    sentence: "Rakesh’s 1st instalment on booking #0012",
    image: "./Images/photographerProfile/profilePic.png",
  },
];

function HomeSuperAdmin() {
  return (
    <div className="mainContSuperAdminDashboard">
      <SidebarSuperAdmin />
      {/* dashboard cont */}
      <div className="dashboardMAinContSuperAdmin">
        {/* super admin title cont */}
        <div className="titleContSA">
          <h1 className="headingINSA">Super Admin Panel</h1>
          <button className="LogoutSA">Logout</button>
        </div>
        {/* calender cont */}
        <div className="caldendarContSuperAdmin">
          <SingleDate />

          <FromDate />
          <h5 className="toInsuperAdmin">To</h5>
          <Todate />

          <button type="button" className="ApplybtnInSuperAdmin">
            Apply
          </button>
        </div>
        {/* total revenue and admins count cont */}
        <div className="totalRevenueSACont">
          <div>
            <h4 className="TotalHeadingSA">Total Revenue</h4>
            <h5 className="paraSA"> + 6.4 lakhs in this month </h5>
          </div>
          <h1 className="RevenueContSA">52.6 Lakhs</h1>
          <div className="AdminCountCont">
            <h2 className="TitleAdminActiveSA">ACTIVE ADMINS</h2>
            <div className="circleIconsSA">
              <h2 className="countSAAdminCount">03</h2>
            </div>
          </div>
        </div>
        {/* diviving the remaining into row */}
        <div className="remainingContSA">
          {/* right cont */}
          <div className="rightDivSA">
            <div className="rightTopDivSA">
              <div>
                <div className="boxOne">
                  <h1 className="eventSells">Event sells</h1>
                  <h1 className="eventSellsRs">Rs 2154541.00</h1>
                </div>
                <div className="boxTwo">
                  <h1 className="eventSellsOne">Photographer expenses </h1>
                  <h1 className="eventSellsRsOne">Rs 2154541.00</h1>
                </div>
                <div className="boxThree">
                  <h1 className="eventSellsOne">Net profit </h1>
                  <h1 className="eventSellsRsOne">Rs 2154541.00</h1>
                </div>
              </div>
              <div>
                <div className="boxOne">
                  <h1 className="eventSells">Mart sells</h1>
                  <h1 className="eventSellsRs">Rs 2154541.00</h1>
                </div>
                <div className="boxTwo">
                  <h1 className="eventSellsOne">Vender expenses </h1>
                  <h1 className="eventSellsRsOne">Rs 2154541.00</h1>
                </div>
                <div className="boxThree">
                  <h1 className="eventSellsOne">Net profit </h1>
                  <h1 className="eventSellsRsOne">Rs 2154541.00</h1>
                </div>
              </div>
            </div>
            {/* graph cont */}
            <div className="graphContSA">
                <HorizontalBarGraph/>
            </div>
          </div>
          {/* left side notofication cont */}
          <div className="leftDivSA">
            <div className="NotificationSATopTitle">
              <h3 className="paymentTitleSA">payments to do</h3>
              <h5 className="pendingRequestSA">Pending request's 12 </h5>
            </div>
            {/* list cont for notofication */}

            <div>
               <ul className="unorderListSA">
               {data.map((e,index)=>(
                <li key={index} className="listOrderSA">
                    <img src={e.image} alt="profilePIC" className="imageLogoSA"/>
                    <h5 className="notificationSAInList">{e.sentence}</h5>
                </li>
               ))}
               </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSuperAdmin;
