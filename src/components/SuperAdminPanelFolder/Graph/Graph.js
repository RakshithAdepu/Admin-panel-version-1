// src/components/HorizontalBarGraph.js
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import "./Graph.css"
const HorizontalBarGraph = () => {
  const [timeFilter, setTimeFilter] = useState("+"); // Default time filter


  // Dummy data for demonstration purposes
  const dataYear = [
    { category: '2024', amount1: 300, amount2: 150 },
    { category: '2023', amount1: 500, amount2: 250 },
    { category: '2022', amount1: 200, amount2: 100 },
    { category: '2021', amount1: 700, amount2: 350 },
  ];

  const [filterData, setFilterData]= useState(dataYear);

  const dataSixMonths = [
    { category: 'June', amount1: 300, amount2: 150 },
    { category: 'May', amount1: 500, amount2: 250 },
    { category: 'April', amount1: 200, amount2: 100 },
    { category: 'Mar', amount1: 700, amount2: 350 },
    { category: 'Feb', amount1: 200, amount2: 100 },
    { category: 'Jan', amount1: 700, amount2: 350 },
  ];


  const dataThreeMonths = [
   
    { category: 'March', amount1: 500, amount2: 250 },
    { category: 'Feb', amount1: 200, amount2: 100 },
    { category: 'Jan', amount1: 700, amount2: 350 },
  ];

  // Function to handle time filter changes
  const handleTimeFilterChangeYear = (filter) => {
    setTimeFilter(filter);
    setFilterData(filteredDataYear);
  };
  const handleTimeFilterChangeSixMonth = (filter) => {
    setTimeFilter(filter);
    setFilterData(filteredDataSixMonths);
  };
  const handleTimeFilterChangeThreeMonth = (filter) => {
    setTimeFilter(filter);
    setFilterData(filteredDataThreeMonths);
  };

  const filteredDataSixMonths = dataSixMonths.map((item) => ({
    ...item,
    category: `${item.category} (${timeFilter})`,
  }));

  const filteredDataThreeMonths = dataThreeMonths.map((item) => ({
    ...item,
    category: `${item.category} (${timeFilter})`,
  }));

  const filteredDataYear = dataYear.map((item) => ({
    ...item,
    category: `${item.category} (${timeFilter})`,
  }));

  return (
    <div className='GraphCont'>
      <div>
        <button className='graphBtn' onClick={() => handleTimeFilterChangeThreeMonth("+")}>3 Months</button>
        <button className='graphBtn' onClick={() => handleTimeFilterChangeSixMonth("+")}>6 Months</button>
        <button className='graphBtn' onClick={() => handleTimeFilterChangeYear("+")}>Yearly</button>
      </div>
      <BarChart width={650} height={300} data={filterData} layout="vertical">
       
        <XAxis  type="number" />
        <YAxis  type="category" dataKey="category"/>
        <Tooltip/>
        <Legend />
        <Bar dataKey="amount1" fill="#31CEFF" name="Event"  barSize={16} />
        <Bar dataKey="amount2" fill="#355FEF" name="Mart" barSize={16} />
      </BarChart>
    </div>
  );
};

export default HorizontalBarGraph;
