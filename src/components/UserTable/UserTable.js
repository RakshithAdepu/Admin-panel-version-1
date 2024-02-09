import "./userTable.css";
import Sidebar from "../Sidebar/Sidebar";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import AddnewFormUserTable from "./AddnewFormUserTable"

const UserTable = () => {
  const onClickPhotographerProfile = () => {};
  const [data, setData] = useState([
    // Sample data...
    {
      id: 1,
      name: "Sandeep",
      phoneNumber: "123-456-7890",
      email: "sandeep@example.com",
      
      city: "New York",
      joiningDate: "26-06-2023",
    
    },
    {
        id: 2,
        name: "Rakshith",
        phoneNumber: "123-456-7890",
        email: "rakshith@example.com",
        
        city: "Karimnagar",
        joiningDate: "26-06-2023",
      
      },
      {
        id: 3,
        name: "Mahindra",
        phoneNumber: "123-456-7890",
        email: "mahi@example.com",
        
        city: "Guntur",
        joiningDate: "26-06-2023",
      
      },
      {
        id: 4,
        name: "Bharath",
        phoneNumber: "123-456-7890",
        email: "bha@example.com",
        
        city: "Secunderabad",
        joiningDate: "26-06-2023",
      
      },
      {
        id: 5,
        name: "Pavan kumar",
        phoneNumber: "123-456-7890",
        email: "pk@example.com",
        
        city: "Warangal",
        joiningDate: "26-06-2023",
      
      },
      {
        id: 6,
        name: "Pooja",
        phoneNumber: "123-456-7890",
        email: "sandeep@example.com",
        
        city: "Nagpur",
        joiningDate: "26-06-2023",
      
      },
      {
        id: 7,
        name: "Nikitha",
        phoneNumber: "123-456-7890",
        email: "sandeep@example.com",
        
        city: "Hyderabad",
        joiningDate: "26-06-2023",
      
      },
      {
        id: 8,
        name: "Chethan",
        phoneNumber: "123-456-7890",
        email: "che@example.com",
        
        city: "Secunderabad",
        joiningDate: "26-06-2023",
      
      },
      {
        id: 9,
        name: "Prashanth",
        phoneNumber: "123-456-7890",
        email: "pra@example.com",
        
        city: "London",
        joiningDate: "26-06-2023",
      
      },
      {
        id: 10,
        name: "Bharath Reddy",
        phoneNumber: "123-456-7890",
        email: "BharathRed@example.com",
        
        city: "New York",
        joiningDate: "26-06-2023",
      
      },
      {
        id: 11,
        name: "Sharath Reddy",
        phoneNumber: "123-456-7890",
        email: "SR@example.com",
        
        city: "New Jersey",
        joiningDate: "26-06-2023",
      
      },
      {
        id: 12,
        name: "Shravan",
        phoneNumber: "123-456-7890",
        email: "sandeep@example.com",
        
        city: "Warangal",
        joiningDate: "26-06-2023",
      
      },
      {
        id: 13,
        name: "Karunakar",
        phoneNumber: "123-456-7890",
        email: "Puli@example.com",
        
        city: "Hyderabad",
        joiningDate: "26-06-2023",
      
      },
   
    
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
      <h1 className="tablePageTitle">User table</h1>
        <div className="photographerTableTopCont" >
        <input className="searchBarPhotographerTable"
            type="text"
            placeholder=  " 🔍 Search for ID, City, Name"
            value={searchText}
            onChange={handleSearch}
          />
         
            <button type="button" className="addNewProfilePhotographerTable" onClick={() => setShowForm(true)}>+ Add new</button>
            {showForm && <AddnewFormUserTable onAdd={handleAdd} onClose={handleClose} />}

            <button type="button" className="downloadButtonForPhotographerTable">⬇ download</button>
        <div >
       
          
        </div>
        </div>
        <table  className="table">
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
                {activeFilter === "joiningDate" ? (
                  <input
                    type="text"
                    value={filters.joiningDate || ""}
                    onChange={(e) =>
                      handleFilterChange("joiningDate", e.target.value)
                    }
                  />
                ) : (
                  <button
                    className="photoTableEachheading"
                    onClick={() => toggleFilter("joiningDate")}
                  >
                    Joining Date
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
                <td>{item.city}</td>
                <td>{item.joiningDate}</td>
                <td>
                    <button
                      className="delete-button"
                      onClick={onClickPhotographerProfile}
                    >
                      Delete
                    </button>
                
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default UserTable;
