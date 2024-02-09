import React, { useState } from 'react';

const EquipmentDetailsTable = () => {
  const [data, setData] = useState([
    {
      serialNumber: 1,
      categoryName: 'Camera',
      productName: 'Sony A7m3 with 16-35mm f2.8 G Master lence ',
      perHourPrice: "Rs.2500",
      charges: "Rs.1000",
    },{
      serialNumber: 1,
      categoryName: 'Lense',
      productName: 'Sony A7m3 with 16-35mm f2.8 G Master lence ',
      perHourPrice: "Rs.2500",
      charges: "Rs.1000",
    },{
      serialNumber: 1,
      categoryName: 'Drone',
      productName: 'Sony A7m3 with 16-35mm f2.8 G Master lence ',
      perHourPrice: "Rs.2500",
      charges: "Rs.1000",
    },{
      serialNumber: 1,
      categoryName: 'Digital Album',
      productName: 'Sony A7m3 with 16-35mm f2.8 G Master lence ',
      perHourPrice: "Rs.2500",
      charges: "Rs.1000",
    },{
      serialNumber: 1,
      categoryName: 'Album 1',
      productName: 'Sony A7m3 with 16-35mm f2.8 G Master lence ',
      perHourPrice: "Rs.2500",
      charges: "Rs.1000",
    },
    // Add more data objects as needed
  ]);

  console.log(setData)

  const [filteredData, setFilteredData] = useState([...data]);

  const handleColumnClick = (columnName) => {
    const sortedData = [...filteredData].sort((a, b) =>
      a[columnName] > b[columnName] ? 1 : -1
    );
    setFilteredData(sortedData);
  };

  return (
    <table style={{ width: '69rem' }} className="table">
      <thead>
        <tr>
          <th onClick={() => handleColumnClick('serialNumber')}>Serial Number</th>
          <th onClick={() => handleColumnClick('categoryName')}>Category Name</th>
          <th onClick={() => handleColumnClick('productName')}>Product Name</th>
          <th onClick={() => handleColumnClick('perHourPrice')}>Per Hour Price</th>
          <th onClick={() => handleColumnClick('charges')}>Charges</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((row, index) => (
          <tr key={row.serialNumber}>
            <td className='borderForTable'>{row.serialNumber}</td>
            <td className='borderForTable'>{row.categoryName}</td>
            <td className='borderForTable'>{row.productName}</td>
            <td className='borderForTable'>{row.perHourPrice}</td>
            <td className='borderForTable'>{row.charges}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EquipmentDetailsTable;
