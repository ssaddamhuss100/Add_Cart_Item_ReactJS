import React from 'react';

export default function Footer({ handleResetButton, totalAmount }) {
  console.log('Footer component - handleResetButton:', handleResetButton, 'Total amount:', totalAmount);
  return (
    <div className="row fixed-bottom">
      {/* Reset Button */}
      <button
        className="btn btn-danger col-3"
           onClick={handleResetButton} >
        Reset
      </button>

      {/* Total Amount Display */}
      <div className="col-6 bg-dark text-white d-flex justify-content-center align-items-center">
        <span className="fs-4">{totalAmount}</span>
      </div>

      {/* Pay Now Button */}
      <button className="btn btn-primary col-3">
        Pay Now
      </button>
    </div>
  );
}
