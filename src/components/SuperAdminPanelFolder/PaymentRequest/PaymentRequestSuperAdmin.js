import "./PaymentRequestSuperAdminCss.css";
import SidebarSuperAdmin from "../SidebarSuperAdmin/SidebarSuperAdmin";
import React, { useState } from "react";

const PaymentRequestSuperAdmin = () => {
  const [data, setData] = useState([
    // Sample data...
    {
      id: 1234,
      eventDate: "02/06/2023",
      eventName: "Wedding",
      photographerId: "1234",
      photographerName: "Bharath Reddy",
      userId: "1234",
      userName: "Sharath Reddy",
      location: "Hyderabad",
      totalAmount: "18000",
    },
    {
      id: 3333,
      eventDate: "02/06/2023",
      eventName: "Wedding",
      photographerId: "1234",
      photographerName: "Bharath Reddy",
      userId: "1234",
      userName: "Sharath Reddy",
      location: "Hyderabad",
      totalAmount: "18000",
    },
    {
      id: 2222,
      eventDate: "02/06/2023",
      eventName: "Wedding",
      photographerId: "1234",
      photographerName: "Bharath Reddy",
      userId: "1234",
      userName: "Sharath Reddy",
      location: "Hyderabad",
      totalAmount: "18000",
    },
    {
      id: 4444,
      eventDate: "02/06/2023",
      eventName: "Wedding",
      photographerId: "1234",
      photographerName: "Bharath Reddy",
      userId: "1234",
      userName: "Sharath Reddy",
      location: "Hyderabad",
      totalAmount: "18000",
    },
    {
      id: 5555,
      eventDate: "02/06/2023",
      eventName: "Wedding",
      photographerId: "1234",
      photographerName: "Bharath Reddy",
      userId: "1234",
      userName: "Sharath Reddy",
      location: "Hyderabad",
      totalAmount: "18000",
    },
    {
      id: 6666,
      eventDate: "02/06/2023",
      eventName: "Wedding",
      photographerId: "1234",
      photographerName: "Bharath Reddy",
      userId: "1234",
      userName: "Sharath Reddy",
      location: "Hyderabad",
      totalAmount: "18000",
    },
    {
      id: 7777,
      eventDate: "02/06/2023",
      eventName: "Wedding",
      photographerId: "1234",
      photographerName: "Bharath Reddy",
      userId: "1234",
      userName: "Sharath Reddy",
      location: "Hyderabad",
      totalAmount: "18000",
    },
    {
      id: 8888,
      eventDate: "02/06/2023",
      eventName: "Wedding",
      photographerId: "1234",
      photographerName: "Bharath Reddy",
      userId: "1234",
      userName: "Sharath Reddy",
      location: "Hyderabad",
      totalAmount: "18000",
    },
    {
      id: 9999,
      eventDate: "02/06/2023",
      eventName: "Wedding",
      photographerId: "1234",
      photographerName: "Bharath Reddy",
      userId: "1234",
      userName: "Sharath Reddy",
      location: "Hyderabad",
      totalAmount: "18000",
    },
  ]);

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


  const handleDeny = (recordId) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === recordId ? { ...item, status: "denied" } : item
      )
    );
  };

  const handleAccept = (recordId) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === recordId ? { ...item, status: "accepted" } : item
      )
    );
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
    <div className="photographerTableOverallContSA">
      <SidebarSuperAdmin />
      <div className="table-containerSA">
        <h1 className="tablePageTitleSA">Admin organization </h1>
        <div className="photographerTableTopContSA">
          <input
            className="searchBarPhotographerTableSA"
            type="text"
            placeholder=" 🔍 Search for ID, Category, Name"
            value={searchText}
            onChange={handleSearch}
          />

          <div></div>
        </div>
        <table className="tableSA">
          <thead className="photographerTableHeadingSA">
            <tr>
              <th>
                {activeFilter === "id" ? (
                  <input
                    type="text"
                    value={filters.id || ""}
                    onChange={(e) => handleFilterChange("id", e.target.value)}
                  />
                ) : (
                  <button
                    className="photoTableEachheadingSA"
                    onClick={() => toggleFilter("id")}
                  >
                    Event ID
                  </button>
                )}
              </th>
              <th>
                {activeFilter === "eventDate" ? (
                  <input
                    type="text"
                    value={filters.eventDate || ""}
                    onChange={(e) =>
                      handleFilterChange("eventDate", e.target.value)
                    }
                  />
                ) : (
                  <button
                    className="photoTableEachheadingSA"
                    onClick={() => toggleFilter("eventDate")}
                  >
                    {" "}
                    Event Date
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
                    className="photoTableEachheadingSA"
                    onClick={() => toggleFilter("eventName")}
                  >
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
                    className="photoTableEachheadingSA"
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
                    className="photoTableEachheadingSA"
                    onClick={() => toggleFilter("photographerName")}
                  >
                    Photographer Name
                  </button>
                )}
              </th>

              <th>
                {activeFilter === "userId" ? (
                  <input
                    type="text"
                    value={filters.userId || ""}
                    onChange={(e) =>
                      handleFilterChange("userId", e.target.value)
                    }
                  />
                ) : (
                  <button
                    className="photoTableEachheadingSA"
                    onClick={() => toggleFilter("userId")}
                  >
                    User ID
                  </button>
                )}
              </th>

              <th>
                {activeFilter === "userName" ? (
                  <input
                    type="text"
                    value={filters.userName || ""}
                    onChange={(e) =>
                      handleFilterChange("userName", e.target.value)
                    }
                  />
                ) : (
                  <button
                    className="photoTableEachheadingSA"
                    onClick={() => toggleFilter("userName")}
                  >
                    User Name
                  </button>
                )}
              </th>

              <th>
                {activeFilter === "location" ? (
                  <input
                    type="text"
                    value={filters.location || ""}
                    onChange={(e) =>
                      handleFilterChange("location", e.target.value)
                    }
                  />
                ) : (
                  <button
                    className="photoTableEachheadingSA"
                    onClick={() => toggleFilter("location")}
                  >
                    Location
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
                    className="photoTableEachheadingSA"
                    onClick={() => toggleFilter("totalAmount")}
                  >
                    Total Amount
                  </button>
                )}
              </th>

              <th>Approval Request</th>
            </tr>
          </thead>
          <tbody>
            {applyFilters().map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.eventDate}</td>
                <td>{item.eventName}</td>
                <td>{item.photographerId}</td>
                <td>{item.photographerName}</td>
                <td>{item.userId}</td>
                <td>{item.userName}</td>
                <td>{item.location}</td>
                <td>{item.totalAmount}</td>

                <td>
                 
                {item.status === "denied" ? (
                  <span className="statusDenied">Denied</span>
                ) : item.status === "accepted" ? (
                  <span className="statusAccepted">Accepted</span>
                ) : (
                  <div>
                    <button
                      type="button"
                      className="DenyButtonSA"
                      onClick={() => handleDeny(item.id)}
                    >
                      Deny
                    </button>
                    <button
                      type="button"
                      className="AcceptButtonSA"
                      onClick={() => handleAccept(item.id)}
                    >
                      Accept
                    </button>
                  </div>
                )}




                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentRequestSuperAdmin;
