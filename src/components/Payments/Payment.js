import "./Payment.css";
import Sidebar from "../Sidebar/Sidebar";
import React, { useState } from "react";
import AddNewPayment from "./AddNewPayment";

const Payment = () => {
  const [data, setData] = useState([
    // Sample data...
    {
      eventId: "1234",
      eventName: "Wedding",
      photographerId: "1234",
      photographerName: "Rakshith Adepu",
      paymentOne: `₹3,000`,
      paymentOneDate: `02-Jun-23`,
      otp: "292929",
      paymentTwo: `₹3,000`,
      paymentTwoDate: `02-Jun-23`,
      paymentThree: `₹3,000`,
      paymentThreeDate: `02-Jun-23`,
      paidAmount: `₹6,000`,
      totalAmount: "₹10,000",
    },
    {
      eventId: "1234",
      eventName: "Birthday ",
      photographerId: "1234",
      photographerName: "Rakshith Adepu",
      paymentOne: `₹3,000`,
      paymentOneDate: `02-Jun-23`,
      otp: "292999",
      paymentTwo: `Not available`,
      paymentTwoDate: `02-Jun-23`,
      paymentThree: `₹3,000`,
      paymentThreeDate: `02-Jun-23`,
      paidAmount: `₹6,000`,
      totalAmount: "₹10,000",
    },
    {
      eventId: "1234",
      eventName: "Engagement",
      photographerId: "1234",
      photographerName: "Rakshith Adepu",
      paymentOne: `Not available`,
      paymentOneDate: `02-Jun-23`,
      otp: "292999",
      paymentTwo: `₹3,000`,
      paymentTwoDate: `02-Jun-23`,
      paymentThree: `₹3,000`,
      paymentThreeDate: `02-Jun-23`,
      paidAmount: `₹6,000`,
      totalAmount: "₹10,000",
    },
    {
      eventId: "1234",
      eventName: "Birthday",
      photographerId: "1234",
      photographerName: "Rakshith Adepu",
      paymentOne: `₹3,000`,
      paymentOneDate: `02-Jun-23`,
      otp: "292999",
      paymentTwo: `Not available`,
      paymentTwoDate: `02-Jun-23`,
      paymentThree: `Not available`,
      paymentThreeDate: `02-Jun-23`,
      paidAmount: `₹6,000`,
      totalAmount: "₹10,000",
    },
    {
      eventId: "1234",
      eventName: "Groom",
      photographerId: "1234",
      photographerName: "Rakshith Adepu",
      paymentOne: `₹3,000`,
      paymentOneDate: `02-Jun-23`,
      otp: "292999",
      paymentTwo: `Not available`,
      paymentTwoDate: `02-Jun-23`,
      paymentThree: `Not available`,
      paymentThreeDate: `02-Jun-23`,
      paidAmount: `₹6,000`,
      totalAmount: "₹10,000",
    },
    {
      eventId: "1234",
      eventName: "Wedding",
      photographerId: "1234",
      photographerName: "Rakshith Adepu",
      paymentOne: `₹3,000`,
      paymentOneDate: `02-Jun-23`,
      otp: "292999",
      paymentTwo: `Not available`,
      paymentTwoDate: `02-Jun-23`,
      paymentThree: `Not available`,
      paymentThreeDate: `02-Jun-23`,
      paidAmount: `₹6,000`,
      totalAmount: "₹10,000",
    },
    {
      eventId: "1234",
      eventName: "Wedding",
      photographerId: "1234",
      photographerName: "Rakshith Adepu",
      paymentOne: `₹3,000`,
      paymentOneDate: `02-Jun-23`,
      otp: "292999",
      paymentTwo: `₹3,000`,
      paymentTwoDate: `02-Jun-23`,
      paymentThree: `₹3,000`,
      paymentThreeDate: `02-Jun-23`,
      paidAmount: `₹6,000`,
      totalAmount: "₹10,000",
    },
    {
      eventId: "1234",
      eventName: "Wedding",
      photographerId: "1234",
      photographerName: "Rakshith Adepu",
      paymentOne: `₹3,000`,
      paymentOneDate: `02-Jun-23`,
      otp: "292999",
      paymentTwo: `₹3,000`,
      paymentTwoDate: `02-Jun-23`,
      paymentThree: `₹3,000`,
      paymentThreeDate: `02-Jun-23`,
      paidAmount: `₹6,000`,
      totalAmount: "₹10,000",
    },
    {
      eventId: "1234",
      eventName: "Wedding",
      photographerId: "1234",
      photographerName: "Rakshith Adepu",
      paymentOne: `₹3,000`,
      paymentOneDate: `02-Jun-23`,
      otp: "292999",
      paymentTwo: `₹3,000`,
      paymentTwoDate: `02-Jun-23`,
      paymentThree: `Not available`,
      paymentThreeDate: `02-Jun-23`,
      paidAmount: `₹6,000`,
      totalAmount: "₹10,000",
    },
    {
        eventId: "1234",
        eventName: "Wedding",
        photographerId: "1234",
        photographerName: "Rakshith Adepu",
        paymentOne: `₹3,000`,
        paymentOneDate: `02-Jun-23`,
        otp: "292999",
        paymentTwo: `₹3,000`,
        paymentTwoDate: `02-Jun-23`,
        paymentThree: `Not available`,
        paymentThreeDate: `02-Jun-23`,
        paidAmount: `₹6,000`,
        totalAmount: "₹10,000",
      },
      {
        eventId: "1234",
        eventName: "Wedding",
        photographerId: "1234",
        photographerName: "Rakshith Adepu",
        paymentOne: `₹3,000`,
        paymentOneDate: `02-Jun-23`,
        otp: "292999",
        paymentTwo: `₹3,000`,
        paymentTwoDate: `02-Jun-23`,
        paymentThree: `Not available`,
        paymentThreeDate: `02-Jun-23`,
        paidAmount: `₹6,000`,
        totalAmount: "₹10,000",
      },
      {
        eventId: "1234",
        eventName: "Wedding",
        photographerId: "1234",
        photographerName: "Rakshith Adepu",
        paymentOne: `₹3,000`,
        paymentOneDate: `02-Jun-23`,
        otp: "292999",
        paymentTwo: `₹3,000`,
        paymentTwoDate: `02-Jun-23`,
        paymentThree: `Not available`,
        paymentThreeDate: `02-Jun-23`,
        paidAmount: `₹6,000`,
        totalAmount: "₹10,000",
      },
      {
        eventId: "1234",
        eventName: "Wedding",
        photographerId: "1234",
        photographerName: "Bharath T",
        paymentOne: `₹7,000`,
        paymentOneDate: `02-Jun-23`,
        otp: "292999",
        paymentTwo: `₹3,000`,
        paymentTwoDate: `02-Jun-23`,
        paymentThree: `Not available`,
        paymentThreeDate: `02-Jun-23`,
        paidAmount: `₹6,000`,
        totalAmount: "₹10,000",
      },
  ]);
  const [showForm, setShowForm] = useState(false);

  const handleAdd = (newData) => {
    setData((prevData) => [...prevData, newData]);
    setShowForm(false);
  };

  const handleClose = () => {
    setShowForm(false); // Close the pop-up when close button is clicked
  };

  const [filters, setFilters] = useState({});
  const [activeFilter, setActiveFilter] = useState(null);
  const [searchText, setSearchText] = useState("");

  const handleFilterChange = (columnName, filterValue) => {
    const updatedFilters = { ...filters, [columnName]: filterValue };
    setFilters(updatedFilters);
  };

  const toggleFilter = (columnName) => {
    setActiveFilter(activeFilter === columnName ? null : columnName);
  };

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const applyFilters = () => {
    let filteredData = data;

    Object.keys(filters).forEach((columnName) => {
      const filterValue = filters[columnName];
      filteredData = filteredData.filter((item) =>
        item[columnName]
          .toString()
          .toLowerCase()
          .includes(filterValue.toLowerCase())
      );
    });

    if (searchText) {
      const searchFilter = searchText.toLowerCase();
      filteredData = filteredData.filter((item) => {
        for (const key in item) {
          if (item[key].toString().toLowerCase().includes(searchFilter)) {
            return true;
          }
        }
        return false;
      });
    }

    return filteredData;
  };

  return (
    <div className="photographerTableOverallCont">
      <Sidebar />
      <div className="table-container">
        <h1 className="tablePageTitle">Payment table</h1>
        <div className="photographerTableTopCont">
          <input
            className="searchBarPhotographerTable"
            type="text"
            placeholder=" 🔍 Search for ID, Category, Name"
            value={searchText}
            onChange={handleSearch}
          />

          <button
            type="button"
            className="addNewProfilePhotographerTable"
            onClick={() => setShowForm(true)}
          >
            + Add new
          </button>
          {showForm && (
            <AddNewPayment onAdd={handleAdd} onClose={handleClose} />
          )}

          <button type="button" className="downloadButtonForPhotographerTable">
            ⬇ download
          </button>
          <div></div>
        </div>
        <table className="table">
          <thead className="photographerTableHeading">
            <tr>
              <th>
                {activeFilter === "eventId" ? (
                  <input
                    type="text"
                    value={filters.eventId || ""}
                    onChange={(e) =>
                      handleFilterChange("eventId", e.target.value)
                    }
                  />
                ) : (
                  <button
                    className="photoTableEachheading"
                    onClick={() => toggleFilter("eventId")}
                  >
                    Event ID
                  </button>
                )}
              </th>
              <th>
                {activeFilter === "eventName" ? (
                  <input
                    type="text"
                    value={filters.eventName || ""}
                    onChange={(e) =>
                      handleFilterChange("eventName", e.target.value)
                    }
                  />
                ) : (
                  <button
                    className="photoTableEachheading"
                    onClick={() => toggleFilter("eventName")}
                  >
                    {" "}
                    Event Name
                  </button>
                )}
              </th>
              <th>
                {activeFilter === "photographerId" ? (
                  <input
                    type="text"
                    value={filters.photographerId || ""}
                    onChange={(e) =>
                      handleFilterChange("photographerId", e.target.value)
                    }
                  />
                ) : (
                  <button
                    className="photoTableEachheading"
                    onClick={() => toggleFilter("photographerId")}
                  >
                    Photographer ID
                  </button>
                )}
              </th>
              <th>
                {activeFilter === "photographerName" ? (
                  <input
                    type="text"
                    value={filters.photographerName || ""}
                    onChange={(e) =>
                      handleFilterChange("photographerName", e.target.value)
                    }
                  />
                ) : (
                  <button
                    className="photoTableEachheading"
                    onClick={() => toggleFilter("photographerName")}
                  >
                    Photographer Name
                  </button>
                )}
              </th>
              <th>
                {activeFilter === "paymentOne" ? (
                  <input
                    type="text"
                    value={filters.paymentOne || ""}
                    onChange={(e) =>
                      handleFilterChange("paymentOne", e.target.value)
                    }
                  />
                ) : (
                  <button
                    className="photoTableEachheading"
                    onClick={() => toggleFilter("paymentOne")}
                  >
                    Payment 1
                  </button>
                )}
              </th>
              <th>
                {activeFilter === "otp" ? (
                  <input
                    type="text"
                    value={filters.city || ""}
                    onChange={(e) => handleFilterChange("otp", e.target.value)}
                  />
                ) : (
                  <button
                    className="photoTableEachheading"
                    onClick={() => toggleFilter("otp")}
                  >
                    OTP
                  </button>
                )}
              </th>

              <th>
                {activeFilter === "paymentTwo" ? (
                  <input
                    type="text"
                    value={filters.paymentTwo || ""}
                    onChange={(e) =>
                      handleFilterChange("paymentTwo", e.target.value)
                    }
                  />
                ) : (
                  <button
                    className="photoTableEachheading"
                    onClick={() => toggleFilter("paymentTwo")}
                  >
                    Payment 2
                  </button>
                )}
              </th>
              <th>
                {activeFilter === "paymentThree" ? (
                  <input
                    type="text"
                    value={filters.paymentThree || ""}
                    onChange={(e) =>
                      handleFilterChange("paymentThree", e.target.value)
                    }
                  />
                ) : (
                  <button
                    className="photoTableEachheading"
                    onClick={() => toggleFilter("paymentThree")}
                  >
                    Payment 3
                  </button>
                )}
              </th>
              <th>
                {activeFilter === "paidAmount" ? (
                  <input
                    type="text"
                    value={filters.paidAmount || ""}
                    onChange={(e) =>
                      handleFilterChange("paidAmount", e.target.value)
                    }
                  />
                ) : (
                  <button
                    className="photoTableEachheading"
                    onClick={() => toggleFilter("paidAmount")}
                  >
                    Paid Amount
                  </button>
                )}
              </th>
              <th>
                {activeFilter === "totalAmount" ? (
                  <input
                    type="text"
                    value={filters.totalAmount || ""}
                    onChange={(e) =>
                      handleFilterChange("totalAmount", e.target.value)
                    }
                  />
                ) : (
                  <button
                    className="photoTableEachheading"
                    onClick={() => toggleFilter("totalAmount")}
                  >
                    Total Amount
                  </button>
                )}
              </th>
            </tr>
          </thead>
          <tbody>
           
            {applyFilters().map((item) => (
              <tr key={item.eventId}>
                <td>{item.eventId}</td>
                <td>{item.eventName}</td>
                <td>{item.photographerId}</td>
                <td>{item.photographerName}</td>

                {item.paymentOne === "Not available" ? (
                  <td>
                    <button className="NotAvailPayment">Not available</button>
                  </td>
                ) : (
                  <td>
                    <td ><button className="amountInPaymentTable"> {item.paymentOne}</button></td>
                    {/* <br /> */}
                    <td>
                     <button  className="dateInPaymentTable" > {item.paymentOneDate}</button>
                    </td>
                  </td>
                )}
                <td>{item.otp}</td>
                {item.paymentTwo === "Not available" ? (
                  <td>
                    <button className="NotAvailPayment">Not available</button>
                  </td>
                ) : (
                  <td>
                    <td><button  className="amountInPaymentTable">{item.paymentTwo}</button></td>
                    {/* <br /> */}
                    <td >
                     <button className="dateInPaymentTable"> {item.paymentTwoDate}</button>
                    </td>
                  </td>
                )}
                {item.paymentThree === "Not available" ? (
                  <td>
                    <button className="NotAvailPayment">Not available</button>
                  </td>
                ) : (
                  <td>
                    <td >
                     <button className="amountInPaymentTable"> {item.paymentThree}</button>
                    </td>
                    {/* <br /> */}
                    <td >
                     <button className="dateInPaymentTable"> {item.paymentThreeDate}</button>
                    </td>
                  </td>
                )}
                <td>{item.paidAmount}</td>
                <td>{item.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payment;
