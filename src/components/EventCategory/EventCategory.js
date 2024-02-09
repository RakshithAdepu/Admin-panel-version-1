import "./EventCategory.css";
import Sidebar from "../Sidebar/Sidebar";
import React, { useState } from "react";
import AddNewEventCategory from "./AddNewEventCategory";

const EventCategory = () => {

  const [data, setData] = useState([
    // Sample data...
    {
      id: 1,
      category: "Wedding",
      
    },
    {
      id: 2,
      category: "Engagement",
     
    },
    {
      id: 3,
      category: "Bachelor party",
      
    },
    {
      id: 4,
      category: "Wedding shower",
      
    },
    {
      id: 5,
      category: "Pre-Wedding",
      
    },
    {
      id: 6,
      category: "Wedding reception",
      
    },
    {
      id: 7,
      category: "Birthday celebration",
      
    },
    {
      id: 8,
      category: "Fashion photography",
     
    },
    {
        id: 9,
        category: "Fashion photography",
       
      },
      {
        id: 10,
        category: "Fashion photography",
       
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
        <h1 className="tablePageTitle">Event Categories</h1>
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
            <AddNewEventCategory onAdd={handleAdd} onClose={handleClose} />
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
                {activeFilter === "id" ? (
                  <input
                    type="text"
                    value={filters.id || ""}
                    onChange={(e) => handleFilterChange("id", e.target.value)}
                  />
                ) : (
                  <button
                    className="photoTableEachheading"
                    onClick={() => toggleFilter("id")}
                  >
                    ID no
                  </button>
                )}
              </th>
              <th>
                {activeFilter === "category" ? (
                  <input
                    type="text"
                    value={filters.category || ""}
                    onChange={(e) =>
                      handleFilterChange("category", e.target.value)
                    }
                  />
                ) : (
                  <button
                    className="photoTableEachheading"
                    onClick={() => toggleFilter("category")}
                  >
                    {" "}
                    Category Name
                  </button>
                )}
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applyFilters().map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.category}</td>
                <td>
                  <button className="delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventCategory;
