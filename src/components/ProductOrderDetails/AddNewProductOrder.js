import React, { useState } from 'react';

const AddNewProductOrder = ({ onAdd, onClose }) => {

    const [formData, setFormData] = useState({
        orderId: '',
        productName: '',
        productCategory: '',
        orderStatus: '',
        receivedDate: '',
        totalCost: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(formData);
        onClose();
      };
    //   orderId: '',
    //   productName: '',
    //   productCategory: '',
    //   orderStatus: '',
    //   receivedDate: '',
    //   totalCost: '',
  return (
    <div className="add-form-overlay">
      <div className="add-form">
        <h2 style={{color:"#4E6BCD"}}>Add New Product order Details</h2>
        <form onSubmit={handleSubmit} className='addnewFormInPhotographerTable'>
          <label className='labelInTheAddnewFormPhototable'>Order No:</label>
          <input className='inputstylingforaddnewforphototable' type="text"
            name="orderId"
            value={formData.orderId}
            onChange={handleChange}/>

          <label className='labelInTheAddnewFormPhototable'>Product Name:</label>
          <input className='inputstylingforaddnewforphototable'  type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange} />

          <label className='labelInTheAddnewFormPhototable'>Product Category:</label>
          <input className='inputstylingforaddnewforphototable'  type="text"
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange} />

          <label className='labelInTheAddnewFormPhototable'>Order Status:</label>
          <input className='inputstylingforaddnewforphototable' type="text"
            name="orderStatus"
            value={formData.orderStatus}
            onChange={handleChange} />

          <label className='labelInTheAddnewFormPhototable'>Received Date:</label>
          <input className='inputstylingforaddnewforphototable'  type="text"
            name="receivedDate"
            value={formData.receivedDate}
            onChange={handleChange}/>

          <label className='labelInTheAddnewFormPhototable'>Total Cost:</label>
          <input className='inputstylingforaddnewforphototable' type="text"
            name="totalCost"
            value={formData.totalCost}
            onChange={handleChange}/>

    

          <div className="button-container">
            <button type="submit" className='addNewProfilePhotographerTablebutton'>Add</button>
            <button className='Closepopupfornewentry' type="button" onClick={onClose}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewProductOrder;
