import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";


const FromDate = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <DatePicker placeholderText={`     Select the start date   ﹀ `}
        className="fromDate"
        selected={selectedDate}
        onChange={handleDateChange}
      />
     
    </div>
  );
};

export default FromDate;
