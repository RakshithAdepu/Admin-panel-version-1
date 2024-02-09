import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";


const SingleDate = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <DatePicker placeholderText={`     Day                     ﹀ `}
        className="datePicker"
        selected={selectedDate}
        onChange={handleDateChange}
      />
     
    </div>
  );
};

export default SingleDate;
