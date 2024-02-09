import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";


const Todate = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <DatePicker placeholderText={`     Select the end date   ﹀ `}
        className="Todate"
        selected={selectedDate}
        onChange={handleDateChange}
      />
     
    </div>
  );
};

export default Todate;
