import "./SidebarSuperAdminCss.css"
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";
import {
  MdSpaceDashboard,
  MdAdminPanelSettings,
} from "react-icons/md";
import { BsCurrencyDollar, BsTicketPerforatedFill,} from "react-icons/bs";

const SidebarSuperAdmin = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    Cookies.remove("jwtToken");
    navigate("/loginforadmin");
  };
  return (
    <div className="sidebarSuperAdmin">
      <div className="sidebarTitleContSuperAdmin">
        <img
          className="sidebarImgiconsTitleSuperAdmin"
          src="./Images/sidebarOfTheDashboard/logo.png"
          alt="logo"
        />
        <h2 className="sidebarTitleSuperAdmin">Myclickerr</h2>
      </div>
      <div className="sidebarListContainerSuperAdmin">
        <ul className="unorderedListSideBarSuperAdmin">
          <Link to="/HomeForSuperAdmin" className="linkNoUnderlineSuperAdmin">
            <li className="listItemSidebarSuperAdmin">
              <MdSpaceDashboard className="sidebariconsSuperAdmin" /> Dashboard
            </li>
          </Link>
          <Link className="linkNoUnderlineSuperAdmin" to="/adminOrganisationSuperAdmin">
            <li className="listItemSidebarSuperAdmin">
              <MdAdminPanelSettings className="sidebariconsSuperAdmin" /> Admin organization 
            </li>
          </Link>
          <Link to="/paymentRequestSuperAdmin" className="linkNoUnderlineSuperAdmin">
            {" "}
            <li className="listItemSidebarSuperAdmin">
              <BsCurrencyDollar className="sidebariconsSuperAdmin" /> Payment Request
            </li>
          </Link>
          <Link to="/CouponsSuperAdmin" className="linkNoUnderlineSuperAdmin">
            <li className="listItemSidebarSuperAdmin">
              <BsTicketPerforatedFill className="sidebariconsSuperAdmin" /> Coupons
            </li>
          </Link>
          {/* <Link to="/productsTable" className="linkNoUnderlineSuperAdmin">
            <li className="listItemSidebarSuperAdmin">
              <MdProductionQuantityLimits className="sidebariconsSuperAdmin" /> Products
            </li>
          </Link>
          <Link to="/productOrderDetails" className="linkNoUnderlineSuperAdmin">
            <li className="listItemSidebarSuperAdmin">
              <MdLocalShipping className="sidebariconsSuperAdmin" />
              Product order
            </li>
          </Link>
          <Link to="/eventCategory" className="linkNoUnderlineSuperAdmin">
            <li className="listItemSidebarSuperAdmin">
              <MdEventRepeat className="sidebariconsSuperAdmin" />
              Event Category
            </li>
          </Link>
         <Link to="/eventBookingRecords" className="linkNoUnderlineSuperAdmin"> <li className="listItemSidebarSuperAdmin">
            <BsFillCalendarEventFill className="sidebariconsSuperAdmin" />
            Event details
          </li></Link>
          <Link to="/Payments" className="linkNoUnderlineSuperAdmin"><li className="listItemSidebarSuperAdmin">
            <MdPayments className="sidebariconsSuperAdmin" /> Payment
          </li></Link> */}
          <li className="listItemSidebarSuperAdmin">
            <button
              type="button"
              className="logoutBtnInSideBarSuperAdmin"
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

export default SidebarSuperAdmin;
