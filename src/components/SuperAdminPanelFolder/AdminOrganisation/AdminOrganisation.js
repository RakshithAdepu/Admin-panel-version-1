import "./AdminOrganisationCss.css";
import SidebarSuperAdmin from "../SidebarSuperAdmin/SidebarSuperAdmin";
import React, { useState } from "react";
import AddAdminOrganisation from "./AddAdminOrganisation";

const AdminOrganisation = () => {

  const [data, setData] = useState([
    // Sample data...
    {
      id: 1,
      photo: "./Images/photographerProfile/profilePic.png",
      name: "Rakshith",
      userId: "Rakshith@9999",
      password: "Rak123",
      status: "Active",
    },
    
      {
        id: 2,
        photo: "./Images/photographerProfile/profilePic.png",
        name: "Vamshi",
        userId: "Vamshi@9999",
        password: "Vam123",
        status: "In Active",
      },
      {
        id: 3,
        photo: "./Images/photographerProfile/profilePic.png",
        name: "Bharathi",
        userId: "Bhar@9999",
        password: "Bar999",
        status: "Active",
      },
      {
        id: 4,
        photo: "./Images/photographerProfile/profilePic.png",
        name: "Vinod",
        userId: "Vinod@9999",
        password: "Vin111",
        status: "Active",
      },
      {
        id: 5,
        photo: "./Images/photographerProfile/profilePic.png",
        name: "Varsha",
        userId: "Varsha@9999",
        password: "Var123",
        status: "In Active",
      },
      {
        id: 6,
        photo: "./Images/photographerProfile/profilePic.png",
        name: "Vasundara",
        userId: "Vasu@9999",
        password: "Vas234",
        status: "In Active",
      },
      {
        id: 7,
        photo: "./Images/photographerProfile/profilePic.png",
        name: "Bharath",
        userId: "Bhar@9999",
        password: "Bar345",
        status: "Active",
      },
      {
        id: 8,
        photo: "./Images/photographerProfile/profilePic.png",
        name: "John",
        userId: "Rakshith@9999",
        password: "Rak123",
        status: "In Active",
      },
      {
        id: 9,
        photo: "./Images/photographerProfile/profilePic.png",
        name: "Rakshith",
        userId: "Rakshith@9999",
        password: "Rak123",
        status: "Active",
      },
    
  ])
  const[showForm, setShowForm]=useState(false);
  

  const onClickPhotographerProfile = (id) => {

    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, isHold: !item.isHold } : item
      )
    );
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
    <div className="photographerTableOverallContSA">
      <SidebarSuperAdmin />
      <div className="table-containerSA">
        <h1 className="tablePageTitleSA">Admin organization </h1>
        <div className="photographerTableTopContSA" >
        <input className="searchBarPhotographerTableSA"
            type="text"
            placeholder=  " 🔍 Search for ID, Category, Name"
            value={searchText}
            onChange={handleSearch}
          />
         
            <button type="button" className="addNewProfilePhotographerTableSA" onClick={() => setShowForm(true)}>+ Add new</button>
            {showForm && <AddAdminOrganisation onAdd={handleAdd} onClose={handleClose} />}

            <button type="button" className="downloadButtonForPhotographerTableSA">⬇ download</button>
        <div >
       
          
        </div>
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
                    ID no
                  </button>
                )}
              </th>
              <th>
                {activeFilter === "photo" ? (
                  <input
                    type="text"
                    value={filters.photo || ""}
                    onChange={(e) => handleFilterChange("photo", e.target.value)}
                  />
                ) : (
                  <button
                    className="photoTableEachheadingSA"
                    onClick={() => toggleFilter("photo")}
                  >
                    {" "}
                    Photo
                  </button>
                )}
              </th>
              <th>
                {activeFilter === "name" ? (
                  <input
                    type="text"
                    value={filters.name || ""}
                    onChange={(e) =>
                      handleFilterChange("name", e.target.value)
                    }
                  />
                ) : (
                  <button
                    className="photoTableEachheadingSA"
                    onClick={() => toggleFilter("name")}
                  >
                    Name
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
                {activeFilter === "password" ? (
                  <input
                    type="text"
                    value={filters.password || ""}
                    onChange={(e) => handleFilterChange("password", e.target.value)}
                  />
                ) : (
                  <button
                    className="photoTableEachheadingSA"
                    onClick={() => toggleFilter("password")}
                  >
                    Password
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
                    className="photoTableEachheadingSA"
                    onClick={() => toggleFilter("status")}
                  >
                    Status
                  </button>
                )}
              </th>
              
              <th>Hold</th>
            </tr>
          </thead>
          <tbody>

          {/* id: 1,
      photo: "./Images/photographerProfile/profilePic.png",
      name: "Rakshith",
      userId: "Rakshith@9999",
      password: "Rak123",
      status: "Active", */}
            {applyFilters().map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{<img className="imageSAinAdminOrg" src="./Images/photographerProfile/profilePic.png" alt="profileImg"/>}</td>
                <td>{item.name}</td>
                <td>{item.userId}</td>
                <td>{item.password}</td>
               
                
                {/* {item.status === "Verified" ? (
                  <td>
                    {<button className="Verifiedstyle">{item.status}</button>}
                  </td>
                ) : (
                  <td>
                    <button className="notVerifiedstyle">{item.status}</button>
                  </td>
                ) } */}

 
{item.status === "Active" ? (
  <td>
    <button className="VerifiedstyleSA">{item.status}</button>
  </td>
) : item.status === "In Active" ? (
  <td>
    <button className="notVerifiedstyleSA">{item.status}</button>
  </td>
) : (
  <td>
    <button className="holdStylesSA">{item.status}</button>
  </td>
)}
      
    
                
              

                <td>
                 
                    <button
                      className="action-buttonSA"
                      onClick={() => onClickPhotographerProfile(item.id)}
                >
                  {item.isHold ? "Unhold" : "Hold"}
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

export default AdminOrganisation;
