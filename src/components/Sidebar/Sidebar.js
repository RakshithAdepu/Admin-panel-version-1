import "./index.css";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";
import {
  MdSpaceDashboard,
  MdCategory,
  MdProductionQuantityLimits,
  MdPayments,
  MdEventRepeat,
} from "react-icons/md";
import { BsTable, BsTabletFill, BsFillCalendarEventFill } from "react-icons/bs";

const Sidebar = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    Cookies.remove("jwtToken");
    navigate("/loginforadmin");
  };
  return (
    <div className="sidebar">
      <div className="sidebarTitleCont">
        <img
          className="sidebarImgiconsTitle"
          src="./Images/sidebarOfTheDashboard/logo.png"
          alt="logo"
        />
        <h2 className="sidebarTitle">Myclickerr</h2>
      </div>
      <div className="sidebarListContainer">
        <ul className="unorderedListSideBar">
          <Link to="/Home" className="linkNoUnderline">
            <li className="listItemSidebar">
              <MdSpaceDashboard className="sidebaricons" /> Dashboard
            </li>
          </Link>
          <Link className="linkNoUnderline" to="/photographerTable">
            <li className="listItemSidebar">
              <BsTable className="sidebaricons" /> Photographer Table
            </li>
          </Link>
          <Link to="/userTable" className="linkNoUnderline">
            {" "}
            <li className="listItemSidebar">
              <BsTabletFill className="sidebaricons" /> User's Table
            </li>
          </Link>
          <Link to="/categoryMainTable" className="linkNoUnderline">
            <li className="listItemSidebar">
              <MdCategory className="sidebaricons" /> Categories
            </li>
          </Link>
          <Link to="/productsTable" className="linkNoUnderline">
            <li className="listItemSidebar">
              <MdProductionQuantityLimits className="sidebaricons" /> Products
            </li>
          </Link>
          <Link to="/eventCategory" className="linkNoUnderline">
            <li className="listItemSidebar">
              <MdEventRepeat className="sidebaricons" />
              Event Category
            </li>
          </Link>
         <Link to="/eventBookingRecords" className="linkNoUnderline"> <li className="listItemSidebar">
            <BsFillCalendarEventFill className="sidebaricons" />
            Event booking
          </li></Link>
          <Link to="/Payments" className="linkNoUnderline"><li className="listItemSidebar">
            <MdPayments className="sidebaricons" /> Payment
          </li></Link>
          <li className="listItemSidebar">
            <button
              type="button"
              className="logoutBtnInSideBar"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
