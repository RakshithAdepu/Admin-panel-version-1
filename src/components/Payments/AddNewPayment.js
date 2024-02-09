import React, { useState } from "react";

const AddnewForm = ({ onAdd, onClose }) => {
  const [formData, setFormData] = useState({
    eventId: "",
    eventName: "",
    photographerId: "",
    photographerName: "",
    paymentOne: "",
    paymentOneDate: "",
    otp: "",
    paymentTwo: "",
    paymentTwoDate: "",
    paymentThree: "",
    paymentThreeeDate: "",
    paidAmount: "",
    totalAmount: "",
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
        <h2 style={{ color: "#4E6BCD" }}>Add New Payment Record</h2>
        <form onSubmit={handleSubmit} className="addnewFormInPhotographerTable">
          <label className="labelInTheAddnewFormPhototable">Event No:</label>
          <input
            className="inputstylingforaddnewforphototable"
            type="text"
            name="eventId"
            value={formData.eventId}
            onChange={handleChange}
          />

          <label className="labelInTheAddnewFormPhototable">Event Name:</label>
          <input
            className="inputstylingforaddnewforphototable"
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
          />

          <label className="labelInTheAddnewFormPhototable">
            Photographer ID:
          </label>
          <input
            className="inputstylingforaddnewforphototable"
            type="text"
            name="photographerId"
            value={formData.photographerId}
            onChange={handleChange}
          />

          <label className="labelInTheAddnewFormPhototable">
            Photographer Name:
          </label>
          <input
            className="inputstylingforaddnewforphototable"
            type="text"
            name="photographerName"
            value={formData.photographerName}
            onChange={handleChange}
          />

          <label className="labelInTheAddnewFormPhototable">Payment 1:</label>
          <input
            className="inputstylingforaddnewforphototable"
            type="text"
            name="paymentOne"
            value={formData.paymentOne}
            onChange={handleChange}
          />

          <label className="labelInTheAddnewFormPhototable">
            Payment One Date:
          </label>
          <input
            className="inputstylingforaddnewforphototable"
            type="text"
            name="paymentOneDate"
            value={formData.paymentOneDate}
            onChange={handleChange}
          />

          <label className="labelInTheAddnewFormPhototable">OTP:</label>
          <input
            className="inputstylingforaddnewforphototable"
            type="text"
            name="otp"
            value={formData.otp}
            onChange={handleChange}
          />

          <label className="labelInTheAddnewFormPhototable">Payment 2:</label>
          <input
            className="inputstylingforaddnewforphototable"
            type="text"
            name="paymentTwo"
            value={formData.paymentTwo}
            onChange={handleChange}
          />

          <label className="labelInTheAddnewFormPhototable">
            Payment Second Date:
          </label>
          <input
            className="inputstylingforaddnewforphototable"
            type="text"
            name="paymentTwoDate"
            value={formData.paymentTwoDate}
            onChange={handleChange}
          />
          <label className="labelInTheAddnewFormPhototable">Payment 3 :</label>
          <input
            className="inputstylingforaddnewforphototable"
            type="text"
            name="paymentThree"
            value={formData.paymentThree}
            onChange={handleChange}
          />
          <label className="labelInTheAddnewFormPhototable">
            Payment Third Date:
          </label>
          <input
            className="inputstylingforaddnewforphototable"
            type="text"
            name="paymentThreeDate"
            value={formData.paymentThreeDate}
            onChange={handleChange}
          />

<label className="labelInTheAddnewFormPhototable">
            Paid Amount:
          </label>
          <input
            className="inputstylingforaddnewforphototable"
            type="text"
            name="paidAmount"
            value={formData.paidAmount}
            onChange={handleChange}
          />

<label className="labelInTheAddnewFormPhototable">
            Total Amount:
          </label>
          <input
            className="inputstylingforaddnewforphototable"
            type="text"
            name="totalAmount"
            value={formData.totalAmount}
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

export default AddnewForm;
