import React from 'react';


const OrderStatus = ({ status }) => {
  return (
    <div className="order-status">
      <div className={`status-circle ${status}`}></div>
      <p className={`status-text ${status}`}>{status}</p>
    </div>
  );
};

export default OrderStatus;