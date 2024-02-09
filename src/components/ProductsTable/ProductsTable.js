import "./productsTable.css";
import Sidebar from "../Sidebar/Sidebar";
import React, { useState } from "react";

import AddNewProductForm from "./AddNewProductForm";

const ProductsTable = () => {

  const [data, setData] = useState([
    // Sample data...
    {
      id: 1,
      categoryName: "Camera",
      productName: "Sony A7m3 with 16-35mm f2.8 G Master lence ",
      image: "https://res.cloudinary.com/dcbgett3c/image/upload/v1687950153/front-view-hand-holding-camera_fjrpac.jpg",
      avaliablity: "In stock",
      price: "$5,000",
    },
    {
        id: 2,
        categoryName: "Lens",
        productName: "Sony A7m3 with 16-35mm f2.8 G Master lence ",
        image: "https://res.cloudinary.com/dcbgett3c/image/upload/v1687950153/front-view-hand-holding-camera_fjrpac.jpg",
        avaliablity: "In stock",
        price: "$10,000",
      },
      {
        id: 3,
        categoryName: "DSLR",
        productName: "Sony A7m3 with 16-35mm f2.8 G Master lence ",
        image: "https://res.cloudinary.com/dcbgett3c/image/upload/v1687950153/front-view-hand-holding-camera_fjrpac.jpg",
        avaliablity: "Out of stock",
        price: "$5,000",
      },
      {
        id: 4,
        categoryName: "Stand",
        productName: "Sony A7m3 with 16-35mm f2.8 G Master lence ",
        image: "https://res.cloudinary.com/dcbgett3c/image/upload/v1687950153/front-view-hand-holding-camera_fjrpac.jpg",
        avaliablity: "In stock",
        price: "$10,000",
      },
      {
        id: 5,
        categoryName: "Camera bag",
        productName: "Sony A7m3 with 16-35mm f2.8 G Master lence ",
        image: "https://res.cloudinary.com/dcbgett3c/image/upload/v1687950153/front-view-hand-holding-camera_fjrpac.jpg",
        avaliablity: "Out of stock",
        price: "$15,000",
      },
      {
        id: 6,
        categoryName: "Reels",
        productName: "Sony A7m3 with 16-35mm f2.8 G Master lence ",
        image: "https://res.cloudinary.com/dcbgett3c/image/upload/v1687950153/front-view-hand-holding-camera_fjrpac.jpg",
        avaliablity: "In stock",
        price: "$1,00,000",
      },
      {
        id: 7,
        categoryName: "Drone",
        productName: "Sony A7m3 with 16-35mm f2.8 G Master lence ",
        image: "https://res.cloudinary.com/dcbgett3c/image/upload/v1687950153/front-view-hand-holding-camera_fjrpac.jpg",
        avaliablity: "In stock",
        price: "$20,000",
      },
      {
        id: 8,
        categoryName: "Remote",
        productName: "Sony A7m3 with 16-35mm f2.8 G Master lence ",
        image: "https://res.cloudinary.com/dcbgett3c/image/upload/v1687950153/front-view-hand-holding-camera_fjrpac.jpg",
        avaliablity: "Out of stock",
        price: "$5,000",
      },
      {
        id: 9,
        categoryName: "Camera",
        productName: "Sony A7m3 with 16-35mm f2.8 G Master lence ",
        image: "https://res.cloudinary.com/dcbgett3c/image/upload/v1687950153/front-view-hand-holding-camera_fjrpac.jpg",
        avaliablity: "Out of stock",
        price: "$5,000",
      },
      {
        id: 10,
        categoryName: "Camera",
        productName: "Sony A7m3 with 16-35mm f2.8 G Master lence ",
        image: "https://res.cloudinary.com/dcbgett3c/image/upload/v1687950153/front-view-hand-holding-camera_fjrpac.jpg",
        avaliablity: "In stock",
        price: "$5,000",
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
        <h1 className="tablePageTitle">Products table</h1>
        <div className="photographerTableTopCont" >
        <input className="searchBarPhotographerTable"
            type="text"
            placeholder=  " 🔍 Search for ID, Category, Product"
            value={searchText}
            onChange={handleSearch}
          />
         
            <button type="button" className="addNewProfilePhotographerTable" onClick={() => setShowForm(true)}>+ Add new</button>
            {showForm && <AddNewProductForm onAdd={handleAdd} onClose={handleClose} />}

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
                {activeFilter === "categoryName" ? (
                  <input
                    type="text"
                    value={filters.categoryName || ""}
                    onChange={(e) => handleFilterChange("categoryName", e.target.value)}
                  />
                ) : (
                  <button
                    className="photoTableEachheading"
                    onClick={() => toggleFilter("categoryName")}
                  >
                    {" "}
                    Category Name
                  </button>
                )}
              </th>
              <th>
                {activeFilter === "productName" ? (
                  <input
                    type="text"
                    value={filters.productName || ""}
                    onChange={(e) =>
                      handleFilterChange("productName", e.target.value)
                    }
                  />
                ) : (
                  <button
                    className="photoTableEachheading"
                    onClick={() => toggleFilter("productName")}
                  >
                   Product Name
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
                    onClick={() => toggleFilter("image")}
                  >
                    Image
                  </button>
                )}
              </th>
              <th>
                {activeFilter === "avaliablity" ? (
                  <input
                    type="text"
                    value={filters.avaliablity || ""}
                    onChange={(e) => handleFilterChange("avaliablity", e.target.value)}
                  />
                ) : (
                  <button
                    className="photoTableEachheading"
                    onClick={() => toggleFilter("avaliablity")}
                  >
                    Avaliablity
                  </button>
                )}
              </th>
              <th>
                {activeFilter === "price" ? (
                  <input
                    type="text"
                    value={filters.price || ""}
                    onChange={(e) => handleFilterChange("price", e.target.value)}
                  />
                ) : (
                  <button
                    className="photoTableEachheading"
                    onClick={() => toggleFilter("price")}
                  >
                    Price
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
                <td>{item.categoryName}</td>
                <td>{item.productName}</td>
                <td><img className="imageintheproductstable" src={item.image} alt="logo"/></td>

                {item.avaliablity === "In stock" ? (
                  <td>
                    {<button className="Verifiedstyle">{item.avaliablity}</button>}
                  </td>
                ) : (
                  <td>
                    <button className="notVerifiedstyle">{item.avaliablity}</button>
                  </td>
                )}
                <td>{item.price}</td>
                <td>
                  {/* <Link to="/photographerProfile">
                    <button
                      className="action-button"
                      onClick={onClickPhotographerProfile}
                    >
                      View
                    </button>
                  </Link> */}
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

export default ProductsTable;
