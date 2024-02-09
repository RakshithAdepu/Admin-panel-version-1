import React, { useState } from 'react';

const CategoryTable = () => {
  const [data, setData] = useState([
    {
      name: 'Wedding photography',
      basePrice: 1000,
    },{
        name: 'Wild life photography',
        basePrice: 1000,
      },{
        name: 'Pet photography',
        basePrice: 1000,
      },{
        name: 'Wedding photography',
        basePrice: 1000,
      },{
        name: 'Wedding photography',
        basePrice: 1000,
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
    <table style={{ width: '30rem' }} className="table">
      <thead>
        <tr>
          <th onClick={() => handleColumnClick('name')}>Name</th>
          <th onClick={() => handleColumnClick('basePrice')}>Base Price</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((row, index) => (
          <tr key={index}>
            <td className='borderForTable'>{row.name}</td>
            <td className='borderForTable'>{row.basePrice}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CategoryTable;
