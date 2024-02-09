import "./EventBookingRecords.css";
import Sidebar from "../Sidebar/Sidebar";
import React, { useState } from "react";
import AddNewBookingRecords from "./AddNewBookingRecords.";
import HistoryEventBookingRecords from "./HistoryEventBookingRecords";

const EventBookingRecords = () => {
  const [data, setData] = useState([
    // Sample data...
    {
      eventId: 1234,
      eventName: "Wedding",
      startDateAndTime: "15/05/2023,3:00PM",
      endDateAndTime: "15/05/2023,3:00PM",
      status: "Upcoming",
      photographerID: "99999",
      photographerName: "Bharath Reddy",
      userID: "222222",
      userName: "Sharath Reddy",
      location: "Hyderabad",
    },
    {
      eventId: 1234,
      eventName: "Wedding",
      startDateAndTime: "15/05/2023,3:00PM",
      endDateAndTime: "15/05/2023,3:00PM",
      status: "On going",
      photographerID: "99999",
      photographerName: "Bharath Reddy",
      userID: "222222",
      userName: "Sharath Reddy",
      location: "Hyderabad",
    },
    {
      eventId: 1234,
      eventName: "Wedding",
      startDateAndTime: "15/05/2023,3:00PM",
      endDateAndTime: "15/05/2023,3:00PM",
      status: "Rejected",
      photographerID: "99999",
      photographerName: "Bharath Reddy",
      userID: "222222",
      userName: "Sharath Reddy",
      location: "Hyderabad",
    },
    {
      eventId: 1234,
      eventName: "Wedding",
      startDateAndTime: "15/05/2023,3:00PM",
      endDateAndTime: "15/05/2023,3:00PM",
      status: "Completed",
      photographerID: "99999",
      photographerName: "Bharath Reddy",
      userID: "222222",
      userName: "Sharath Reddy",
      location: "Hyderabad",
    },
    {
      eventId: 1234,
      eventName: "Wedding",
      startDateAndTime: "15/05/2023,3:00PM",
      endDateAndTime: "15/05/2023,3:00PM",
      status: "Upcoming",
      photographerID: "99999",
      photographerName: "Bharath Reddy",
      userID: "222222",
      userName: "Sharath Reddy",
      location: "Hyderabad",
    },
    {
      eventId: 1234,
      eventName: "Wedding",
      startDateAndTime: "15/05/2023,3:00PM",
      endDateAndTime: "15/05/2023,3:00PM",
      status: "Rejected",
      photographerID: "99999",
      photographerName: "Bharath Reddy",
      userID: "222222",
      userName: "Sharath Reddy",
      location: "Hyderabad",
    },
    {
      eventId: 1234,
      eventName: "Wedding",
      startDateAndTime: "15/05/2023,3:00PM",
      endDateAndTime: "15/05/2023,3:00PM",
      status: "On going",
      photographerID: "99999",
      photographerName: "Bharath Reddy",
      userID: "222222",
      userName: "Sharath Reddy",
      location: "Hyderabad",
    },
    {
      eventId: 1234,
      eventName: "Wedding",
      startDateAndTime: "15/05/2023,3:00PM",
      endDateAndTime: "15/05/2023,3:00PM",
      status: "Upcoming",
      photographerID: "99999",
      photographerName: "Bharath Reddy",
      userID: "222222",
      userName: "Sharath Reddy",
      location: "Hyderabad",
    },
    {
      eventId: 1234,
      eventName: "Wedding",
      startDateAndTime: "15/05/2023,3:00PM",
      endDateAndTime: "15/05/2023,3:00PM",
      status: "Upcoming",
      photographerID: "99999",
      photographerName: "Bharath Reddy",
      userID: "222222",
      userName: "Sharath Reddy",
      location: "Hyderabad",
    },
    {
      eventId: 1234,
      eventName: "Wedding",
      startDateAndTime: "15/05/2023,3:00PM",
      endDateAndTime: "15/05/2023,3:00PM",
      status: "On going",
      photographerID: "99999",
      photographerName: "Bharath Reddy",
      userID: "222222",
      userName: "Sharath Reddy",
      location: "Hyderabad",
    },
    {
      eventId: 1234,
      eventName: "Wedding",
      startDateAndTime: "15/05/2023,3:00PM",
      endDateAndTime: "15/05/2023,3:00PM",
      status: "Upcoming",
      photographerID: "99999",
      photographerName: "Bharath Reddy",
      userID: "222222",
      userName: "Sharath Reddy",
      location: "Hyderabad",
    },
    {
      eventId: 1234,
      eventName: "Wedding",
      startDateAndTime: "15/05/2023,3:00PM",
      endDateAndTime: "15/05/2023,3:00PM",
      status: "Upcoming",
      photographerID: "99999",
      photographerName: "Bharath Reddy",
      userID: "222222",
      userName: "Sharath Reddy",
      location: "Hyderabad",
    },
    {
      eventId: 1234,
      eventName: "Wedding",
      startDateAndTime: "15/05/2023,3:00PM",
      endDateAndTime: "15/05/2023,3:00PM",
      status: "Rejected",
      photographerID: "99999",
      photographerName: "Bharath Reddy",
      userID: "222222",
      userName: "Sharath Reddy",
      location: "Hyderabad",
    },
  ]);
  const [showForm, setShowForm] = useState(false);

  const [clickedCurrent, setClickedCurrent] = useState(true);
  const [clickedHistory, setClickedHistory] = useState(false);

  const handleClickCurrent = () => {
    // Toggle the clicked state
    setClickedCurrent(!clickedCurrent);
    setClickedHistory(!clickedHistory);
  };

  const handleClickHistory = () => {
    // Toggle the clicked state
    setClickedHistory(!clickedHistory);
    setClickedCurrent(!clickedCurrent);
  };

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
        <h1 className="tablePageTitle">Event Details</h1>
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
            <AddNewBookingRecords onAdd={handleAdd} onClose={handleClose} />
          )}

          <button type="button" className="downloadButtonForPhotographerTable">
            ⬇ download
          </button>
        </div>
        <div className="CurrentAndHistoryContAtTop">
          <button
            className={`buttonCurrent ${
              clickedCurrent ? "clickedCurrent" : ""
            }`}
            onClick={handleClickCurrent}
          >
            Current
          </button>
          <button
            className={`buttonHistory ${
              clickedHistory ? "clickedHistory" : ""
            }`}
            onClick={handleClickHistory}
          >
            History
          </button>
        </div>
        {clickedCurrent === true ? (
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
                  {activeFilter === "startDateAndTime" ? (
                    <input
                      type="text"
                      value={filters.startDateAndTime || ""}
                      onChange={(e) =>
                        handleFilterChange("startDateAndTime", e.target.value)
                      }
                    />
                  ) : (
                    <button
                      className="photoTableEachheading"
                      onClick={() => toggleFilter("startDateAndTime")}
                    >
                      Start Date/Time
                    </button>
                  )}
                </th>
                <th>
                  {activeFilter === "endDateAndTime" ? (
                    <input
                      type="text"
                      value={filters.endDateAndTime || ""}
                      onChange={(e) =>
                        handleFilterChange("endDateAndTime", e.target.value)
                      }
                    />
                  ) : (
                    <button
                      className="photoTableEachheading"
                      onClick={() => toggleFilter("endDateAndTime")}
                    >
                      End Date/Time
                    </button>
                  )}
                </th>
                <th>
                  {activeFilter === "status" ? (
                    <input
                      type="text"
                      value={filters.status || ""}
                      onChange={(e) =>
                        handleFilterChange("status", e.target.value)
                      }
                    />
                  ) : (
                    <button
                      className="photoTableEachheading"
                      onClick={() => toggleFilter("status")}
                    >
                      Status
                    </button>
                  )}
                </th>
                <th>
                  {activeFilter === "photographerID" ? (
                    <input
                      type="text"
                      value={filters.photographerID || ""}
                      onChange={(e) =>
                        handleFilterChange("photographerID", e.target.value)
                      }
                    />
                  ) : (
                    <button
                      className="photoTableEachheading"
                      onClick={() => toggleFilter("photographerID")}
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
                      Status
                    </button>
                  )}
                </th>
                <th>
                  {activeFilter === "userID" ? (
                    <input
                      type="text"
                      value={filters.userID || ""}
                      onChange={(e) =>
                        handleFilterChange("userID", e.target.value)
                      }
                    />
                  ) : (
                    <button
                      className="photoTableEachheading"
                      onClick={() => toggleFilter("userID")}
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
                      className="photoTableEachheading"
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
                      className="photoTableEachheading"
                      onClick={() => toggleFilter("location")}
                    >
                      Location
                    </button>
                  )}
                </th>
              </tr>
            </thead>
            <tbody>
              {/* eventId: 1234,
      eventName: "Wedding",
      startDateAndTime: "15/05/2023,3:00PM",
      endDateAndTime: "15/05/2023,3:00PM",
      status: "Upcoming",
      photographerID: "99999",
      photographerName: "Bharath Reddy",
      userID: "222222",
      userName: "Sharath Reddy",
      location:"Hyderabad"
    }, */}
              {applyFilters().map((item) => (
                <tr key={item.eventId}>
                  <td>{item.eventId}</td>
                  <td>{item.eventName}</td>
                  <td>{item.startDateAndTime}</td>
                  <td>{item.endDateAndTime}</td>
                  {/* <td>{item.status}</td> */}
                  {item.status === "Completed" ? (
  <td>
    <button className="completedStatusBtn">{item.status}</button>
  </td>
) : item.status === "Rejected" ? (
  <td>
    <button className="rejectedStatusBtn">{item.status}</button>
  </td>
) : item.status === "Upcoming" ? (
  <td>
    <button className="upComingStatusBtn">{item.status}</button>
  </td>
) : (
  <td>
    <button className="onGoingStatusBtn">{item.status}</button>
  </td>
)}
                  <td>{item.photographerID}</td>
                  <td>{item.photographerName}</td>
                  <td>{item.userID}</td>
                  <td>{item.userName}</td>
                  <td>{item.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <HistoryEventBookingRecords />
        )}
      </div>
    </div>
  );
};

export default EventBookingRecords;
