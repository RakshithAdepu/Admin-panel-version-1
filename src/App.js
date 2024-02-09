// 

import { useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from "./components/Home/Home";
import LoginForAdmin from "./components/LoginPageForAdmin/LoginForAdmin";
import PhotographerTable from "./components/PhotographerTable/PhotographerTable";
import PhotographerProfile from "./components/PhotographerProfile/PhotographerProfile";
import UserTable from "./components/UserTable/UserTable";
import ProductsTable from "./components/ProductsTable/ProductsTable";
import CategoryMainTable from "./components/CategoryTable/CategoryMainTable";
import EventCategory from "./components/EventCategory/EventCategory";
import Payment from "./components/Payments/Payment";
import EventBookingRecords from "./components/EventBookingRecords/EventBookingRecords";
import NotFound from "./components/NotFound/NotFound";
import CouponsSuperAdmin from "./components/SuperAdminPanelFolder/Coupons/CouponsSuperAdmin";
import ProductOrderDetails from "./components/ProductOrderDetails/ProductOrderDetails";
import "./App.css";
import Cookies from "js-cookie";

// Separate login component for super admin
import LoginForSuperAdmin from "./components/LoginPagePageForSuperAdmin/LoginForSuperAdmin";
import HomeSuperAdmin from "./components/SuperAdminPanelFolder/HomeSuperAdmin/HomeSuperAdmin";
import AdminOrganisation from "./components/SuperAdminPanelFolder/AdminOrganisation/AdminOrganisation";
import PaymentRequestSuperAdmin from "./components/SuperAdminPanelFolder/PaymentRequest/PaymentRequestSuperAdmin";
function App() {
  const navigate = useNavigate();

  const jwtToken = Cookies.get("access_token");

  
  useEffect(() => {
   
    if (!jwtToken) {
      // JWT token does not exist, redirect to the login page
      navigate("/loginforadmin");
    }
    
  },[navigate("/loginforadmin")]);

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Clickerr Admin panel</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Routes>
        <Route path="/loginforadmin" element={<LoginForAdmin />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/photographerTable" element={<PhotographerTable />} />
        <Route path="/photographerProfile" element={<PhotographerProfile />} />
        <Route path="/userTable" element={<UserTable />} />
        <Route path="/productsTable" element={<ProductsTable />} />
        <Route path="/CategoryMainTable" element={<CategoryMainTable />} />
        <Route path="/eventCategory" element={<EventCategory />} />
        <Route path="/eventBookingRecords" element={<EventBookingRecords />} />
        <Route path="/productOrderDetails" element={<ProductOrderDetails />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function RootComponent() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Clickerr Super Admin panel</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Router>
        {/* Separate route for SuperAdmin login */}
        <Routes>
          <Route path="/loginforsuperadmin" element={<LoginForSuperAdmin />} />
          <Route path="/homeForSuperAdmin" element={<HomeSuperAdmin />} />
          <Route
            path="/adminOrganisationSuperAdmin"
            element={<AdminOrganisation />}
          />
          <Route
            path="/paymentRequestSuperAdmin"
            element={<PaymentRequestSuperAdmin />}
          />
          <Route path="/CouponsSuperAdmin" element={<CouponsSuperAdmin />} />
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </>
  );
}

export default RootComponent;
