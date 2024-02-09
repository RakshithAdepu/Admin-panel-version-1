import React, { useState } from 'react';

const AddNewBookingRecords = ({ onAdd, onClose }) => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        phoneNumber: '',
        email: '',
        kyc: '',
        city: '',
        status: '',
        approvedBy: ''
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

  return (
    <div className="add-form-overlay">
      <div className="add-form">
        <h2 style={{color:"#4E6BCD"}}>Add New Entry</h2>
        <form onSubmit={handleSubmit} className='addnewFormInPhotographerTable'>
          <label className='labelInTheAddnewFormPhototable'>ID No:</label>
          <input className='inputstylingforaddnewforphototable' type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}/>

          <label className='labelInTheAddnewFormPhototable'>Name:</label>
          <input className='inputstylingforaddnewforphototable'  type="text"
            name="name"
            value={formData.name}
            onChange={handleChange} />

          <label className='labelInTheAddnewFormPhototable'>Phone Number:</label>
          <input className='inputstylingforaddnewforphototable'  type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange} />

          <label className='labelInTheAddnewFormPhototable'>Email Address:</label>
          <input className='inputstylingforaddnewforphototable' type="text"
            name="email"
            value={formData.email}
            onChange={handleChange} />

          <label className='labelInTheAddnewFormPhototable'>KYC:</label>
          <input className='inputstylingforaddnewforphototable'  type="text"
            name="kyc"
            value={formData.kyc}
            onChange={handleChange}/>

          <label className='labelInTheAddnewFormPhototable'>City:</label>
          <input className='inputstylingforaddnewforphototable' type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}/>

          <label className='labelInTheAddnewFormPhototable'>Status:</label>
          <input className='inputstylingforaddnewforphototable' type="text"
            name="status"
            value={formData.status}
            onChange={handleChange} />

          <label className='labelInTheAddnewFormPhototable'>Approved By:</label>
          <input className='inputstylingforaddnewforphototable'  type="text"
            name="approvedBy"
            value={formData.approvedBy}
            onChange={handleChange} />

          <div className="button-container">
            <button type="submit" className='addNewProfilePhotographerTablebutton'>Add</button>
            <button className='Closepopupfornewentry' type="button" onClick={onClose}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewBookingRecords;
