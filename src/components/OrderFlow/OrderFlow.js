import React from 'react';
import "./index.css";


const OrderProcessingFlowchart = ({ eventConfirmed, eventStarted, eventInProcess, eventCompleted }) => {
  return (
    <div className="order-flowchart">
      <div className={`flowchart-node ${eventConfirmed ? 'active' : ''}`}>
        <p>Event Confirmed</p>
      </div>
      <div className={`flowchart-node ${eventStarted ? 'active' : ''}`}>
        <p>Event Started</p>
      </div>
      <div className={`flowchart-node ${eventInProcess ? 'active' : ''}`}>
        <p>Event in Process</p>
      </div>
      <div className={`flowchart-node ${eventCompleted ? 'active' : ''}`}>
        <p>Event Completed</p>
      </div>
    </div>
  );
};

export default OrderProcessingFlowchart;