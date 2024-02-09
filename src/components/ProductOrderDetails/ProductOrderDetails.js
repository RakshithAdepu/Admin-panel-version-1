import "./ProductOrderDetails.css";
import Sidebar from "../Sidebar/Sidebar";
import React, { useState } from "react";
import AddNewProductOrder from "./AddNewProductOrder"

const ProductOrderDetails = () => {
  
  const [data, setData] = useState([
    // Sample data...
    {
      orderId: 1234,
      productName: "Sony A7m3 with 16-35mm f2.8 G Master lens ",
      productCategory: "Lens",
      orderStatus: "Received",
     receivedDate: "02/06/2023",
     totalCost: "₹50,000",
    },
    {
        orderId: 1234,
        productName: "Sony A7m3 with 16-35mm f2.8 G Master lens ",
        productCategory: "Lens",
        orderStatus: "Dispatched",
       receivedDate: "02/06/2023",
       totalCost: "₹50,000",
      },
      {
        orderId: 1234,
        productName: "Sony A7m3 with 16-35mm f2.8 G Master lens ",
        productCategory: "Lens",
        orderStatus: "Completed",
       receivedDate: "02/06/2023",
       totalCost: "₹50,000",
      },
      {
        orderId: 1234,
        productName: "Sony A7m3 with 16-35mm f2.8 G Master lens ",
        productCategory: "Lens",
        orderStatus: "Received",
       receivedDate: "02/06/2023",
       totalCost: "₹50,000",
      },
      {
          orderId: 1234,
          productName: "Sony A7m3 with 16-35mm f2.8 G Master lens ",
          productCategory: "Lens",
          orderStatus: "Dispatched",
         receivedDate: "02/06/2023",
         totalCost: "₹50,000",
        },
        {
          orderId: 1234,
          productName: "Sony A7m3 with 16-35mm f2.8 G Master lens ",
          productCategory: "Lens",
          orderStatus: "Completed",
         receivedDate: "02/06/2023",
         totalCost: "₹50,000",
        },
        {
            orderId: 1234,
            productName: "Sony A7m3 with 16-35mm f2.8 G Master lens ",
            productCategory: "Lens",
            orderStatus: "Received",
           receivedDate: "02/06/2023",
           totalCost: "₹50,000",
          },
          {
              orderId: 1234,
              productName: "Sony A7m3 with 16-35mm f2.8 G Master lens ",
              productCategory: "Lens",
              orderStatus: "Dispatched",
             receivedDate: "02/06/2023",
             totalCost: "₹50,000",
            },
            {
              orderId: 1234,
              productName: "Sony A7m3 with 16-35mm f2.8 G Master lens ",
              productCategory: "Lens",
              orderStatus: "Completed",
             receivedDate: "02/06/2023",
             totalCost: "₹50,000",
            },
            {
                orderId: 1234,
                productName: "Sony A7m3 with 16-35mm f2.8 G Master lens ",
                productCategory: "Lens",
                orderStatus: "Received",
               receivedDate: "02/06/2023",
               totalCost: "₹50,000",
              },
              {
                  orderId: 1234,
                  productName: "Sony A7m3 with 16-35mm f2.8 G Master lens ",
                  productCategory: "Lens",
                  orderStatus: "Dispatched",
                 receivedDate: "02/06/2023",
                 totalCost: "₹50,000",
                },
                {
                  orderId: 1234,
                  productName: "Sony A7m3 with 16-35mm f2.8 G Master lens ",
                  productCategory: "Lens",
                  orderStatus: "Completed",
                 receivedDate: "02/06/2023",
                 totalCost: "₹50,000",
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
        <h1 className="tablePageTitle">Product order details</h1>
        <div className="photographerTableTopCont" >
        <input className="searchBarPhotographerTable"
            type="text"
            placeholder=  " 🔍 Search for ID, Category, Name"
            value={searchText}
            onChange={handleSearch}
          />
         
            <button type="button" className="addNewProfilePhotographerTable" onClick={() => setShowForm(true)}>+ Add new</button>
            {showForm && <AddNewProductOrder onAdd={handleAdd} onClose={handleClose} />}

            <button type="button" className="downloadButtonForPhotographerTable">⬇ download</button>
        <div >
       
          
        </div>
        </div>
        <table className="table">
          <thead className="photographerTableHeading">
            <tr>
              <th>

                {activeFilter === "orderId" ? (
                  <input
                    type="text"
                    value={filters.orderId || ""}
                    onChange={(e) => handleFilterChange("orderId", e.target.value)}
                  />
                ) : (
                  <button
                    className="photoTableEachheading"
                    onClick={() => toggleFilter("orderId")}
                  >
                    Order no
                  </button>
                )}
              </th>
              <th>
                {activeFilter === "productName" ? (
                  <input
                    type="text"
                    value={filters.productName || ""}
                    onChange={(e) => handleFilterChange("productName", e.target.value)}
                  />
                ) : (
                  <button
                    className="photoTableEachheading"
                    onClick={() => toggleFilter("productName")}
                  >
                    {" "}
                    Product Name
                  </button>
                )}
              </th>
              <th>
                {activeFilter === "productCategory" ? (
                  <input
                    type="text"
                    value={filters.productCategory || ""}
                    onChange={(e) =>
                      handleFilterChange("productCategory", e.target.value)
                    }
                  />
                ) : (
                  <button
                    className="photoTableEachheading"
                    onClick={() => toggleFilter("productCategory")}
                  >
                    Product Category
                  </button>
                )}
              </th>
             
              
           

              <th>
                {activeFilter === "orderStatus" ? (
                  <input
                    type="text"
                    value={filters.orderStatus || ""}
                    onChange={(e) =>
                      handleFilterChange("orderStatus", e.target.value)
                    }
                  />
                ) : (
                  <button
                    className="photoTableEachheading"
                    onClick={() => toggleFilter("orderStatus")}
                  >
                    Order status
                  </button>
                )}
              </th>
              <th>
                {activeFilter === "receivedDate" ? (
                  <input
                    type="text"
                    value={filters.receivedDate || ""}
                    onChange={(e) =>
                      handleFilterChange("receivedDate", e.target.value)
                    }
                  />
                ) : (
                  <button
                    className="photoTableEachheading"
                    onClick={() => toggleFilter("receivedDate")}
                  >
                    Received Date
                  </button>
                )}
              </th>
              <th>
                {activeFilter === "totalCost" ? (
                  <input
                    type="text"
                    value={filters.totalCost || ""}
                    onChange={(e) =>
                      handleFilterChange("totalCost", e.target.value)
                    }
                  />
                ) : (
                  <button
                    className="photoTableEachheading"
                    onClick={() => toggleFilter("totalCost")}
                  >
                    Total Cost
                  </button>
                )}
              </th>
             
            </tr>
          </thead>
          <tbody>

            
              {/* orderId: 1,
      productName: "Sandeep",
      ptoductCategory: "123-456-7890",
      orderStatus: "Verified",
     receivedDate: "02/06/2023",
     totalCost: "50,000", */}
            {applyFilters().map((item) => (
              <tr key={item.orderId}>
                <td>{item.orderId}</td>
                <td>{item.productName}</td>
                <td>{item.productCategory}</td>
               
         

 
{item.orderStatus === "Received" ? (
  <td>
    <button className="onGoingStatusBtn">{item.orderStatus}</button>
  </td>
) : item.orderStatus === "Dispatched" ? (
  <td>
    <button className="upComingStatusBtn">{item.orderStatus}</button>
  </td>
) : (
  <td>
    <button className="completedStatusBtn">{item.orderStatus}</button>
  </td>
)}

  <td>{item.receivedDate}</td>    
  <td>{item.totalCost}</td>    
    
                
              
               

               
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default ProductOrderDetails;
