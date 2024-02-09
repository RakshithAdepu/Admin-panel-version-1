import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const MonthPicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
  };

  return (
    <div>
      <DatePicker className='datepicker'
        selected={selectedDate}
        onChange={handleDateChange}
        showMonthYearPicker
        dateFormat="MM/yyyy"
      />
    </div>
  );
};

export default MonthPicker;