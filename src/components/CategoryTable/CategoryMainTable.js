import "./CategoryMainTable.css";
import Sidebar from "../Sidebar/Sidebar";
import React, { useState } from "react";
import AddnewCategory from "./AddnewCategory";

const CategoryMainTable = () => {

  const [data, setData] = useState([
    // Sample data...
    {
      id: 1,
      category: "Lens",
      image:
        "https://res.cloudinary.com/dcbgett3c/image/upload/v1687950153/front-view-hand-holding-camera_fjrpac.jpg",
    },
    {
      id: 2,
      category: "Camera",
      image:
        "https://res.cloudinary.com/dcbgett3c/image/upload/v1687950153/front-view-hand-holding-camera_fjrpac.jpg",
    },
    {
      id: 3,
      category: "Camera",
      image:
        "https://res.cloudinary.com/dcbgett3c/image/upload/v1687950153/front-view-hand-holding-camera_fjrpac.jpg",
    },
    {
      id: 4,
      category: "Camera",
      image:
        "https://res.cloudinary.com/dcbgett3c/image/upload/v1687950153/front-view-hand-holding-camera_fjrpac.jpg",
    },
    {
      id: 5,
      category: "Camera",
      image:
        "https://res.cloudinary.com/dcbgett3c/image/upload/v1687950153/front-view-hand-holding-camera_fjrpac.jpg",
    },
    {
      id: 6,
      category: "Camera",
      image:
        "https://res.cloudinary.com/dcbgett3c/image/upload/v1687950153/front-view-hand-holding-camera_fjrpac.jpg",
    },
    {
      id: 7,
      category: "Camera",
      image:
        "https://res.cloudinary.com/dcbgett3c/image/upload/v1687950153/front-view-hand-holding-camera_fjrpac.jpg",
    },
    {
      id: 8,
      category: "Camera",
      image:
        "https://res.cloudinary.com/dcbgett3c/image/upload/v1687950153/front-view-hand-holding-camera_fjrpac.jpg",
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
        <h1 className="tablePageTitle">Product Categories</h1>
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
            <AddnewCategory onAdd={handleAdd} onClose={handleClose} />
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
              <th>
                {activeFilter === "image" ? (
                  <input
                    type="text"
                    value={filters.image || ""}
                    onChange={(e) =>
                      handleFilterChange("image", e.target.value)
                    }
                  />
                ) : (
                  <button
                    className="photoTableEachheading"
                    onClick={() => toggleFilter("phoneNumber")}
                  >
                    Image
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
                  <img
                    className="imageintheproductstable"
                    src={item.image}
                    alt="logo"
                  />
                </td>

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

export default CategoryMainTable;
