import "./index.css";
import Sidebar from "../Sidebar/Sidebar";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddnewForm from "./AddnewForm"

const PhotographerTable = () => {
  const onClickPhotographerProfile = () => {};
  const [data, setData] = useState([
    // Sample data...
    {
      id: 1,
      name: "Sandeep",
      phoneNumber: "123-456-7890",
      email: "sandeep@example.com",
      kyc: "Verified",
      city: "New York",
      status: "Verified",
      approved: "Bharath Reddy",
    },
    {
      id: 2,
      name: "Ravi",
      phoneNumber: "123-456-7890",
      email: "ravi@example.com",
      kyc: "Verified",
      city: "Hyderabad",
      status: "Verified",
      approved: "Bharath Reddy",
    },
    {
      id: 3,
      name: "Rakshith",
      phoneNumber: "123-456-7890",
      email: "rakshith@example.com",
      kyc: "Verified",
      city: "Hyderabad",
      status: "Verified",
      approved: "Bharath Reddy",
    },
    {
      id: 4,
      name: "Bharath",
      phoneNumber: "123-456-7890",
      email: "bharath@example.com",
      kyc: "Not verified",
      city: "Warangal",
      status: "Verified",
      approved: "Sharath Reddy",
    },
    {
      id: 5,
      name: "Mahindra",
      phoneNumber: "123-456-7890",
      email: "mahindra@example.com",
      kyc: "Verified",
      city: "Guntur",
      status: "Verified",
      approved: "Bharath Reddy",
    },
    {
      id: 6,
      name: "Pavan",
      phoneNumber: "123-456-7890",
      email: "pavan@example.com",
      kyc: "Not verified",
      city: "Pune",
      status: "Hold",
      approved: "Sharath Reddy",
    },
    {
      id: 7,
      name: "Pooja",
      phoneNumber: "123-456-7890",
      email: "pooja@example.com",
      kyc: "Not verified",
      city: "Nagpur",
      status: "Not Verified",
      approved: "Sharath Reddy",
    },
    {
      id: 8,
      name: "Chethan",
      phoneNumber: "123-456-7890",
      email: "chethan@example.com",
      kyc: "Verified",
      city: "Secunderabad",
      status: "Verified",
      approved: "Bharath Reddy",
    },
    {
      id: 9,
      name: "Prashanth",
      phoneNumber: "123-456-7890",
      email: "prashanth@example.com",
      kyc: "Not verified",
      city: "London",
      status: "Hold",
      approved: "Sharath Reddy",
    },

    {
      id: 10,
      name: "Pravalika",
      phoneNumber: "123-456-7890",
      email: "prav@example.com",
      kyc: "Not verified",
      city: "Vizag",
      status: "Verified",
      approved: "Bharath Reddy",
    },
    {
      id: 11,
      name: "Sharavan",
      phoneNumber: "123-456-7890",
      email: "shra@example.com",
      kyc: "Not verified",
      city: "Vizag",
      status: "Hold",
      approved: "Bharath Reddy",
    },
    {
      id: 12,
      name: "Naveen",
      phoneNumber: "123-456-7890",
      email: "Nav@example.com",
      kyc: "Verified",
      city: "Vizag",
      status: "Not Verified",
      approved: "Bharath Reddy",
    },
    {
      id: 13,
      name: "Sai Nitesh",
      phoneNumber: "123-456-7890",
      email: "Sai@example.com",
      kyc: "Verified",
      city: "Vizag",
      status: "Verified",
      approved: "Sharath Reddy",
    },
    {
      id: 14,
      name: "Nikitha",
      phoneNumber: "123-456-7890",
      email: "Sai@example.com",
      kyc: "Verified",
      city: "Vizag",
      status: "Verified",
      approved: "Sharath Reddy",
    }
    
  ])
  const[showForm, setShowForm]=useState(false);

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
        <h1 className="tablePageTitle">Photographers table</h1>
        <div className="photographerTableTopCont" >
        <input className="searchBarPhotographerTable"
            type="text"
            placeholder=  " 🔍 Search for ID, Category, Name"
            value={searchText}
            onChange={handleSearch}
          />
         
            <button type="button" className="addNewProfilePhotographerTable" onClick={() => setShowForm(true)}>+ Add new</button>
            {showForm && <AddnewForm onAdd={handleAdd} onClose={handleClose} />}

            <button type="button" className="downloadButtonForPhotographerTable">⬇ download</button>
        <div >
       
          
        </div>
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
                {activeFilter === "name" ? (
                  <input
                    type="text"
                    value={filters.name || ""}
                    onChange={(e) => handleFilterChange("name", e.target.value)}
                  />
                ) : (
                  <button
                    className="photoTableEachheading"
                    onClick={() => toggleFilter("name")}
                  >
                    {" "}
                    Name
                  </button>
                )}
              </th>
              <th>
                {activeFilter === "phoneNumber" ? (
                  <input
                    type="text"
                    value={filters.phoneNumber || ""}
                    onChange={(e) =>
                      handleFilterChange("phoneNumber", e.target.value)
                    }
                  />
                ) : (
                  <button
                    className="photoTableEachheading"
                    onClick={() => toggleFilter("phoneNumber")}
                  >
                    Phone Number
                  </button>
                )}
              </th>
              <th>
                {activeFilter === "email" ? (
                  <input
                    type="text"
                    value={filters.email || ""}
                    onChange={(e) =>
                      handleFilterChange("email", e.target.value)
                    }
                  />
                ) : (
                  <button
                    className="photoTableEachheading"
                    onClick={() => toggleFilter("email")}
                  >
                    Email
                  </button>
                )}
              </th>
              <th>
                {activeFilter === "kyc" ? (
                  <input
                    type="text"
                    value={filters.kyc || ""}
                    onChange={(e) => handleFilterChange("kyc", e.target.value)}
                  />
                ) : (
                  <button
                    className="photoTableEachheading"
                    onClick={() => toggleFilter("kyc")}
                  >
                    KYC
                  </button>
                )}
              </th>
              <th>
                {activeFilter === "city" ? (
                  <input
                    type="text"
                    value={filters.city || ""}
                    onChange={(e) => handleFilterChange("city", e.target.value)}
                  />
                ) : (
                  <button
                    className="photoTableEachheading"
                    onClick={() => toggleFilter("city")}
                  >
                    City
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
                {activeFilter === "approved" ? (
                  <input
                    type="text"
                    value={filters.approved || ""}
                    onChange={(e) =>
                      handleFilterChange("approved", e.target.value)
                    }
                  />
                ) : (
                  <button
                    className="photoTableEachheading"
                    onClick={() => toggleFilter("approved")}
                  >
                    Approved by
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
                <td>{item.name}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.email}</td>
                {item.kyc === "Verified" ? (
                  <td>
                    {<button className="Verifiedstyle">{item.kyc}</button>}
                  </td>
                ) : (
                  <td>
                    <button className="notVerifiedstyle">{item.kyc}</button>
                  </td>
                )}
                <td>{item.city}</td>
                {/* {item.status === "Verified" ? (
                  <td>
                    {<button className="Verifiedstyle">{item.status}</button>}
                  </td>
                ) : (
                  <td>
                    <button className="notVerifiedstyle">{item.status}</button>
                  </td>
                ) } */}

 
{item.status === "Verified" ? (
  <td>
    <button className="Verifiedstyle">{item.status}</button>
  </td>
) : item.status === "Not Verified" ? (
  <td>
    <button className="notVerifiedstyle">{item.status}</button>
  </td>
) : (
  <td>
    <button className="holdStyles">{item.status}</button>
  </td>
)}
      
    
                
              
                <td>{item.approved}</td>

                <td>
                  <Link to="/photographerProfile">
                    <button
                      className="action-button"
                      onClick={onClickPhotographerProfile}
                    >
                      View
                    </button>
                  </Link>
                  <button className="action-button">Hold</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default PhotographerTable;
