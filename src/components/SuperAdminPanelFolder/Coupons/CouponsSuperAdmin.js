// import "./CouponsSuperAdminCss.css";
// import SidebarSuperAdmin from "../SidebarSuperAdmin/SidebarSuperAdmin";
// function CouponsSuperAdmin() {
//   const data = [
//     {
//       couponName: "First Booking",
//       couponNumber: "-123-345-987",
//       offer: "30% Off",
//       validity: "02/06/2045",
//       termsAmdConditions: "Applicable on 12,000 cart value ",
//     },
//     {
//       couponName: "First Booking",
//       couponNumber: "-123-345-987",
//       offer: "30% Off",
//       validity: "02/06/2045",
//       termsAmdConditions: "Applicable on 12,000 cart value ",
//     },
//     {
//       couponName: "First Booking",
//       couponNumber: "-123-345-987",
//       offer: "30% Off",
//       validity: "02/06/2045",
//       termsAmdConditions: "Applicable on 12,000 cart value ",
//     },
//     {
//       couponName: "First Booking",
//       couponNumber: "-123-345-987",
//       offer: "30% Off",
//       validity: "02/06/2045",
//       termsAmdConditions: "Applicable on 12,000 cart value ",
//     },
//     {
//       couponName: "First Booking",
//       couponNumber: "-123-345-987",
//       offer: "30% Off",
//       validity: "02/06/2045",
//       termsAmdConditions: "Applicable on 12,000 cart value ",
//     },
//     {
//       couponName: "First Booking",
//       couponNumber: "-123-345-987",
//       offer: "30% Off",
//       validity: "02/06/2045",
//       termsAmdConditions: "Applicable on 12,000 cart value ",
//     },
//     {
//       couponName: "First Booking",
//       couponNumber: "-123-345-987",
//       offer: "30% Off",
//       validity: "02/06/2045",
//       termsAmdConditions: "Applicable on 12,000 cart value ",
//     },

//   ];

//   const handleAddNewCoupon =()=>{

//   }
//   return (
//     <div className="WholeConatinerInCouponsSA">
//       <SidebarSuperAdmin />
//       {/* main container for coupons */}
//       <div className="mainContCouponsSuperAdmin">
//         {/* coupons cont */}
//         <div className="CouponsContSA">
// {data.map((item, index) => (<div className="CouponsSA" key="index">
//     <div className="couponsInterCont">
//     <h3 className="verticalTitleSA">
//         <div className="interNestedCouponSA">
//            <div className="leftCoupSideSA">
//            <p className="couponnameSa">{item.couponName}</p>
//             <p className="offerSA">{item.offer}</p>
//             <hr className="hrSA"/>
//             <p className="tAndCSa">{item.termsAmdConditions}</p>
//             <p className="tAndCSa">valid: {item.validity}</p>
//            </div>
//            <div className="CouponNumberCont">

// <p className="couponNumberStyleSA">{item.couponNumber}</p>
// <hr className="hrVerticalSA"/>
//            </div>
//         </div>
// Coupon

//     </h3>

//     </div>
// </div>))}
// <div className="AddNewRecordInCouponsSA" onClick={handleAddNewCoupon}>

//     <h1 className="addButtonSaCouponsSA">+</h1>
// </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CouponsSuperAdmin;

import React, { useState } from "react";
import "./CouponsSuperAdminCss.css";
import SidebarSuperAdmin from "../SidebarSuperAdmin/SidebarSuperAdmin";

function CouponsSuperAdmin() {
  const data = [
    {
      couponName: "First Booking",
      couponNumber: "-123-345-987",
      offer: "30% Off",
      validity: "02/06/2045",
      termsAmdConditions: "Applicable on 12,000 cart value ",
    },
    {
      couponName: "First Booking",
      couponNumber: "-123-345-987",
      offer: "30% Off",
      validity: "02/06/2045",
      termsAmdConditions: "Applicable on 12,000 cart value ",
    },
    {
      couponName: "First Booking",
      couponNumber: "-123-345-987",
      offer: "30% Off",
      validity: "02/06/2045",
      termsAmdConditions: "Applicable on 12,000 cart value ",
    },
    {
      couponName: "First Booking",
      couponNumber: "-123-345-987",
      offer: "30% Off",
      validity: "02/06/2045",
      termsAmdConditions: "Applicable on 12,000 cart value ",
    },
    {
      couponName: "First Booking",
      couponNumber: "-123-345-987",
      offer: "30% Off",
      validity: "02/06/2045",
      termsAmdConditions: "Applicable on 12,000 cart value ",
    },
    {
      couponName: "First Booking",
      couponNumber: "-123-345-987",
      offer: "30% Off",
      validity: "02/06/2045",
      termsAmdConditions: "Applicable on 12,000 cart value ",
    },
    {
      couponName: "First Booking",
      couponNumber: "-123-345-987",
      offer: "30% Off",
      validity: "02/06/2045",
      termsAmdConditions: "Applicable on 12,000 cart value ",
    },
  ];


//   couponName: "First Booking",
//   couponNumber: "-123-345-987",
//   offer: "30% Off",
//   validity: "02/06/2045",
//   termsAmdConditions: "Applicable on 12,000 cart value ",

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newCoupon, setNewCoupon] = useState({
    couponName: "",
    couponNumber: "",
    offer: "",
    validity: "",
    termsAmdConditions: "",
  });
  const [couponsData, setCouponsData] = useState([...data]); // Assuming 'data' is your initial coupon data array

  const handleAddNewCoupon = () => {
    setIsPopupOpen(true);
  };




const handleSaveNewCoupon = () => {
    console.log("Before adding new coupon:", couponsData);
    setCouponsData((prevCoupons) => [...prevCoupons, newCoupon]);
    console.log("After adding new coupon:", couponsData);
    setNewCoupon({
      couponName: "",
      couponNumber: "",
      offer: "",
      validity: "",
      termsAmdConditions: "",
    });
    setIsPopupOpen(false);
  };



  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCoupon((prevCoupon) => ({ ...prevCoupon, [name]: value }));
  };


  const handleRemoveCoupon = (index) => {
    const updatedCoupons = couponsData.filter((_, i) => i !== index);
    setCouponsData(updatedCoupons);
  };

  return (
    <div className="WholeConatinerInCouponsSA">
      <SidebarSuperAdmin />
      {/* main container for coupons */}
      <div className="mainContCouponsSuperAdmin">
        <h1 className="CouponsTitleSA">Coupons</h1>
        {/* coupons cont */}
        <div className="CouponsContSA">
          {couponsData.map((item, index) => (
            <div className="CouponsSA" key={index}>
                <button
                className="removeButtonSA"
                onClick={() => handleRemoveCoupon(index)}
              >
                Remove
              </button>
              <div className="couponsInterCont">
                <h3 className="verticalTitleSA">
                  <div className="interNestedCouponSA">
                    <div className="leftCoupSideSA">
                      <p className="couponnameSa">{item.couponName}</p>
                      <p className="offerSA">{item.offer}</p>
                      <hr className="hrSA" />
                      <p className="tAndCSa">{item.termsAmdConditions}</p>
                      <p className="tAndCSa">valid: {item.validity}</p>
                    </div>
                    <div className="CouponNumberCont">
                      <p className="couponNumberStyleSA">{item.couponNumber}</p>
                      <hr className="hrVerticalSA" />
                    </div>
                  </div>
                  Coupon
                </h3>
              </div>
              
            </div>
          ))}
          <div className="AddNewRecordInCouponsSA" onClick={handleAddNewCoupon}>
            <h1 className="addButtonSaCouponsSA">+</h1>
          </div>
        </div>
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div className="popupCouponSA">
          <div className="popupContent">
            <div className="closePopup" onClick={handleClosePopup}>

        
              &times;
              
        
            </div>

            

            <input
           className="inputInCouponSA"
              type="text"
              name="couponName" 
              placeholder="Coupon Name"
              value={newCoupon.couponName}
              onChange={handleInputChange}
            />
            <hr/>
            <input  className="inputInCouponSA"
              type="text"
              name="couponNumber"
              placeholder="Coupon Number"
              value={newCoupon.couponNumber}
              onChange={handleInputChange}
            />
            <hr/>
            <input  className="inputInCouponSA"
              type="text"
              name="offer"
              placeholder="Offer"
              value={newCoupon.offer}
              onChange={handleInputChange}
            />
            <hr/>
            <input  className="inputInCouponSA"
              type="text"
              name="validity"
              placeholder="Validity"
              value={newCoupon.validity}
              onChange={handleInputChange}
            />
            <hr/>

            <input  className="inputInCouponSA"
              type="text"
              name="termsAmdConditions"
              placeholder="Terms And Conditions"
              value={newCoupon.termsAmdConditions}
              onChange={handleInputChange}
            />
            <hr/>
            {/* ... (similar input fields for other details) ... */}
            <button className="AddNewCouponSA" onClick={handleSaveNewCoupon}>Add Coupon</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CouponsSuperAdmin;
