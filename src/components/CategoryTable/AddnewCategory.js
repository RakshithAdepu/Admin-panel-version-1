import "./CategoryMainTable.css"
import React, { useState } from "react";

const AddnewCategory = ({ onAdd, onClose }) => {
  const [formData, setFormData] = useState({
    id: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
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
        <h2 style={{ color: "#4E6BCD" }}>Add New Category Entry</h2>
        <form onSubmit={handleSubmit} className="addnewFormInPhotographerTable">
          <label className="labelInTheAddnewFormPhototable">ID No:</label>
          <input
            className="inputstylingforaddnewforphototable"
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
          />

          <label className="labelInTheAddnewFormPhototable">Category Name:</label>
          <input
            className="inputstylingforaddnewforphototable"
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />

          

          <label className="labelInTheAddnewFormPhototable">
          Image:
          </label>
          <input
            className="inputstylingforaddnewforphototable"
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />

         

          <div className="button-container">
            <button
              type="submit"
              className="addNewProfilePhotographerTablebutton"
            >
              Add
            </button>
            <button
              className="Closepopupfornewentry"
              type="button"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddnewCategory;
