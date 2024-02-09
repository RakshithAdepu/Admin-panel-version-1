// import React, { useState } from 'react';
// import './TableWithFilterOptions.css';

// const TableWithFilterOptions = () => {
//   const [data, setData] = useState([
//     {
//       id: 1,
//       name: 'John',
//       phoneNumber: '123-456-7890',
//       email: 'john@example.com',
//       image: 'john.jpg',
//       city: 'New York',
//       about: 'Lorem ipsum dolor sit amet',
//       perHourPrice: 20,
//       equipmentCharges: 10,
//       equipmentDetails: 'Camera, Tripod',
//       paidEquipments: 2,
//       joiningDate: '2023-05-01',
//     },
//     {
//       id: 2,
//       name: 'Jane',
//       phoneNumber: '987-654-3210',
//       email: 'jane@example.com',
//       image: 'jane.jpg',
//       city: 'Los Angeles',
//       about: 'Lorem ipsum dolor sit amet',
//       perHourPrice: 25,
//       equipmentCharges: 15,
//       equipmentDetails: 'Camera, Lighting',
//       paidEquipments: 3,
//       joiningDate: '2023-04-15',
//     },
//     {
//       id: 3,
//       name: 'Mike',
//       phoneNumber: '555-123-4567',
//       email: 'mike@example.com',
//       image: 'mike.jpg',
//       city: 'Chicago',
//       about: 'Lorem ipsum dolor sit amet',
//       perHourPrice: 18,
//       equipmentCharges: 12,
//       equipmentDetails: 'Camera, Microphone',
//       paidEquipments: 1,
//       joiningDate: '2023-06-01',
//     },
//     // Add more sample data...
//     {
//       id: 4,
//       name: 'Sarah',
//       phoneNumber: '777-888-9999',
//       email: 'sarah@example.com',
//       image: 'sarah.jpg',
//       city: 'San Francisco',
//       about: 'Lorem ipsum dolor sit amet',
//       perHourPrice: 22,
//       equipmentCharges: 8,
//       equipmentDetails: 'Camera, Tripod, Lighting',
//       paidEquipments: 2,
//       joiningDate: '2023-05-20',
//     },
//     {
//       id: 5,
//       name: 'David',
//       phoneNumber: '111-222-3333',
//       email: 'david@example.com',
//       image: 'david.jpg',
//       city: 'Seattle',
//       about: 'Lorem ipsum dolor sit amet',
//       perHourPrice: 30,
//       equipmentCharges: 20,
//       equipmentDetails: 'Camera, Tripod, Lighting, Microphone',
//       paidEquipments: 4,
//       joiningDate: '2023-06-10',
//     },
//     {
//       id: 6,
//       name: 'Emily',
//       phoneNumber: '444-555-6666',
//       email: 'emily@example.com',
//       image: 'emily.jpg',
//       city: 'Boston',
//       about: 'Lorem ipsum dolor sit amet',
//       perHourPrice: 28,
//       equipmentCharges: 18,
//       equipmentDetails: 'Camera, Lighting',
//       paidEquipments: 2,
//       joiningDate: '2023-05-25',
//     },
//     {
//       id: 7,
//       name: 'Michael',
//       phoneNumber: '777-888-9999',
//       email: 'michael@example.com',
//       image: 'michael.jpg',
//       city: 'San Francisco',
//       about: 'Lorem ipsum dolor sit amet',
//       perHourPrice: 22,
//       equipmentCharges: 10,
//       equipmentDetails: 'Camera, Tripod',
//       paidEquipments: 1,
//       joiningDate: '2023-06-05',
//     },
//     // Add more sample data...
//     {
//       id: 8,
//       name: 'Emma',
//       phoneNumber: '123-456-7890',
//       email: 'emma@example.com',
//       image: 'emma.jpg',
//       city: 'New York',
//       about: 'Lorem ipsum dolor sit amet',
//       perHourPrice: 25,
//       equipmentCharges: 15,
//       equipmentDetails: 'Camera, Lighting',
//       paidEquipments: 3,
//       joiningDate: '2023-06-15',
//     },
//     {
//       id: 9,
//       name: 'Daniel',
//       phoneNumber: '987-654-3210',
//       email: 'daniel@example.com',
//       image: 'daniel.jpg',
//       city: 'Los Angeles',
//       about: 'Lorem ipsum dolor sit amet',
//       perHourPrice: 20,
//       equipmentCharges: 12,
//       equipmentDetails: 'Camera, Microphone',
//       paidEquipments: 2,
//       joiningDate: '2023-05-20',
//     },
//     {
//       id: 10,
//       name: 'Olivia',
//       phoneNumber: '555-123-4567',
//       email: 'olivia@example.com',
//       image: 'olivia.jpg',
//       city: 'Chicago',
//       about: 'Lorem ipsum dolor sit amet',
//       perHourPrice: 18,
//       equipmentCharges: 10,
//       equipmentDetails: 'Camera, Tripod, Lighting',
//       paidEquipments: 1,
//       joiningDate: '2023-05-10',
//     },
//     // Add more sample data...
//   ]);

//   const [filters, setFilters] = useState({});
//   const [activeFilter, setActiveFilter] = useState(null);

//   const handleFilterChange = (columnName, filterValue) => {
//     const updatedFilters = { ...filters, [columnName]: filterValue };
//     setFilters(updatedFilters);
//   };

//   const toggleFilter = columnName => {
//     setActiveFilter(activeFilter === columnName ? null : columnName);
//   };

//   const applyFilters = () => {
//     let filteredData = data;

//     Object.keys(filters).forEach(columnName => {
//       const filterValue = filters[columnName];
//       filteredData = filteredData.filter(
//         item =>
//           item[columnName]
//             .toString()
//             .toLowerCase()
//             .includes(filterValue.toLowerCase())
//       );
//     });

//     return filteredData;
//   };

//   return (
//     <div className="table-container">
//       <table className="table">
//         <thead>
//           <tr>
//             <th>
//               {activeFilter === 'id' ? (
//                 <input
//                   type="text"
//                   value={filters.id || ''}
//                   onChange={e => handleFilterChange('id', e.target.value)}
//                 />
//               ) : (
//                 <button onClick={() => toggleFilter('id')}>ID</button>
//               )}
//             </th>
//             <th>
//               {activeFilter === 'name' ? (
//                 <input
//                   type="text"
//                   value={filters.name || ''}
//                   onChange={e => handleFilterChange('name', e.target.value)}
//                 />
//               ) : (
//                 <button onClick={() => toggleFilter('name')}>Name</button>
//               )}
//             </th>
//             <th>
//               {activeFilter === 'phoneNumber' ? (
//                 <input
//                   type="text"
//                   value={filters.phoneNumber || ''}
//                   onChange={e => handleFilterChange('phoneNumber', e.target.value)}
//                 />
//               ) : (
//                 <button onClick={() => toggleFilter('phoneNumber')}>Phone Number</button>
//               )}
//             </th>
//             <th>
//               {activeFilter === 'email' ? (
//                 <input
//                   type="text"
//                   value={filters.email || ''}
//                   onChange={e => handleFilterChange('email', e.target.value)}
//                 />
//               ) : (
//                 <button onClick={() => toggleFilter('email')}>Email</button>
//               )}
//             </th>
//             <th>
//               {activeFilter === 'image' ? (
//                 <input
//                   type="text"
//                   value={filters.image || ''}
//                   onChange={e => handleFilterChange('image', e.target.value)}
//                 />
//               ) : (
//                 <button onClick={() => toggleFilter('image')}>Image</button>
//               )}
//             </th>
//             <th>
//               {activeFilter === 'city' ? (
//                 <input
//                   type="text"
//                   value={filters.city || ''}
//                   onChange={e => handleFilterChange('city', e.target.value)}
//                 />
//               ) : (
//                 <button onClick={() => toggleFilter('city')}>City</button>
//               )}
//             </th>
//             <th>
//               {activeFilter === 'about' ? (
//                 <input
//                   type="text"
//                   value={filters.about || ''}
//                   onChange={e => handleFilterChange('about', e.target.value)}
//                 />
//               ) : (
//                 <button onClick={() => toggleFilter('about')}>About</button>
//               )}
//             </th>
//             <th>
//               {activeFilter === 'perHourPrice' ? (
//                 <input
//                   type="text"
//                   value={filters.perHourPrice || ''}
//                   onChange={e => handleFilterChange('perHourPrice', e.target.value)}
//                 />
//               ) : (
//                 <button onClick={() => toggleFilter('perHourPrice')}>Per Hour Price</button>
//               )}
//             </th>
//             <th>
//               {activeFilter === 'equipmentCharges' ? (
//                 <input
//                   type="text"
//                   value={filters.equipmentCharges || ''}
//                   onChange={e => handleFilterChange('equipmentCharges', e.target.value)}
//                 />
//               ) : (
//                 <button onClick={() => toggleFilter('equipmentCharges')}>Equipment Charges</button>
//               )}
//             </th>
//             <th>
//               {activeFilter === 'equipmentDetails' ? (
//                 <input
//                   type="text"
//                   value={filters.equipmentDetails || ''}
//                   onChange={e => handleFilterChange('equipmentDetails', e.target.value)}
//                 />
//               ) : (
//                 <button onClick={() => toggleFilter('equipmentDetails')}>Equipment Details</button>
//               )}
//             </th>
//             <th>
//               {activeFilter === 'paidEquipments' ? (
//                 <input
//                   type="text"
//                   value={filters.paidEquipments || ''}
//                   onChange={e => handleFilterChange('paidEquipments', e.target.value)}
//                 />
//               ) : (
//                 <button onClick={() => toggleFilter('paidEquipments')}>Paid Equipments</button>
//               )}
//             </th>
//             <th>
//               {activeFilter === 'joiningDate' ? (
//                 <input
//                   type="text"
//                   value={filters.joiningDate || ''}
//                   onChange={e => handleFilterChange('joiningDate', e.target.value)}
//                 />
//               ) : (
//                 <button onClick={() => toggleFilter('joiningDate')}>Joining Date</button>
//               )}
//             </th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {applyFilters().map(item => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>{item.phoneNumber}</td>
//               <td>{item.email}</td>
//               <td>
//                 <img src={item.image} alt="Profile" className="profile-image" />
//               </td>
//               <td>{item.city}</td>
//               <td>{item.about}</td>
//               <td>${item.perHourPrice}</td>
//               <td>${item.equipmentCharges}</td>
//               <td>{item.equipmentDetails}</td>
//               <td>{item.paidEquipments}</td>
//               <td>{item.joiningDate}</td>
//               <td>
//                 <button className="action-button">View</button>
//                 <button className="action-button">Hold</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TableWithFilterOptions;


import React, { useState } from 'react';
import './TableWithFilterOptions.css';

const TableWithFilterOptions = () => {
  const [data, setData] = useState([
    // Sample data...
    {
      id: 1,
      name: 'John',
      phoneNumber: '123-456-7890',
      email: 'john@example.com',
      image: 'john.jpg',
      city: 'New York',
      about: 'Lorem ipsum dolor sit amet',
      perHourPrice: 20,
      equipmentCharges: 10,
      equipmentDetails: 'Camera, Tripod',
      paidEquipments: 2,
      joiningDate: '2023-05-01',
    },
    {
      id: 2,
      name: 'Jane',
      phoneNumber: '987-654-3210',
      email: 'jane@example.com',
      image: 'jane.jpg',
      city: 'Los Angeles',
      about: 'Lorem ipsum dolor sit amet',
      perHourPrice: 25,
      equipmentCharges: 15,
      equipmentDetails: 'Camera, Lighting',
      paidEquipments: 3,
      joiningDate: '2023-04-15',
    },
    {
      id: 3,
      name: 'Mike',
      phoneNumber: '555-123-4567',
      email: 'mike@example.com',
      image: 'mike.jpg',
      city: 'Chicago',
      about: 'Lorem ipsum dolor sit amet',
      perHourPrice: 18,
      equipmentCharges: 12,
      equipmentDetails: 'Camera, Microphone',
      paidEquipments: 1,
      joiningDate: '2023-06-01',
    },
    // Add more sample data...
    {
      id: 4,
      name: 'Sarah',
      phoneNumber: '777-888-9999',
      email: 'sarah@example.com',
      image: 'sarah.jpg',
      city: 'San Francisco',
      about: 'Lorem ipsum dolor sit amet',
      perHourPrice: 22,
      equipmentCharges: 8,
      equipmentDetails: 'Camera, Tripod, Lighting',
      paidEquipments: 2,
      joiningDate: '2023-05-20',
    },
    {
      id: 5,
      name: 'David',
      phoneNumber: '111-222-3333',
      email: 'david@example.com',
      image: 'david.jpg',
      city: 'Seattle',
      about: 'Lorem ipsum dolor sit amet',
      perHourPrice: 30,
      equipmentCharges: 20,
      equipmentDetails: 'Camera, Tripod, Lighting, Microphone',
      paidEquipments: 4,
      joiningDate: '2023-06-10',
    },
    {
      id: 6,
      name: 'Emily',
      phoneNumber: '444-555-6666',
      email: 'emily@example.com',
      image: 'emily.jpg',
      city: 'Boston',
      about: 'Lorem ipsum dolor sit amet',
      perHourPrice: 28,
      equipmentCharges: 18,
      equipmentDetails: 'Camera, Lighting',
      paidEquipments: 2,
      joiningDate: '2023-05-25',
    },
    {
      id: 7,
      name: 'Michael',
      phoneNumber: '777-888-9999',
      email: 'michael@example.com',
      image: 'michael.jpg',
      city: 'San Francisco',
      about: 'Lorem ipsum dolor sit amet',
      perHourPrice: 22,
      equipmentCharges: 10,
      equipmentDetails: 'Camera, Tripod',
      paidEquipments: 1,
      joiningDate: '2023-06-05',
    },
    // Add more sample data...
    {
      id: 8,
      name: 'Emma',
      phoneNumber: '123-456-7890',
      email: 'emma@example.com',
      image: 'emma.jpg',
      city: 'New York',
      about: 'Lorem ipsum dolor sit amet',
      perHourPrice: 25,
      equipmentCharges: 15,
      equipmentDetails: 'Camera, Lighting',
      paidEquipments: 3,
      joiningDate: '2023-06-15',
    },
    {
      id: 9,
      name: 'Daniel',
      phoneNumber: '987-654-3210',
      email: 'daniel@example.com',
      image: 'daniel.jpg',
      city: 'Los Angeles',
      about: 'Lorem ipsum dolor sit amet',
      perHourPrice: 20,
      equipmentCharges: 12,
      equipmentDetails: 'Camera, Microphone',
      paidEquipments: 2,
      joiningDate: '2023-05-20',
    },
    {
      id: 10,
      name: 'Olivia',
      phoneNumber: '555-123-4567',
      email: 'olivia@example.com',
      image: 'olivia.jpg',
      city: 'Chicago',
      about: 'Lorem ipsum dolor sit amet',
      perHourPrice: 18,
      equipmentCharges: 10,
      equipmentDetails: 'Camera, Tripod, Lighting',
      paidEquipments: 1,
      joiningDate: '2023-05-10',
    },
  ]);

  const [filters, setFilters] = useState({});
  const [activeFilter, setActiveFilter] = useState(null);
  const [searchText, setSearchText] = useState('');

  const handleFilterChange = (columnName, filterValue) => {
    const updatedFilters = { ...filters, [columnName]: filterValue };
    setFilters(updatedFilters);
  };

  const toggleFilter = columnName => {
    setActiveFilter(activeFilter === columnName ? null : columnName);
  };

  const handleSearch = event => {
    setSearchText(event.target.value);
  };

  const applyFilters = () => {
    let filteredData = data;

    Object.keys(filters).forEach(columnName => {
      const filterValue = filters[columnName];
      filteredData = filteredData.filter(
        item =>
          item[columnName]
            .toString()
            .toLowerCase()
            .includes(filterValue.toLowerCase())
      );
    });

    if (searchText) {
      const searchFilter = searchText.toLowerCase();
      filteredData = filteredData.filter(item => {
        for (const key in item) {
          if (item[key].toString().toLowerCase().includes(searchFilter)) {
            return true;
          }
        }
        return false;
      });
    }

    return filteredData;
  };

  return (
    <div className="table-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearch}
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>
              {activeFilter === 'id' ? (
                <input
                  type="text"
                  value={filters.id || ''}
                  onChange={e => handleFilterChange('id', e.target.value)}
                />
              ) : (
                <button onClick={() => toggleFilter('id')}>ID</button>
              )}
            </th>
            <th>
              {activeFilter === 'name' ? (
                <input
                  type="text"
                  value={filters.name || ''}
                  onChange={e => handleFilterChange('name', e.target.value)}
                />
              ) : (
                <button onClick={() => toggleFilter('name')}>Name</button>
              )}
            </th>
            <th>
              {activeFilter === 'phoneNumber' ? (
                <input
                  type="text"
                  value={filters.phoneNumber || ''}
                  onChange={e => handleFilterChange('phoneNumber', e.target.value)}
                />
              ) : (
                <button onClick={() => toggleFilter('phoneNumber')}>Phone Number</button>
              )}
            </th>
            <th>
              {activeFilter === 'email' ? (
                <input
                  type="text"
                  value={filters.email || ''}
                  onChange={e => handleFilterChange('email', e.target.value)}
                />
              ) : (
                <button onClick={() => toggleFilter('email')}>Email</button>
              )}
            </th>
            <th>
              {activeFilter === 'image' ? (
                <input
                  type="text"
                  value={filters.image || ''}
                  onChange={e => handleFilterChange('image', e.target.value)}
                />
              ) : (
                <button onClick={() => toggleFilter('image')}>Image</button>
              )}
            </th>
            <th>
              {activeFilter === 'city' ? (
                <input
                  type="text"
                  value={filters.city || ''}
                  onChange={e => handleFilterChange('city', e.target.value)}
                />
              ) : (
                <button onClick={() => toggleFilter('city')}>City</button>
              )}
            </th>
            <th>
              {activeFilter === 'about' ? (
                <input
                  type="text"
                  value={filters.about || ''}
                  onChange={e => handleFilterChange('about', e.target.value)}
                />
              ) : (
                <button onClick={() => toggleFilter('about')}>About</button>
              )}
            </th>
            <th>
              {activeFilter === 'perHourPrice' ? (
                <input
                  type="text"
                  value={filters.perHourPrice || ''}
                  onChange={e => handleFilterChange('perHourPrice', e.target.value)}
                />
              ) : (
                <button onClick={() => toggleFilter('perHourPrice')}>Per Hour Price</button>
              )}
            </th>
            <th>
              {activeFilter === 'equipmentCharges' ? (
                <input
                  type="text"
                  value={filters.equipmentCharges || ''}
                  onChange={e => handleFilterChange('equipmentCharges', e.target.value)}
                />
              ) : (
                <button onClick={() => toggleFilter('equipmentCharges')}>Equipment Charges</button>
              )}
            </th>
            <th>
              {activeFilter === 'equipmentDetails' ? (
                <input
                  type="text"
                  value={filters.equipmentDetails || ''}
                  onChange={e => handleFilterChange('equipmentDetails', e.target.value)}
                />
              ) : (
                <button onClick={() => toggleFilter('equipmentDetails')}>Equipment Details</button>
              )}
            </th>
            <th>
              {activeFilter === 'paidEquipments' ? (
                <input
                  type="text"
                  value={filters.paidEquipments || ''}
                  onChange={e => handleFilterChange('paidEquipments', e.target.value)}
                />
              ) : (
                <button onClick={() => toggleFilter('paidEquipments')}>Paid Equipments</button>
              )}
            </th>
            <th>
              {activeFilter === 'joiningDate' ? (
                <input
                  type="text"
                  value={filters.joiningDate || ''}
                  onChange={e => handleFilterChange('joiningDate', e.target.value)}
                />
              ) : (
                <button onClick={() => toggleFilter('joiningDate')}>Joining Date</button>
              )}
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applyFilters().map(item => (
            <tr key={item.id}>
               <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.email}</td>
              <td>
                <img src={item.image} alt="Profile" className="profile-image" />
              </td>
              <td>{item.city}</td>
              <td>{item.about}</td>
              <td>${item.perHourPrice}</td>
              <td>${item.equipmentCharges}</td>
              <td>{item.equipmentDetails}</td>
              <td>{item.paidEquipments}</td>
              <td>{item.joiningDate}</td>
              <td>
                <button className="action-button">View</button>
                <button className="action-button">Hold</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableWithFilterOptions;