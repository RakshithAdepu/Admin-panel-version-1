import React, { useState } from 'react';

const AddAdminOrganisation = ({ onAdd, onClose }) => {

 
    const [formData, setFormData] = useState({
        id: '',
        photo: '',
        name: '',
        userId: '',
        password: '',
        city: '',
        status: '',
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


       // id: 1,
  //     photo: "./Images/photographerProfile/profilePic.png",
  //     name: "Rakshith",
  //     userId: "Rakshith@9999",
  //     password: "Rak123",
  //     status: "Active",
  return (
    <div className="add-form-overlaySA">
      <div className="add-formSA">
        <h2  className='addnewFormHeadingSA'>Add New Admin Organization</h2>
        <form onSubmit={handleSubmit} className='addnewFormInPhotographerTableSA'>
          <label className='labelInTheAddnewFormPhototableSA'>ID No:</label>
          <input className='inputstylingforaddnewforphototableSA' type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}/>

          <label className='labelInTheAddnewFormPhototableSA'>Photo:</label>
          <input className='inputstylingforaddnewforphototableSAPhoto' type="file"
            name="photo"
            value={formData.photo}
            onChange={handleChange} />

          <label className='labelInTheAddnewFormPhototableSA'>Name:</label>
          <input className='inputstylingforaddnewforphototableSA'  type="text"
            name="name"
            value={formData.name}
            onChange={handleChange} />

          <label className='labelInTheAddnewFormPhototableSA'>User ID:</label>
          <input className='inputstylingforaddnewforphototableSA' type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange} />

          <label className='labelInTheAddnewFormPhototableSA'>Password:</label>
          <input className='inputstylingforaddnewforphototableSA'  type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}/>

          <label className='labelInTheAddnewFormPhototableSA'>Status:</label>
          <input className='inputstylingforaddnewforphototableSA' type="text"
            name="status"
            value={formData.status}
            onChange={handleChange} />

          <div className="button-containerSA">
            <button type="submit" className='addNewProfilePhotographerTablebutton'>Add</button>
            <button className='Closepopupfornewentry' type="button" onClick={onClose}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAdminOrganisation;
