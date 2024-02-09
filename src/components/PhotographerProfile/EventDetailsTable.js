import React, { useState } from 'react';
import "./index.css"

const EventDetailsTable = () => {
  const [data, setData] = useState([
    {
      eventId: 1,
      eventName: 'Wedding',
      eventDate: '2023-06-25',
      status: 'On going',
      userId: 999090,
      userName: 'John Doe',
      paymentStatus: '1st Instalment',
    },{
        eventId: 2,
        eventName: 'Engagement',
        eventDate: '2023-06-25',
        status: 'Pending',
        userId: 999090,
        userName: 'John Doe',
        paymentStatus: '1st Instalment',
      },{
        eventId: 3,
        eventName: 'Birthday',
        eventDate: '2023-06-25',
        status: 'Pending',
        userId: 999090,
        userName: 'John Doe',
        paymentStatus: '1st Instalment',
      },{
        eventId: 4,
        eventName: 'Pre-Wedding',
        eventDate: '2023-06-25',
        status: 'On going',
        userId: 999090,
        userName: 'John Doe',
        paymentStatus: '1st Instalment',
      },{
        eventId: 5,
        eventName: 'Wedding',
        eventDate: '2023-06-25',
        status: 'On going',
        userId: 999090,
        userName: 'John Doe',
        paymentStatus: '1st Instalment',
      },
    // Add more data objects as needed
  ]);

  const [filteredData, setFilteredData] = useState([...data]);

  const handleColumnClick = (columnName) => {
    const sortedData = [...filteredData].sort((a, b) =>
      a[columnName] > b[columnName] ? 1 : -1
    );
    setFilteredData(sortedData);
  };

  return (
    <table style={{ width: '67rem' }} className="table">
      <thead>
        <tr  >
          <th onClick={() => handleColumnClick('eventId')}>Event ID</th>
          <th onClick={() => handleColumnClick('eventName')}>Event Name</th>
          <th onClick={() => handleColumnClick('eventDate')}>Event Date</th>
          <th onClick={() => handleColumnClick('status')}>Status</th>
          <th onClick={() => handleColumnClick('userId')}>User ID</th>
          <th onClick={() => handleColumnClick('userName')}>User Name</th>
          <th onClick={() => handleColumnClick('paymentStatus')}>
            Payment Status
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((row, index) => (
          <tr key={row.eventId} >
            <td className='borderForTable'>{row.eventId}</td>
            <td className='borderForTable'>{row.eventName}</td>
            <td className='borderForTable'>{row.eventDate}</td>
            <td className='borderForTable'>{row.status}</td>
            <td className='borderForTable'>{row.userId}</td>
            <td className='borderForTable'>{row.userName}</td>
            <td className='borderForTable'>{row.paymentStatus}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EventDetailsTable;
